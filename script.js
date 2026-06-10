const popup = document.querySelector('.popup-overlay')
const openBtn = document.querySelector('#show-popup')
const closeBtn = document.querySelector('.popup-close')

openBtn.addEventListener('click', () => {
    popup.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show')
})