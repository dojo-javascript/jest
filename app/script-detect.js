exports.alreadyExist =  (src) => {
  let exist = false;

  [].forEach.call(document.getElementsByTagName('script'), (element) => {
    if (!exist && element.src.indexOf(src) !== -1) {
      return exist = true
    }

  })

  return exist
}
