const _scrollEventListener = () => {
  const element = document.querySelector('.content')
  const top = element.getBoundingClientRect().top
  if(window.scrollY >= top) {
    element.classList.add('animated')
  } else {
    element.classList.remove('animated')
  }
}

exports.scrollAnimator = () => {
  window.removeEventListener('scroll', _scrollEventListener)
  window.addEventListener('scroll', _scrollEventListener, { passive: true })
}