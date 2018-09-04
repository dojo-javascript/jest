

describe('Snapshots', () => {

  let data
  let DOM
  beforeEach(() => {
    data = {
      a: 1,
      b: "OK",
      c: true,
      d: function() {
        return true
      },
      e: [2, 'OK', true, () => undefined]
    }

    DOM = document.createElement('div')
    DOM.innerHTML = `
      <h1>Some title</h1>
      <h2>Some subtitle</h2>
      <p>Some paragraph</p>
    `

  })
  it('should match snapshot from OBJECT', () => {
    expect(data).toMatchSnapshot()
  });

  it('should match snapshot from DOM Element', () => {
    expect(DOM).toMatchSnapshot()
  })
})