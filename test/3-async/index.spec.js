const { getUser } = require('../../app/user')

describe('Async', () => {
  
  it('setTimeout', (done) => {
    setTimeout(() => {
      expect(true).toBe(true)
      done()
    }, 10)
  });

  it('Promise', () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
        // reject(true)
      }, 10)
    })
  })

  it('async/await', async () => {
    expect.assertions(2)

    await expect(getUser(1)).resolves.toBe(1)
    await expect(getUser(1)).resolves.not.toBe(2)
  }
)

})