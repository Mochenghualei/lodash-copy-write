/* 仿写debounce
    不考虑传入maxWait和throttle的兼容性
  */
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export default function debounce(fn, wait, options) {
  let lastArgs, lastThis, timerId, lastCallTime

  let leading = false // 先执行后延时，默认false
  let trailing = true // 先延时后执行，默认true

  if (typeof fn !== 'function')
    throw new TypeError('Expected a function')

  // 初始化
  wait = +wait || 500
  if (isObject(options)) {
    leading = !!options.leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  // 执行目标函数
  function invokeFunc() {
    return fn.apply(lastThis, lastArgs)
  }

  // 计算剩余时长:这里不是很理解
  // function remainingWait(time) {
  //   const timeSinceLastCall = time - lastCallTime
  //   const timeWaiting = wait - timeSinceLastCall
  //   return timeWaiting
  // }

  // 定时器执行逻辑
  function timerExpired() {
    const time = +new Date()
    if (shouldInvoke(time))
      return trailingEdge()

    // 这里计算距离最后一次点击还需要等待的时间差，在此期间timerId一直有值，不会去执行目标函数
    timerId = setTimeout(timerExpired, wait)
    // timerId = setTimeout(timerExpired, remainingWait(time))
  }

  function trailingEdge() {
    timerId = undefined
    if (trailing && lastArgs)
      return invokeFunc()
  }

  function leadingEdge() {
    // 开启定时器
    timerId = setTimeout(timerExpired, wait)
    // 判断leading，为true则执行目标函数并返回，否则返回result
    return leading && invokeFunc()
  }

  // 判断是否满足调用条件
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    // 条件1:timerId === undefined-首次调用时
    // 条件2:距离上次调用时长大于等于wait
    // 满足任一条件即判定可调用
    return (lastCallTime === undefined) || (timeSinceLastCall >= wait)
  }

  // 入口方法：即返回的直接调用的方法
  return function debounced(...args) {
    const time = +new Date() // 获取当前调用时间
    const isInvoking = shouldInvoke(time) // 判断是否满足调用条件

    lastCallTime = time // 记录此次调用时间为lastCallTime，用以下次调用时计算距此次调用的时长
    lastArgs = args // 记录此次调用入参
    lastThis = this // 记录此次调用上下文
    if (isInvoking) {
      // 首次调用时timerId为undefined
      if (timerId === undefined) {
        // 调用leadingEdge并返回结果:由于leading是先执行延时，所以要先对其进行判断
        return leadingEdge()
      }
    }
  }
}
