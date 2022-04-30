const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn')
const navEls = document.querySelectorAll('.nav')
openBtn.addEventListener('click', () => {
  navEls.forEach(navEl => {
    navEl.classList.add('visible')
  })
})


closeBtn.addEventListener('click', () => {
  navEls.forEach(navEl => {
    navEl.classList.remove('visible')
  })
})




