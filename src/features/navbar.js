const hamburgerBtn = document.querySelector('#hamburger')
const closeMenuBtn = document.querySelector('#closeMenuBtn')
const mobileMenu = document.querySelector('#mobileMenu')
let isMobileMenuOpen = false

hamburgerBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('open')
    document.body.style.overflow = 'hidden'
  } else {
    mobileMenu.classList.remove('open')
    document.body.style.overflow = ''
  }
})

closeMenuBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('open')
  } else {
    mobileMenu.classList.remove('open')
  }
})
