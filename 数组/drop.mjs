// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
export function drop(array, n = 1) {
  // 初始化length
  const length = array === null ? 0 : array.length
  // 从n位置开始使用slice截取到最后并将切片返回
  return length ? array.slice(n < 0 ? 0 : parseInt(n), length) : []
}