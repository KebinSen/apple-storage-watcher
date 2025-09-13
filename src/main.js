const http = require('superagent');
const consoleColors = require('./utils/consoleColors');
const sound = require('sound-play');
const schedule = require('node-schedule');
const { models, defaultModels } = require('./config/models');
const { defaultStore } = require('./config/stores');

// 查询附近门店
const searchNearby = true;

// 默认查询门店
const storeNum = defaultStore;

/**
 * 监控iPhone库存情况
 * @param {string} productName - 产品型号
 */
const monitorIphoneStorage = async (productName) => {
  // 查询指定门店及附近门店数据
  const url = encodeURI(`https://www.apple.com.cn/shop/fulfillment-messages?pl=true&mts.0=regular&mts.1=compact&parts.0=${productName}&searchNearby=${searchNearby}&store=${storeNum}`);
  const res = await http.get(url);
  const {
    stores
  } = res.body.body.content.pickupMessage;
  let subHeader = 'Unknown';
  try {
    subHeader = res.body.body.content.deliveryMessage[productName].regular.subHeader;
  } catch (e) {
    console.log('无法解析配送信息标题');
  }

  console.log(`${subHeader} ${productName}`);

  if (Array.isArray(stores) && stores.length > 0) {
    for (const store of stores) {
      try {
        const {
          pickupDisplay
        } = store.partsAvailability[productName];
        const color = pickupDisplay === 'available' ? consoleColors.FgGreen : consoleColors.FgRed;
        const { city, storeName } = store;
        console.log(`${color}  ${city} ${storeName}: ${pickupDisplay}`);
        // 产品有货时播放声音
        pickupDisplay === 'available' && sound.play('Hey.m4a');
      } catch (e) {
        console.error(consoleColors.FgRed, '解析店铺信息出错');
      }
    }
  } else {
    console.log(consoleColors.FgRed, `  ${subHeader} ${productName}: 无货可用商店`);
  }
}

// 选择颜色
const selectColors = [];

/**
 * 开始监控任务
 */
const startTask = async () => {
  const startTime = new Date();
  console.time('刷新耗时');
  console.log(`[${startTime.toLocaleString()}] 开始刷新`);
  console.log('----------------------------------------');

  // 确定要查询的型号列表
  const modelsToCheck = defaultModels.length > 0 ?
    defaultModels.reduce((acc, modelName) => {
      if (models[modelName]) {
        acc[modelName] = models[modelName];
      }
      return acc;
    }, {}) :
    models;

  for (const [productName, productColor] of Object.entries(modelsToCheck)) {
    try {
      // 检查颜色是否被选择或未选择任何颜色（监控所有）
      if (selectColors.length === 0 || selectColors.includes(productColor)) {
        await monitorIphoneStorage(productName);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const endTime = new Date();
  console.log('----------------------------------------');
  console.log(`[${endTime.toLocaleString()}] 刷新完成`);
  console.timeEnd('刷新耗时');
  console.log('');
}

// 周期性运行定时任务
// 开始时间
const startTime = new Date(Date.now());
// 结束时间，持续运行时间要大于开始运行的时间，否则定时任务不会执行
// 设定持续运行时间24小时
const endTime = new Date(startTime.getTime() + 24 * 3600 * 1000);

// 注意：请求过于频繁可能会被封IP
// 每天15:00-19:00每3分钟执行一次
schedule.scheduleJob({ start: startTime, end: endTime, rule: '0 0/3 15,16,17,18 * * ?' }, function(){
    // 设置随机延迟，避免固定时间访问
    const timeOut = Math.floor(Math.random()*10) * 1000;
    setTimeout(async () => {
      await startTask();
    }, timeOut);
});

startTask().then();