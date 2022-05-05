const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const menu = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    // Caso não tenha a class show, ela será adicionada
    // Caso tenha a class show, ela será removida
  })
}

for (const links of menu) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
    // Vai remover a class show independende de ter ela ou não
  })
}

// Colocar sombra no header da página ao dar scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //condição para qundo o scroll for maior ou igual a altura do header
    header.classList.add('scroll')
  } else {
    //condição para qundo o scroll for menor que a altura do header
    header.classList.remove('scroll')
  }
})

// Testimonials carrousel slider swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//ScrollReveal
window.sr = ScrollReveal({
  reset: true,
  duration: 700,
  origin: 'top',
  distance: '30px'
})

sr.reveal(
  '#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .brand, footer .social',
  { interval: 100 }
)

//Back to top
const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})

//Activate menu at current section
const sections = document.querySelectorAll('main section[id]')

window.addEventListener('scroll', function () {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
})
