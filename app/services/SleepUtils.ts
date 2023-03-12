export async function sleep(seconds: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(null) }, seconds > 0 ? seconds * 1000 : 0)
  })
}

export async function sleepMs(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(null) }, ms > 0 ? ms : 0)
  })
}
