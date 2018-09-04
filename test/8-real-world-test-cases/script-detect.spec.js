const { alreadyExist } = require('../../app/script-detect')

describe('Script detect', () => {

  let container

  beforeEach(() => {
    container = document.createElement('div')

    container.innerHTML = `
      <script src="bundle.js"></script>
      <script src="bundle-2.js"></script>
    `

    document.head.appendChild(container)
  })

  afterEach(() => {
    document.head.removeChild(container)
  })
  
  it('should detect script bundle.js', () => {
    expect(alreadyExist("bundle.js")).toBe(true)
  })

  it('should detect script bundle-2.js', () => {
    expect(alreadyExist("bundle-2.js")).toBe(true)
  })

  it('should not detect script non-exist.js', () => {
    expect(alreadyExist("non-exist.js")).toBe(false)
  })
})