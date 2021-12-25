const title = document.querySelector('#title')

title.addEventListener('mouseover', (evt) => {
  const { clientX, clientY } = evt
  const { x, y, width, height } = title.getBoundingClientRect()
  const midX = x + width / 2
  const midY = y + height / 2
  const offsetX = clientX - midX
  const offsetY = clientY - midY

  moveOffset(title, width, height, offsetX, offsetY)
})

function moveOffset(el, width, height, offsetX, offsetY) {
  const top = parseFloat(el.style.top) || 0
  const left = parseFloat(el.style.left) || 0
  el.style.top = `${
    top + (offsetY > 0 ? -1 : 1) * (height / 2 - Math.abs(offsetY))
  }px`
  el.style.left = `${
    left + (offsetX > 0 ? -1 : 1) * (width / 2 - Math.abs(offsetX))
  }px`
  console.log(el.style.top, el.style.left)
}
