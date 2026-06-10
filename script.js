const popup = document.querySelector('.popup-over')
const openbutton = document.querySelector('#show-popup')
const closebutton = document.querySelector('.popup-close')

openbutton.addEventListener('click', () => {
    popup.classList.add('show')})

closebutton.addEventListener('click', () => {
    popup.classList.remove('show')})

const headers = document.querySelectorAll('.accordion-header')
headers.forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        const opened = header.classList.contains('active')
        if (opened) {
            content.style.maxHeight = null}
        else {
            content.style.maxHeight = content.scrollHeight + 'px'}
        header.classList.toggle('active')})
})

const buttons = document.querySelectorAll('.tab-btn')
const tabcontent = document.querySelectorAll('.tab-content')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab')
        const targetContent = document.getElementById(tabId)
        tabcontent.forEach((el) => el.classList.remove('active'))
        targetContent.classList.add('active')
        button.classList.add('active')})
})

const tooltips = document.querySelectorAll('.tooltip')
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseenter', () => {
        const text = tooltip.querySelector('.tooltip-text')
        text.style.visibility = 'visible';
        text.style.opacity = 1})

    tooltip.addEventListener('mouseleave', () => {
        const text = tooltip.querySelector('.tooltip-text')
        text.style.visibility = 'hidden'
        text.style.opacity = 0})
})

const slides = document.querySelectorAll('.slide').length
const slider = document.querySelector('.slider')
const sliderBtn = document.querySelectorAll('.slider-arrow')
const dots = document.querySelectorAll('.slider-dot')
let curslide = 0

function changeSlide(index) {
    if (curslide === -1) { curslide = 2 }
    console.log(curslide);
    slider.style.transform = `translateX(-${slider.clientWidth * curslide}px)`
    dots.forEach((el) => el.classList.remove('active'))
    dots[curslide].classList.add('active')}

sliderBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const buttId = Number(button.getAttribute('data-index'))
        curslide = (curslide + buttId) % slides
        changeSlide()})
})

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        const dotId = Number(dot.getAttribute('data-dot'))
        curslide = dotId
        changeSlide()})
})