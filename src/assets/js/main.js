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

  let count2

  if (window.innerWidth <= 600) {
    count2 = 1;
  } else {
    count2 = 2;
  }

  let initialCount2 = count2

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      count2 = 1;
    } else {
      count2 = 2;
    }

    initialCount2 = count2

    if (count2 < certificatesGrid.length) {
      certificatesBtnsWrapper.style.display = ""
    } else {
      certificatesBtnsWrapper.style.display = "none"
    }
  })

  if (count2 < certificatesGrid.length) {
    certificatesBtnsWrapper.style.display = ""
  } else {
    certificatesBtnsWrapper.style.display = "none"
  }

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
    count2 = initialCount2
  })
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
  slidesPerView: 1.7,
  spaceBetween: 11,
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
  breakpoints: {
    1100: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    900: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
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

const popUpOpen = (window, wrapper, overlay, delay) => {
  overflowToggle(false)
  window.style.display = "block"

  setTimeout(() => {
    overlay.style.opacity = ".5"
    wrapper.style.opacity = "1"
    wrapper.style.top = "50%"
  },0)

  if (delay) {
    setTimeout(() => {
      popUpClose(window, wrapper, overlay)
    }, delay)
  }
}

const popUpClose = (window, wrapper, overlay) => {
  setTimeout(() => {
    window.style.display = ""
  }, 300)
  overlay.style.opacity = ""
  wrapper.style.opacity = ""
  wrapper.style.top = ""

  overflowToggle(true)
}

const setPopUpVisibility = (visibility, window, wrapper, overlay, delay) => {
  if (visibility) {
    popUpOpen(window, wrapper, overlay, delay)
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


const burger = document.querySelector(".burger")
const burgerMenu = document.querySelector(".burger-menu")

const burgerMenuClose = () => {
  burgerMenu.style.left = ""

  setTimeout(() => {
    burger.style.display = ""
  }, 500);
  
  overflowToggle(true)
}

const burgerMenuOpen = () => {
  burger.style.display = "block"

  setTimeout(() => {
    burgerMenu.style.left = "0"
  }, 0);

  overflowToggle(false)
}

window.addEventListener('resize',(e) => {
  const width = document.body.clientWidth;
  if (width > 1300) {
    burgerMenuClose()
  }
});

document.querySelector(".header__burger-btn").addEventListener("click", burgerMenuOpen)
document.querySelector(".header__burger-close-btn").addEventListener("click", burgerMenuClose)
document.querySelectorAll(".burger .header__nav-list-link").forEach(item => {
  item.addEventListener("click", burgerMenuClose)
})
document.querySelector(".header__mobile-call").addEventListener("click", () => setPopUpVisibility(true, popupCall, popupCallWrapper, overlayCall))
document.querySelector(".burger__mobile-call").addEventListener("click", () => {
  burgerMenuClose()
  setPopUpVisibility(true, popupCall, popupCallWrapper, overlayCall)
})
document.querySelector(".burger-call-btn").addEventListener("click", () => {
  burgerMenuClose();
  setPopUpVisibility(true, popupCall, popupCallWrapper, overlayCall)
})

const popupThanks = document.querySelector(".popup-thanks")
const popupThanksWrapper = document.querySelector(".popup-thanks__wrapper")
const overlayThanks = document.querySelector(".popup-thanks__overlay")

const name1Error = document.querySelector('.question-form__name1-error')
const tel1Error = document.querySelector('.question-form__tel1-error')
const checkbox1Error = document.querySelector(".question-form__checkbox1-error")
const name2Error = document.querySelector('.question-form__name2-error')
const tel2Error = document.querySelector('.question-form__tel2-error')
const checkbox2Error = document.querySelector(".question-form__checkbox2-error")

const name1 = document.getElementById("name1")
const tel1 = document.getElementById("tel1")
const checkbox1 = document.getElementById("personalData1")
const name2 = document.getElementById("name2")
const tel2 = document.getElementById("tel2")
const checkbox2 = document.getElementById("personalData2")

const telReg = /^[\d\+][\d\(\)\ -]{4,14}\d$/

const questionSubmit = document.getElementById("question-submit")
const callSubmit = document.getElementById("call-submit")

questionSubmit.addEventListener("click", function(e) {
  if (name1Error.textContent.length === 0 && tel1Error.textContent.length === 0 && name1.value.length > 0 && tel1.value.length > 0 && checkbox1.checked && telReg.test(tel1.value)) {
    setPopUpVisibility(true, popupThanks, popupThanksWrapper, overlayThanks, 3000)
  } else {
    onEmptyInputBlur(name1, name1Error)
    onEmptyInputBlur(tel1, tel1Error)
    onCheckboxChange(checkbox1, checkbox1Error)
    this.disabled=true;
    setTimeout(()=>{
      this.disabled=false;
    },0)
  }
})

callSubmit.addEventListener("click", function(e) {
  if (name2Error.textContent.length === 0 && tel2Error.textContent.length === 0 && name2.value.length > 0 && tel2.value.length > 0 && checkbox2.checked && telReg.test(tel2.value)) {
    setPopUpVisibility(false, popupCall, popupCallWrapper, overlayCall)
    setPopUpVisibility(true, popupThanks, popupThanksWrapper, overlayThanks, 3000)
  } else {
    onEmptyInputBlur(name2, name2Error)
    onEmptyInputBlur(tel2, tel2Error)
    onCheckboxChange(checkbox2, checkbox2Error)
    this.disabled=true;
    setTimeout(()=>{
      this.disabled=false;
    },0)
  }
})

const inputStyles = (status, input, text, errText) => {
  if (status) {
    input.style.border = "1px solid #FF0000"
    text.style.display = "block"
    text.textContent = errText
  } else {
    text.textContent = ""
    input.style.border = ""
    text.style.display = ""
  }
}

const onEmptyInputBlur = (input, text) => {
  if (input.value.length === 0) {
    inputStyles(true, input, text, "Это поле является обязательным для заполнения!")
  } else if (input.type === "tel") {
    if (!telReg.test(input.value)) {
      inputStyles(true, input, text, "Введите корректный номер телефона")
    }
  } else {
    inputStyles(false, input, text)
  }
}

const onCheckboxChange = (checkbox, text) => {
  if (!checkbox.checked) {
    checkbox.nextElementSibling.style.border = "1px solid #FF0000"
    text.style.display = "block"
    text.textContent = "Для продолжения Вы должны дать согласие на обработку персональных данных"
  } else {
    checkbox.nextElementSibling.style.border = ""
    text.textContent = ""
    text.style.display = ""
  }
}

const onEmptyInputChange = (input, text) => {
  if (input.type === "tel" && !telReg.test(input.value)) {
    inputStyles(true, input, text, "Введите корректный номер телефона")
  } else {
    inputStyles(false, input, text)
  }
}

name1.addEventListener("blur", function(e) {
  onEmptyInputBlur(e.target, name1Error)
})

name1.addEventListener("input", function(e) {
  onEmptyInputChange(e.target, name1Error)
})

tel1.addEventListener("blur", function(e) {
  onEmptyInputBlur(e.target, tel1Error)
})

tel1.addEventListener("input", function(e) {
  onEmptyInputChange(e.target, tel1Error)
})

checkbox1.addEventListener("change", function(e) {
  onCheckboxChange(e.target, checkbox1Error)
})

name2.addEventListener("blur", function(e) {
  onEmptyInputBlur(e.target, name2Error)
})

name2.addEventListener("input", function(e) {
  onEmptyInputChange(e.target, name2Error)
})

tel2.addEventListener("blur", function(e) {
  onEmptyInputBlur(e.target, tel2Error)
})

tel2.addEventListener("input", function(e) {
  onEmptyInputChange(e.target, tel2Error)
})

checkbox2.addEventListener("change", function(e) {
  onCheckboxChange(e.target, checkbox2Error)
})