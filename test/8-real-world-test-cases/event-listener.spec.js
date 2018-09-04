const { attachEvents } = require('../../app/event-listener')

describe('Event listener', () => {

  let container

  beforeEach(() => {
    container = document.createElement('div')

    container.innerHTML = `
      <button class="click">click me!</button>
      <button class="blur">blur me!</button>
    `

    document.body.appendChild(container)

    attachEvents()
  })

  afterEach(() => {
    document.body.removeChild(container)
  })
  
  it('should simulate click', () => {

    console.log = jest.fn()

    expect(console.log).not.toHaveBeenCalled()

    document.querySelector('.click').dispatchEvent(new Event('click'))

    expect(console.log).toHaveBeenCalled()
    expect(console.log.mock.calls.length).toBe(1)

    console.log.mockClear()
  })

  it('should simulate blur', () => {
  
    console.log = jest.fn()

    expect(console.log).not.toHaveBeenCalled()

    document.querySelector('.blur').dispatchEvent(new Event('blur'))

    expect(console.log).toHaveBeenCalled()
    expect(console.log.mock.calls.length).toBe(1)

    console.log.mockClear()
  })

})