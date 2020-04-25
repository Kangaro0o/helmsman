/**
 * @author Kelvin
 * @description 处理时间相关的函数
 */

/**
 * 计算秒杀活动剩余时间
 * @param {Date} start 秒杀活动开始时间
 * @param {Date} end 秒杀活动结束时间
 */
export const timeDiff = (start, end) => {
  let dateDiff = end.getTime() - start.getTime() // 时间差的毫秒数
  let dayDiff = Math.floor(dateDiff / (24 * 60 * 60 * 1000)) // 计算出相差天数
  let remainTimeWithoutDay = dateDiff % (24 * 60 * 60 * 1000) // 计算天数后剩余的毫秒数
  let hourDiff = Math.floor(remainTimeWithoutDay / (60 * 60 * 1000)) // 计算出相差的小时数
  let remainTimeWithoutHour = remainTimeWithoutDay % (60 * 60 * 1000) // 计算小时数后剩余的毫秒数
  let minuteDiff = Math.floor(remainTimeWithoutHour / (60 * 1000)) // 计算相差分钟数
  let remainTimeWithoutMinute = remainTimeWithoutHour % (60 * 1000) // 计算分钟数后剩余的毫秒数
  let secondDiff = Math.round(remainTimeWithoutMinute / 1000) // 计算相差秒数
  return {
    hour: (dayDiff * 24 + hourDiff) < 10 ? '0' + (dayDiff * 24 + hourDiff) : (dayDiff * 24 + hourDiff),
    minute: minuteDiff < 10 ? '0' + minuteDiff : minuteDiff,
    second: secondDiff < 10 ? '0' + secondDiff : secondDiff
  }
}

/**
 * 计算秒杀活动场次，如10:00
 * @param start_time
 * @returns {string}
 */
export const parsePlay = start_time => {
  let start = new Date(start_time)
  let hour = start.getHours()
  let minute = start.getMinutes() < 10 ? '0' + start.getMinutes() : start.getMinutes()
  return hour + ":" + minute
}
