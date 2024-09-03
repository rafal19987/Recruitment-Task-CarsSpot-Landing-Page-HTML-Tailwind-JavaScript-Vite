const articles = document.querySelectorAll('article')

articles.forEach((article) => {
  const textElement = article.querySelector('.textContent')
  const button = article.querySelector('.toggleContent')
  const originalText = textElement.innerText
  const maxLength = 180
  const truncatedText = originalText.substring(0, maxLength) + ' [...]'
  let isTruncated = true
  textElement.innerText = truncatedText

  button.addEventListener('click', function () {
    if (isTruncated) {
      textElement.innerText = originalText
      button.querySelector('span').innerText = 'Zwiń'
    } else {
      textElement.innerText = truncatedText
      button.querySelector('span').innerText = 'Rozwiń'
    }
    isTruncated = !isTruncated
  })
})
