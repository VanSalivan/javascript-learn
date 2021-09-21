const slidesPlugin = (startSlide = 0) => {
  const slides = document.querySelectorAll('.slide');

  slides[startSlide].classList.add('active')

  slides.forEach((item) => {
    item.addEventListener('click', () => {
      clearActiveClasses()
      item.classList.add('active')
    })
  })

  const clearActiveClasses = () => {
    slides.forEach((item) => {
      item.classList.remove('active')
    })
  }
}

slidesPlugin(4)