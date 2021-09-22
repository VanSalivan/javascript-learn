function fullScreenSlider() {
  // buttons
  const upBtn = document.querySelector('.up-button');
  const downBtn = document.querySelector('.down-button');

  // контейнер viewport
  const container = document.querySelector('.container')
  // track
  const sidebar = document.querySelector('.sidebar');
  // container слайдов
  const mainSlide = document.querySelector('.main-slide');
  // присутствует один слайд
  const slidesCount = mainSlide.querySelectorAll('div').length;
  sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

  let activeSlideIndex = 0;

  upBtn.addEventListener('click', () => {
    changeSlide('up')
  })

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case "ArrowUp": {
        changeSlide('up')
        break
      }

      case "ArrowDown": {
        changeSlide('down')
        break
      }

      default: {
        break
      }
    }
  })

  downBtn.addEventListener('click', () => {
    changeSlide('down')
  })


  function changeSlide(direction) {
    switch (direction) {
      case 'down': {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
          activeSlideIndex = slidesCount - 1;
        }
        break;
      }

      case 'up': {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
          activeSlideIndex = 0;
        }
        break
      }

      default: {
        break
      }
    }

    //высота DOM элемента
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
  }
}

fullScreenSlider()