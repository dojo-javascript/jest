const User = require('../../app/user')

jest.mock('../../app/account', () => ({
  getAccount: jest.fn(() => 'account mocked')
}))

describe('Mock', () => {

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should use mocked getAccount', () => {
    expect(User.getAccount(2)).toBe('account mocked')
  })
})