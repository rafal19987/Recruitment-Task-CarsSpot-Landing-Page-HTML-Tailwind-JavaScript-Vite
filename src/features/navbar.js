const hamburgerBtn = document.querySelector('#hamburger')
const closeMenuBtn = document.querySelector('#closeMenuBtn')
const mobileMenu = document.querySelector('#mobileMenu')
const menuLinks = mobileMenu.querySelectorAll('a')

function toggleMobileMenu(isOpen) {
  mobileMenu.classList.toggle('open', isOpen)
  document.body.style.overflow = isOpen ? 'hidden' : ''
}

function closeMobileMenu() {
  toggleMobileMenu(false)
}

function handleMenuToggle() {
  const isCurrentlyOpen = mobileMenu.classList.contains('open')
  toggleMobileMenu(!isCurrentlyOpen)
}

hamburgerBtn.addEventListener('click', handleMenuToggle)
closeMenuBtn.addEventListener('click', closeMobileMenu)

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu)
})

document.addEventListener('click', (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target)
  const isClickOnHamburger = hamburgerBtn.contains(event.target)

  if (
    !isClickInsideMenu &&
    !isClickOnHamburger &&
    mobileMenu.classList.contains('open')
  ) {
    closeMobileMenu()
  }
})
