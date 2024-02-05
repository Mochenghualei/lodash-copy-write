export function baseFlatten(array, depth, predicate, isStrict, result) {
  // 初始化变量
  predicate || (predicate = isFlattenable)
  result || (result = [])

  // 边界判断
  if (array == null)
    return result

  for (const value of array) {
    // 如果depth>0并且符合断言函数校验(默认为检测是否可迭代)，则展开结果至result，depth>1递归调用baseFlatten
    if (depth > 0 && predicate(value)) {
      if (depth > 1)
        baseFlatten(value, depth - 1, predicate, isStrict, result)
      else
        result.push(...value)
    }
    else if (!isStrict) {
      // 否则，将当前值添加至result当前位置
      result[result.length] = value
    }
  }

  return result
}

function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}

function isArguments(value) {
  const toString = Object.prototype.toString
  return isObjectLike(value) && toString.call(value) === '[object Arguments]'
}

function isFlattenable(value) {
  return Array.isArray(value) || isArguments(value)
}
