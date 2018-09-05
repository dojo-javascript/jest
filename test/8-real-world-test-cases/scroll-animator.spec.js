const { scrollAnimator } = require('../../app/scroll-animator.js')

describe('Scroll', () => {

  let container

  beforeEach(() => {
    container = document.createElement('div')

    container.innerHTML = `
      <div class="content">Some text</div>
    `

    window.scrollY = 0

    scrollAnimator()

    document.body.appendChild(container)

    document.querySelector('.content').getBoundingClientRect = jest.fn(() => ({
      top: 20
    }))
  })

  afterEach(() => {
    document.body.removeChild(container)
  })
  
  it('should not trigger if scrollTop < content', () => {
    window.dispatchEvent(new Event('scroll'))
    expect(document.querySelector('.content').classList.contains('animated')).toBe(false)
  })

  it('should not trigger if scrollTop > content', () => {
    window.scrollY = 200
    window.dispatchEvent(new Event('scroll'))
    expect(document.querySelector('.content').classList.contains('animated')).toBe(true)
  })
})