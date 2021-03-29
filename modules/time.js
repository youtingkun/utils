/*
与时间相关的方法
 */

export const countDown= function (firstTime,lastTime){
    const offsetTime = lastTime - firstTime
    const day = parseInt(offsetTime/(60*60*24*1000))
    const hour = parseInt(offsetTime/(60*60*1000)%24)
    const minu = parseInt(offsetTime/(60*1000)%60)
    const sec = parseInt(offsetTime/1000%60)
   return {
       day,
       hour,
       minu,
       sec
   }
}

