const Account = require('./account')

exports.getUser = (n) => new Promise(resolve => {
  setTimeout(() => {
    resolve(n)
  }, 1)
})

exports.getAccount = (n) => {
  return Account.getAccount(n)
}