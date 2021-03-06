/* global filtersContainer */
const filters = [' ', '_1977', 'aden', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'gingham', 'hudson', 'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua', 'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2']
window.URL = window.URL || window.webkitURL

const fileElem = document.getElementById('fileButton')
const img = document.getElementById('image-render')

function handleFiles (files) {
  if (!files.length) {
    console.log('No files selected!')
  } else {
    const urlImage = window.URL.createObjectURL(files[0])
    img.src = urlImage
    fileElem.classList.toggle('d-none')
    img.classList.toggle('d-none')

    for (const filter of filters) {
      const label = document.createElement('label')
      label.style.display = 'inline'
      label.onclick = applyFilter

      const inputFilter = document.createElement('input')
      inputFilter.type = 'radio'
      inputFilter.name = 'filtro'
      inputFilter.value = filter
      inputFilter.style.display = 'none'
      // inputFilter.style.visibility = 'hidden'

      label.appendChild(inputFilter)

      const imgFilter = document.createElement('img')
      imgFilter.src = urlImage
      imgFilter.className = filter
      imgFilter.style.width = '10em'
      label.appendChild(imgFilter)

      filtersContainer.appendChild(label)
    }

    const firstFilter = document.querySelector('[type=radio]')
    firstFilter.checked = true
  }
}

function applyFilter () {
  const selectedRadio = document.querySelector('input:checked')
  if (selectedRadio) {
    img.className = 'img-fluid rounded mx-auto ' + selectedRadio.value
  }
}

filtersContainer.addEventListener('wheel', function (e) {
  this.scrollLeft += (e.deltaY * 50)
  e.preventDefault()
})
