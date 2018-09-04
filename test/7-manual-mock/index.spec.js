jest.mock('../../app/bucket')

const { getBucket } = require('../../app/bucket')

describe('Manual mock', () => {
  it('should call mocked method', () => {
    expect(getBucket()).toEqual(['a', 'b', 'c'])
  })
})