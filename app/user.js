exports.getUser = (n) => new Promise(resolve => {
  setTimeout(() => {
    resolve(n)
  }, 1)
})