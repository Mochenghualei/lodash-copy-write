export function createRound(methodName) {
  const func = Math[methodName]

  return function (number, precision) {
    number = Number(number)
    precision = precision === null ? 0 : Math.min(+precision, 292)

    // 精度处理(根据精度转换为科学计数法，round后再转回去作为结果返回)
    if (precision && Number.isFinite(number)) {
      let pair = (`${String(number)}e`).split('e')
      const value = func(`${pair[0]}e${+pair[1] + precision}`)
      pair = (`${String(value)}e`).split('e')
      const result = +(`${pair[0]}e${+pair[1] - precision}`)
      return result
    }

    return func(number)
  }
}
