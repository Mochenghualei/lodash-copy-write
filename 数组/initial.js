// 获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）
export default function initial(array) {
  const length = array == null ? 0 : array.length
  return length ? array.slice(0, length - 1) : []
}
