const { create } = require('../../app/outbrain-manager')
    
jest.mock('../../app/script-detect', () => ({
  alreadyExist: jest.fn(() => true)
}))

describe('Outbrain manager', () => {
  
  let container

  beforeEach(() => {
    container = document.createElement('div')
  
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    jest.clearAllMocks()
  })

  it('should not init if no placeholder', () => {

    const { alreadyExist } = require('../../app/script-detect')

    create()

    expect(alreadyExist).not.toHaveBeenCalled()
  })

  describe('with placeholder', () => {

    beforeEach(() => {
      container.innerHTML = `
        <div data-outbrain-container></div>
      `
    })

    afterEach(() => {
      jest.clearAllMocks()
    })
    
    it('should inject outbrain script', () => {
  
      const { alreadyExist } = require('../../app/script-detect')
  
      expect(alreadyExist).not.toHaveBeenCalled()

      create()
  
      expect(alreadyExist).toHaveBeenCalled()

      expect(container).toMatchSnapshot()
    })
    
    it('should inject outbrain script', () => {
  
      container.innerHTML = `
        <div data-outbrain-container 
             data-ob-template="my-product"
             data-src="https://my-website.other.com"
             data-widget-id="SOME_ID"></div>
      `
      const { alreadyExist } = require('../../app/script-detect')

      create()
  
      expect(alreadyExist).toHaveBeenCalled()

      expect(container).toMatchSnapshot()
    })

  })

})