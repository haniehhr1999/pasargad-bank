// script for header ******************************************************************************************************************
const closeIcon = document.querySelector('.mdi-close')
const searchIcon = document.querySelector('.mdi-search-web')
const setDate1 = document.querySelector('.set-date')
const searchInput = document.querySelector('.search-input')
const navBar = document.querySelector('nav')

const todayDate = new Date()
const year = todayDate.getFullYear()
const month = todayDate.getMonth()
const day = todayDate.getDate()
let weekday = todayDate.getDay()
weekName()
function weekName(){
    if (weekday == 0) {
        weekday = 'saturday'
    }
    if (weekday == 1) {
        weekday = 'sunday'
    }
    if (weekday == 2) {
        weekday = 'monday'
    }
    if (weekday == 3) {
        weekday = 'tuesday'
    }
    if (weekday == 4) {
        weekday = 'wednesday'
    }
    if (weekday == 5) {
        weekday = 'thursday'
    }
    if (weekday == 6) {
        weekday = 'friday'
    }
}

setDate1.innerHTML = `  ${year} / ${month}/ ${day} :${weekday}`


listeners()
function listeners(){
    searchIcon.addEventListener('click' , function(){
        searchIcon.classList.add('d-none')
        searchInput.classList.remove('d-none')
        navBar.classList.add('d-none')
        closeIcon.classList.remove('d-none')
    })
    closeIcon.addEventListener('click' , function(){
        searchIcon.classList.remove('d-none')
        searchInput.classList.add('d-none')
        navBar.classList.remove('d-none')
        closeIcon.classList.add('d-none')
    })
}