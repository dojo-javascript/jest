const { getUser } = require('../../app/user')

describe('Spy', () => {
  it('should call spy', () => {
    const spy = jest.fn()

    function callSpy() {
      spy(true)
    }

    expect(spy.mock.calls.length).toBe(0)
    expect(spy).not.toHaveBeenCalled()

    callSpy()
    callSpy()

    expect(spy.mock.calls.length).toBe(2)
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(true)
  })

  it('should spy and call with mockImplementation', () => {
    const obj = {
      spiedFunction: () => {
        return 'some text'
      }
    }

    obj.spiedFunction = jest.fn(function() {
      return 'new text'
    })

    expect(obj.spiedFunction).not.toHaveBeenCalled()

    expect(obj.spiedFunction()).toBe('new text')
    
    expect(obj.spiedFunction).toHaveBeenCalled()

  })

  it('should spy global function', async () => {
    global.setTimeout = jest.fn()

    expect(setTimeout).not.toHaveBeenCalled()

    getUser()

    expect(setTimeout).toHaveBeenCalled()

    global.setTimeout.mockClear()
  })

})