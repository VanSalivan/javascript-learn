const slides = document.querySelectorAll('.slide');

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
