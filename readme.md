# Apple Storage Watcher

> 简陋版 苹果库存检查器
> A really simple Apple Storage Watcher from commandline.

支持监控iPhone 17系列的库存情况。

## 安装

```bash
npm install
```

## 使用

```bash
npm start
```

> 注意：默认使用 `src/main.js` 作为入口文件。如果需要使用旧版本，请运行 `node src/index.js`

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
│   ├── index.js         # 原始入口文件（备用）
│   ├── utils/           # 工具函数
│   │   └── consoleColors.js
│   ├── config/          # 配置文件
│   │   ├── models.js    # 产品型号配置
│   │   └── stores.js    # 门店配置
├── README.md            # 本文档
└── package.json         # 项目配置
```