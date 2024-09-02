const hamburgerBtn = document.querySelector('#hamburger')
const closeMenuBtn = document.querySelector('#closeMenuBtn')
const mobileMenu = document.querySelector('#mobileMenu')
let isMobileMenuOpen = false

hamburgerBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('open')
  } else {
    mobileMenu.classList.remove('open')
  }

  console.log(isMobileMenuOpen)
})

closeMenuBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('open')
  } else {
    mobileMenu.classList.remove('open')
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('textContent')
  const button = document.getElementById('toggleButton')
  const arrowIcon = document.getElementById('arrowIcon')
  const originalText = textElement.innerText
  const maxLength = 180 // Maksymalna długość tekstu przed skróceniem
  const truncatedText = originalText.substring(0, maxLength) + ' [...]'
  let isTruncated = true

  // Ustawienie początkowego skróconego tekstu
  textElement.innerText = truncatedText

  // Funkcja przełączająca pełny tekst i skrócony tekst oraz obrót ikony
  button.addEventListener('click', function () {
    if (isTruncated) {
      textElement.innerText = originalText
      button.querySelector('span').innerText = 'Zwiń'
      arrowIcon.classList.add('rotate-180')
    } else {
      textElement.innerText = truncatedText
      button.querySelector('span').innerText = 'Rozwiń'
      arrowIcon.classList.remove('rotate-180')
    }
    isTruncated = !isTruncated
  })
})
