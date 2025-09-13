# Apple Storage Watcher

> 简陋版 苹果库存检查器

支持监控iPhone的库存情况。

## 安装

```bash
npm install
```

## 使用

```bash
npm start
```

## 配置

- [门店配置](src/config/stores.js)
- [产品型号配置](src/config/models.js)

## 支持的监控模式

### 1. 时间间隔模式

在[src/main.js](src/main.js)中配置时钟频率。

### 2. 定时任务模式

在[src/main.js](src/main.js)中配置定时任务。

使用 cron 设定周期性定时运行，设置及验证规则可参考[cron在线解析](https://cron.qqe2.com/)

## 项目结构

```
apple-storage-watcher/
├── src/
│   ├── main.js          # 主入口文件
│   ├── utils/           # 工具函数
│   │   └── consoleColors.js
│   ├── config/          # 配置文件
│   │   ├── models.js    # 产品型号配置
│   │   └── stores.js    # 门店配置
├── README.md            # 本文档
└── package.json         # 项目配置
```

## 功能说明

本工具可以监控Apple产品在各门店的库存情况，当有货时会通过颜色标识并在控制台显示，同时播放提示音。

## 配置说明

### 产品型号配置

在`src/config/models.js`文件中配置需要监控的产品型号。

### 门店配置

在`src/config/stores.js`文件中配置需要监控的门店信息。

### 默认监控型号

可以通过设置`defaultModels`数组来指定默认监控的型号，如果不设置则监控所有型号。