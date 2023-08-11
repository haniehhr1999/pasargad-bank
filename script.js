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
// vertical tab for lg tab bar > 992px
const tabItems = document.querySelectorAll('.tab-right div')
const nerkhArz = document.querySelectorAll('.nerkh-arz')
const omoorSahamdaran = document.querySelectorAll('.omoor-sahamdaran')
const markazErtebat = document.querySelectorAll('.markaz-ertebat')
const numbers = document.querySelectorAll('.numbers span')
const boxText = document.querySelector('.show')
tabItems.forEach(item => {
    item.addEventListener('click' , function(){
        tabItems.forEach(item2 => {
            item2.style.backgroundColor = '#f5f5f5'
        });
        item.style.backgroundColor = 'white'
        item.style.fontSize = 'bold'
    })
});
tabItems.forEach(item3 => {
    item3.addEventListener('click' , function(){
        if (item3.innerHTML == 'نرخ ارز و سهام') {
            nerkhArz.forEach(element => {
                element.classList.add('d-flex')
                element.classList.remove('d-none')  
            });

            omoorSahamdaran.forEach(element1 => {
                element1.classList.add('d-none')
                element1.classList.remove('d-flex')  
            });

            markazErtebat.forEach(element2 => {  
                element2.classList.add('d-none')
                element2.classList.remove('d-flex')
            });

        }
        if (item3.innerHTML == 'امور سهامداران') {
            nerkhArz.forEach(el2 => {
                el2.classList.add('d-none')
                el2.classList.remove('d-flex')
            });

            omoorSahamdaran.forEach(el3 => {
                el3.classList.add('d-flex')
                el3.classList.remove('d-none')
            });

            markazErtebat.forEach(el4 =>{
                el4.classList.add('d-none')
                el4.classList.remove('d-flex')
            })
        }
        if (item3.innerHTML == 'مرکز ارتباط با مشتریان') {
            nerkhArz.forEach(el1 =>{
                el1.classList.add('d-none')
                el1.classList.remove('d-flex')
            })

            omoorSahamdaran.forEach(el2 => {
                el2.classList.add('d-none')
                el2.classList.remove('d-flex')
            });
            
            markazErtebat.forEach(el3 => {
                el3.classList.add('d-flex')
                el3.classList.remove('d-none')
            });

        }
    })
});
numbers.forEach(element => {
    element.addEventListener('click' , function () {
        numbers.forEach(el =>{
            el.style.backgroundColor = '#a9a9a9'
            el.style.color = '#2e3743'
        })
        element.style.backgroundColor = '#2e3743'
        element.style.color = '#fff'
        if (element.innerHTML == 0) {
            boxText.innerHTML = 'غیر فعال کردن کارت'
        }
        if (element.innerHTML == 1) {
            boxText.innerHTML = 'تلفن بانک پاسارگاد'
        }
        if (element.innerHTML == 2) {
            boxText.innerHTML = 'راهنمایی در خصوص خدمات بانکی'
        }
        if (element.innerHTML == 3) {
            boxText.innerHTML = 'پشتیبانی کارت، خدمات فروش و پایانه های فروش'
        }
        if (element.innerHTML == 4) {
            boxText.innerHTML = 'امورسهام'
        }
        if (element.innerHTML == 5) {
            boxText.innerHTML = 'باشگاه مشتریان'
        }
        if (element.innerHTML == 6) {
            boxText.innerHTML = 'نامعتبر'
        }
        if (element.innerHTML == 7) {
            boxText.innerHTML = 'نامعتبر'
        }
        if (element.innerHTML == 8) {
            boxText.innerHTML = 'نامعتبر'
        }
        if (element.innerHTML == 9) {
            boxText.innerHTML = 'نامعتبر'
        }
        if (element.innerHTML == '#') {
            boxText.innerHTML = 'اپراتور، ادارات مرکزی'
        }
        
    })
});


// horizontal tab for sm tab bar > 0px
const tabHorizontal = document.querySelectorAll('.horizontal-tab')
tabHorizontal.forEach(tab => {
    tab.addEventListener('click' , function(){
        tabHorizontal.forEach(tab => {
            tab.style.backgroundColor = '#f5f5f5'
        });
        tab.style.backgroundColor = 'white'
        tab.style.fontSize = 'bold'
    })
});
tabHorizontal.forEach(tab => {
    tab.addEventListener('click' , function(){
        if (tab.innerHTML == 'نرخ ارز و سهام') {
            nerkhArz.forEach(element => {
                element.classList.add('d-block')
                element.classList.remove('d-none')  
            });

            omoorSahamdaran.forEach(element1 => {
                element1.classList.add('d-none')
                element1.classList.remove('d-block')  
            });

            markazErtebat.forEach(element2 => {  
                element2.classList.add('d-none')
                element2.classList.remove('d-block')
            });

        }
        if (tab.innerHTML == 'امور سهامداران') {
            nerkhArz.forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-flex')
            });
            omoorSahamdaran.forEach(element => {
                element.classList.add('d-flex')
                element.classList.remove('d-none')
            });
            markazErtebat.forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-flex')
            });
        }
        if (tab.innerHTML == 'مرکز ارتباط با مشتریان') {
            nerkhArz.forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
            });
            omoorSahamdaran.forEach(element => {
                element.classList.add('d-none')
                element.classList.remove('d-block')
            });
            markazErtebat.forEach(element => {
                element.classList.add('d-block')
                element.classList.remove('d-none')
            });
        }
    })
});


//api 
async function fetchApi(){

    const fetchUrl = await fetch("http://api.navasan.tech/latest/?api_key=freeG6I84oTNeRaUpMGz4rLQlYynPYNN")
    const jsonUrl = await fetchUrl.json()
    console.log(jsonUrl);

    // usd 
    let usdBuy = document.querySelectorAll('.usdBuy')
    let usdSell = document.querySelectorAll('.usdSell')
    usdBuy.forEach(element => {
        element.innerHTML = `${jsonUrl.usd_buy.value}`
    });
    usdSell.forEach(element => {
        element.innerHTML = `${jsonUrl.usd_sell.value}`
    });



    // euro 
    let eurBuy = document.querySelectorAll('.eurBuy')
    let eurSell = document.querySelectorAll('.eurSell')
    eurBuy.forEach(element => {
        element.innerHTML =  `${jsonUrl.mex_eur_buy.value}`
    });
    eurSell.forEach(element => {
        element.innerHTML =  `${jsonUrl.mex_eur_sell.value}`
    });
    
    // pond
    let gbpBuy = document.querySelectorAll('.gbpBuy')
    let gbpSell = document.querySelectorAll('.gbpSell')
    gbpBuy.forEach(element => {
        element.innerHTML =  `${jsonUrl.gbp_wht.value}`
    });
    gbpSell.forEach(element => {
        element.innerHTML =  `${jsonUrl.gbp_hav.value}`
    });

    // frank 
    let chfBuy = document.querySelectorAll('.chfBuy')
    let chfSell = document.querySelectorAll('.chfSell')
    chfBuy.forEach(element => {
        element.innerHTML =  `${jsonUrl.chf.value}`
    });
    chfSell.forEach(element => {
        element.innerHTML =  `${jsonUrl.chf.value}`
    });


}
fetchApi()