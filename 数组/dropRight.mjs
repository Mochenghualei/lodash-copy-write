/**
 * 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
 */
export function dropRight(array, n = 1) {
  // 初始化length
  const length = array === null ? 0 : array.length
  n = length - parseInt(n)
  // 从0开始使用slice截取到n并将切片返回
  return length ? array.slice(0, n < 0 ? 0 : n) : []
}