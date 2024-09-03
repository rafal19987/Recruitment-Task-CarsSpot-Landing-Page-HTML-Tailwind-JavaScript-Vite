const TABS = [
  {
    id: 1,
    label: 'Samochody osobowe',
    isActive: true,
    photos: [
      '/src/assets/car-1.webp',
      '/src/assets/car-2.webp',
      '/src/assets/car-3.webp',
      '/src/assets/car-4.webp',
      '/src/assets/car-5.webp',
      '/src/assets/car-6.webp',
    ],
  },
  {
    id: 2,
    label: 'Samochody dostawcze',
    isActive: false,
    photos: [
      '/src/assets/car-7.webp',
      '/src/assets/car-8.webp',
      '/src/assets/car-9.webp',
    ],
  },
]

document.addEventListener('DOMContentLoaded', function () {
  const swiperContainer = document.querySelector('#swiper-container')

  function renderTabs() {
    const tabsButtons = TABS.map(
      (tab) =>
        `<a
          class="inline-block font-robotoFlex font-semibold ${
            tab.isActive
              ? 'text-accent underline underline-offset-4'
              : 'text-black'
          }"
          href="#"
          data-id="${tab.id}"
        >
          ${tab.label}
        </a>`
    )

    const buttonsContainer = `<div class="flex gap-12">${tabsButtons.join(
      ''
    )}</div>`
    swiperContainer.innerHTML = buttonsContainer
  }

  function renderPhotos() {
    const activeTab = TABS.find((tab) => tab.isActive)
    const photosMarkup = activeTab.photos
      .map(
        (photo) => `
      <div class="swiper-slide w-full h-full object-cover">
        <img src="${photo}" alt="pojazd" aria-hidden='true' loading="lazy" />
      </div>
    `
      )
      .join('')

    const swiperWrapper = `
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          ${photosMarkup}
        </div>
        <div class="grid grid-cols-2">
          <div> </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `

    swiperContainer.insertAdjacentHTML('beforeend', swiperWrapper)

    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: false,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 48,
          grabCursor: true,
        },
      },
    })
  }

  function updateActiveTab(id) {
    TABS.forEach((tab) => (tab.isActive = tab.id === id))
    renderTabs()
    renderPhotos()
  }

  renderTabs()
  renderPhotos()

  swiperContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      e.preventDefault()
      const tabId = parseInt(e.target.getAttribute('data-id'), 10)
      updateActiveTab(tabId)
    }
  })
})
