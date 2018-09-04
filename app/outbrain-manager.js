const  { alreadyExist } = require('./script-detect')

const outbrainURI = "//outbrain-ui/outbrain.js"

const _placeholders = []

const _initOubrain = () => {
  if (alreadyExist(outbrainURI)){
    return
  }

  const outbrainScript = document.createElement('script')
  outbrainScript.src = outbrainURI
  outbrainScript.type = "text/javascript"
  outbrainScript.async = true

  document.head.appendChild(outbrainScript)
}

const _replacePlaceholder = (placeholder) => {
    let outbrainEl = _createOutbrainElement(placeholder)
    _placeholders.push(outbrainEl)
    placeholder.parentNode.insertBefore(outbrainEl, placeholder.nextSibling)
    outbrainEl.parentElement.removeChild(placeholder)
}

const _createOutbrainElement = (placeholder) => {
    const outbrainEl = document.createElement('div')
    outbrainEl.className = 'OUTBRAIN'
    outbrainEl.dataset.src =  placeholder.dataset.src || "https://my-website.com" //document.location.href
    outbrainEl.dataset.widgetId = placeholder.dataset.widgetId || 'CRMB_1' 
    outbrainEl.dataset.obTemplate = placeholder.dataset.obTemplate || 'my-project'
    return outbrainEl
}

exports.create = () => {
    [].forEach.call(document.querySelectorAll('[data-outbrain-container]'), (element) => {
        _replacePlaceholder(element)
    })

    if (_placeholders.length < 1) return
    _initOubrain()
}
