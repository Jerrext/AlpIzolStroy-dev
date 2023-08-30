document.addEventListener("DOMContentLoaded", () => {
  const galleryBtnsWrapper = document.querySelector(".gallery__btns-wrapper")
  const galleryBtnMore = document.querySelector(".gallery__btn-more")
  const galleryBtnHide = document.querySelector(".gallery__btn-hide")
  const galleryGrid = document.querySelectorAll(".gallery__grid")
  
  let count1 = 1
  if (count1 < galleryGrid.length) {
    galleryBtnMore.addEventListener('click', () => {
      galleryGrid[count1].style.display = "grid";
      count1++;
      if (galleryGrid.length === count1) {
        galleryBtnMore.style.display = "none"
        galleryBtnHide.style.display = "block"
      }
    });
  
    galleryBtnHide.addEventListener('click', () => {
      galleryGrid.forEach(item => {
        item.style.display = ""
      })
      galleryBtnMore.style.display = ""
      galleryBtnHide.style.display = ""
      count1 = 1
    })
  } else {
    galleryBtnsWrapper.style.display = "none"
  }

  const certificatesBtnsWrapper = document.querySelector(".certificates__btns-wrapper")
  const certificatesBtnMore = document.querySelector(".certificates__btn-more")
  const certificatesBtnHide = document.querySelector(".certificates__btn-hide")
  const certificatesGrid = document.querySelectorAll(".certificates__grid")

  if (window.innerWidth > 1300) {
    let count2 = 2
    if (count2 < certificatesGrid.length) {
      certificatesBtnMore.addEventListener('click', () => {
        certificatesGrid[count2].style.display = "grid";
        count2++;
        if (certificatesGrid.length === count2) {
          certificatesBtnMore.style.display = "none"
          certificatesBtnHide.style.display = "block"
        }
      });
  
      certificatesBtnHide.addEventListener('click', () => {
        certificatesGrid.forEach(item => {
          item.style.display = ""
        })
        certificatesBtnMore.style.display = ""
        certificatesBtnHide.style.display = ""
        count2 = 2
      })
    } else {
      certificatesBtnsWrapper.style.display = "none"
    }
    
  }
})

const swiper1 = new Swiper('.banner__swiper', {
  effect: 'fade',
  slidesPerView: 1,
  loop: true,
  simulateTouch: false,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  pagination: {
    el: ".banner__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
});

const swiper2 = new Swiper('.testimonial__swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  simulateTouch: false,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".testimonial__swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  navigation: {
    nextEl: ".testimonial__swiper-button-next",
    prevEl: ".testimonial__swiper-button-prev",
  },
});

const overflowToggle = (arg) => {
  if (arg) {
    document.documentElement.style.overflow = "hidden auto"
    document.body.style.overflow = "hidden auto"
  } else {
    document.documentElement.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  }
}

const popUpOpen = (window, wrapper, overlay) => {
  overflowToggle(false)
  window.style.display = "block"

  setTimeout(() => {
    overlay.style.opacity = ".5"
    wrapper.style.opacity = "1"
    wrapper.style.top = "50%"
  },0)
}

const popUpClose = (window, wrapper, overlay) => {
  window.style.display = ""
  overlay.style.opacity = ""
  wrapper.style.opacity = ""
  wrapper.style.top = ""

  overflowToggle(true)
}

const setPopUpVisibility = (visibility, window, wrapper, overlay) => {
  if (visibility) {
    popUpOpen(window, wrapper, overlay)
  } else {
    popUpClose(window, wrapper, overlay)
  }
}

const popupView = document.querySelector(".popup-view")
const popupViewImg = document.querySelector(".popup-view__img")
const overlayView = document.querySelector(".popup-view__overlay")

document.querySelectorAll(".gallery__grid-item").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs.replace(".jpg", "-large.jpg")
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})

document.querySelectorAll(".certificates__grid-item").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs.replace(".jpg", "-large.jpg")
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})

document.querySelectorAll(".testimonial__img-wrapper").forEach(item => {
  item.addEventListener("click", () => {
    const imgSrs = item.firstElementChild.src
    const img = document.querySelector(".popup-view__img")
    img.src = imgSrs.replace(".jpg", "-large.jpg")
    setPopUpVisibility(true, popupView, popupViewImg, overlayView)
  })
})

document.querySelector(".popup-view__close").addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))
overlayView.addEventListener("click", () => setPopUpVisibility(false, popupView, popupViewImg, overlayView))

const popupCall = document.querySelector(".popup-call")
const popupCallWrapper = document.querySelector(".popup-call__wrapper")
const overlayCall = document.querySelector(".popup-call__overlay")

document.querySelector(".header__controls-top-phones-btn").addEventListener("click", () => setPopUpVisibility(true, popupCall, popupCallWrapper, overlayCall))

document.querySelector(".popup-call__close").addEventListener("click", () => setPopUpVisibility(false, popupCall, popupCallWrapper, overlayView))
overlayCall.addEventListener("click", () => setPopUpVisibility(false, popupCall, popupCallWrapper, overlayView))