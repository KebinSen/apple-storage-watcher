/**
 * Apple产品型号配置文件
 * 包含iPhone 17系列型号信息
 *
 * iPhone型号格式说明：
 * - 型号代码：5-6位字母数字组合 + / + 1位字母（如MTQ63CH/A）
 * - 颜色名称：使用中文颜色名称
 */

// 默认查询型号（可选，如果不设置则查询所有型号）
const defaultModels = [
   'MG8V4CH/A' // iPhone 17 Pro 深蓝色 256GB
];


// 要监听的型号
const models = {
  // -----iPhone 17 Pro-----

  // iPhone 17 Pro 256GB
  'MG8U4CH/A': '星宇橙色',
  'MG8V4CH/A': '深蓝色',
  'MG8T4CH/A': '银色',

  // iPhone 17 Pro 512GB
  'MG8X4CH/A': '星宇橙色',
  'MG8Y4CH/A': '深蓝色',
  'MG8W4CH/A': '银色',

  // iPhone 17 Pro 1TB
  'MG914CH/A': '星宇橙色',
  'MG924CH/A': '深蓝色',
  'MG904CH/A': '银色',

  // -----iPhone 17 Pro Max-----

  // iPhone 17 Pro Max 256GB
  'MG044CH/A': '星宇橙色',
  'MG054CH/A': '深蓝色',
  'MG034CH/A': '银色',

  // iPhone 17 Pro Max 512GB
  'MG074CH/A': '星宇橙色',
  'MG084CH/A': '深蓝色',
  'MG064CH/A': '银色',

  // iPhone 17 Pro Max 1TB
  'MG0A4CH/A': '星宇橙色',
  'MG0E4CH/A': '深蓝色',
  'MG094CH/A': '银色',

  // iPhone 17 Pro Max 2TB
  'MG0F4CH/A': '银色',
  'MG0G4CH/A': '星宇橙色',
  'MG0Q4CH/A': '深蓝色',
};


module.exports = { models, defaultModels };