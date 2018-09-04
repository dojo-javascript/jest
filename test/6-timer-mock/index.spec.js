describe('Timer mock', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should update counter every 1 seconds', () => {
    let count = 0

    setInterval(() => {
      count++
    }, 1000)

    expect(count).toBe(0)

    jest.advanceTimersByTime(1000 * 1000)

    expect(count).toBe(1000)

  });

  it('should wait for all timers', () => {
    
    let a = jest.fn()
    let b = jest.fn()
    let c = jest.fn()

    setTimeout(a, 1000)
    setTimeout(b, 10000)
    setTimeout(c, 100)

    expect(a).not.toHaveBeenCalled()
    expect(b).not.toHaveBeenCalled()
    expect(c).not.toHaveBeenCalled()

    // jest.runAllTimers()
    jest.runOnlyPendingTimers()

    expect(a).toHaveBeenCalled()
    expect(b).toHaveBeenCalled()
    expect(c).toHaveBeenCalled()

  })

})