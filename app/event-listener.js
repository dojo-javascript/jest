exports.attachEvents = () => {
  document.querySelector('.click').addEventListener('click', () => {
    console.log('clicked !')
  })

  document.querySelector('.blur').addEventListener('blur', () => {
    console.log('blurred !')
  })
}