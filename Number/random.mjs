function baseRandom(lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1))
}

export function random(lower, upper, floating) {
  if (floating && typeof floating !== 'boolean')
    upper = floating = undefined

  if (floating === undefined) {
    if (typeof upper === 'boolean') {
      floating = upper
      upper = undefined
    }
    else if (typeof lower === 'boolean') {
      floating = lower
      lower = undefined
    }
  }

  if (lower === undefined && upper === undefined) {
    lower = 0
    upper = 1
  }
  else {
    lower = Number(lower)
    if (upper === undefined) {
      upper = lower
      lower = 0
    }
    else {
      upper = Number(upper)
    }
  }

  if (lower > upper) {
    const temp = lower
    lower = upper
    upper = temp
  }

  // 浮点数处理
  // 1.`${rand}` 将随机数 rand 转换为字符串。
  // 2.`${rand}` 的长度可以通过 (${rand}).length 获取，这表示随机数的位数。
  // `1e-${(`${rand}`).length - 1}`` 表示一个科学计数法的数字，指数部分为随机数的位数减 1，这样就得到了一个类似于 0.1、0.01、0.001等的小数。例如，如果随机数是0.586，那么这个部分就是 `0.001`。
  // Number.parseFloat() 方法将这个科学计数法的字符串转换为对应的数字，得到的结果就是 0.001 这样的小数。
  // 接下来，将这个小数乘以 (upper - lower)，加上 lower，这样就可以得到一个介于 lower 和 upper 之间的随机数。
  // 这里有一个特殊的情况要处理：如果 rand 的位数不足，那么乘以的 0.001 这样的小数就可能不够小，导致生成的随机数超过了 upper。为了避免这种情况，使用 Math.min() 方法来比较计算得到的随机数和 upper，选择其中较小的值作为返回值
  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random()
    return Math.min((lower + (rand * (upper - lower + Number.parseFloat(`1e-${(`${rand}`).length - 1}`)))), upper)
  }

  return baseRandom(lower, upper)
}

const res = random(1.2, 5.2)
console.log('res :>>> ', res)
