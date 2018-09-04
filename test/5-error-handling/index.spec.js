const { getUser } = require('../../app/user')

describe('Error Handling', () => {
  it('should throw error if getUser is called without ID', () => {
    expect(() => {
      getUser(1)
    }).not.toThrowError()

    expect(() => {
      getUser()
    }).toThrowError()
  })

  it('should throw error provide ID', () => {
    expect(() => {
      getUser()
    }).toThrow(new Error('ID not provided'))
  })
})