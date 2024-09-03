const dialogContainer = document.querySelector('#dialog')
const showDialogBtn = document.querySelector('#showDialogBtn')
const closeDialogBtn = document.querySelector('#closeDialogBtn')
let isDialogOpen = false

showDialogBtn.addEventListener('click', (e) => {
  isDialogOpen = true
  e.preventDefault()

  if (isDialogOpen) {
    dialogContainer.classList.add('flex')
    dialogContainer.classList.remove('hidden')
  } else {
    dialogContainer.classList.remove('flex')
    dialogContainer.classList.add('hidden')
  }
})

closeDialogBtn.addEventListener('click', () => {
  isDialogOpen = false

  if (!isDialogOpen) {
    dialogContainer.classList.add('hidden')
    dialogContainer.classList.remove('flex')
  } else {
    dialogContainer.classList.remove('flex')
  }
})
