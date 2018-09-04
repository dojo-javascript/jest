const Account = require('./account')

exports.getUser = (n) => {
  if( !n ) {
    throw new Error('ID not provided')
  }
  
  return new Promise(resolve => {

    setTimeout(() => {
      resolve(n)
    }, 1)
  })
}

exports.getAccount = (n) => {
  return Account.getAccount(n)
}