// window.addEventListener('DOMContentLoaded', () => {

//     // Tabs:

//     function __Tabs() {
//         const tabs = document.querySelectorAll('.tabheader__item'),
//             tabContents = document.querySelectorAll('.tab_content'),
//             tabsParent = document.querySelector('.tabheader__items');

//         function hideTabContents() {
//             tabContents.forEach(tabContent => {
//                 tabContent.classList.add('hide');
//                 tabContent.classList.remove('show');
//             });

//             tabs.forEach(tab => {
//                 tab.classList.remove('tabheader__item_active');
//             });
//         }

//         function showTabContent(index = 0) {
//             tabContents[index].classList.add('show', 'tab__fade');
//             tabContents[index].classList.remove('hide');
//             tabs[index].classList.add('tabheader__item_active');
//         }

//         tabsParent.addEventListener('click', (event) => {
//             const target = event.target;

//             if (target && target.classList.contains('tabheader__item')) {
//                 tabs.forEach((tab, index) => {
//                     if (tab === target) {
//                         hideTabContents();

//                         showTabContent(index);
//                     }
//                 });
//             }
//         });

//         hideTabContents();

//         showTabContent();
//     }

//     __Tabs();


//     // Loader:

//     function __Loader() {
//         const loaderWrapper = document.querySelector('.loader-wrapper');

//         setTimeout(() => {
//             loaderWrapper.style.display = 'none';
//         }, 1000);
//     }

//     __Loader();


//     // Timer:

//     function __Timer() {
//         const finishDate = '2025-09-01';

//         function getTimeRemainer(endDate) {
//             const time = Date.parse(endDate) - Date.parse(new Date());

//             let days, hours, minutes, seconds;

//             if (time <= 0) {
//                 days = 0;
//                 hours = 0;
//                 minutes = 0;
//                 seconds = 0;
//             } else {
//                 days = Math.floor(time / (1000 * 60 * 60 * 24));
//                 hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//                 minutes = Math.floor((time / (1000 * 60)) % 60);
//                 seconds = Math.floor((time / 1000) % 60);
//             }

//             return {
//                 totalTime: time,
//                 days,
//                 hours,
//                 minutes,
//                 seconds,
//             }
//         }

//         function formatTimeDigit(timeDigit) {
//             if (timeDigit >= 0 && timeDigit < 10) {
//                 return `0${timeDigit}`;
//             } else {
//                 return timeDigit;
//             }
//         }

//         function setClock(selector, endDate) {
//             const timer = document.querySelector(selector),
//                 days = timer.querySelector('#days'),
//                 hours = timer.querySelector('#hours'),
//                 minutes = timer.querySelector('#minutes'),
//                 seconds = timer.querySelector('#seconds'),
//                 timeIntervalId = setInterval(updateClock, 1000);

//             function updateClock() {
//                 const time = getTimeRemainer(endDate);

//                 days.textContent = formatTimeDigit(time.days);
//                 hours.textContent = formatTimeDigit(time.hours);
//                 minutes.textContent = formatTimeDigit(time.minutes);
//                 seconds.textContent = formatTimeDigit(time.seconds);

//                 if (time.totalTime <= 0) {
//                     clearInterval(timeIntervalId);
//                 }
//             }
//         }

//         setClock('.timer', finishDate);
//     }

//     __Timer();


//     // Class:

//     function __Class() {

//         // Class - SpecialOffer:

//         class SpecialOffer {
//             constructor(
//                 src,
//                 alt,
//                 title,
//                 descr,
//                 discount,
//                 sale,
//                 parentSelector
//             ) {
//                 this.src = src;
//                 this.alt = alt;
//                 this.title = title;
//                 this.descr = descr;
//                 this.discount = discount;
//                 this.sale = sale;
//                 this.parentSelector = document.querySelector(parentSelector);
//                 this.formatToUSD();
//             }

//             formatToUSD() {
//                 this.discount = this.discount.toLocaleString('en-US', {
//                     style: 'currency',
//                     currency: 'USD'
//                 });

//                 this.sale = this.sale.toLocaleString('en-US', {
//                     style: 'currency',
//                     currency: 'USD'
//                 });
//             }

//             render() {
//                 const el = document.createElement('div');

//                 el.innerHTML = `
//                     <img src=${this.src} alt=${this.alt}>
//                     <div>
//                         <h3>${this.title}</h3>
//                         <p>${this.descr}</p>
//                         <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
//                     </div>
//                 `;

//                 this.parentSelector.append(el);
//             }
//         }

//         const specialOffers = [
//             {
//                 src: './img/offer1.png',
//                 alt: 'Quattro Pasta',
//                 title: 'Quattro Pasta',
//                 descr: '${this.descr}',
//                 discoun{this.discount}
//                 sale: 35,
//   {this.sale}     },
//             {
//             
// 
// this.parentSelector.append(element);    src: './img/offer2.png',
//                 alt: 'Vegertarian Pasta',
//                 title: 'Vegertarian 
// 
// const specialOffers = Pasta',
//                 descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
//                 discount: 65,
//                 sale: 40,
//             },
//             {
//                 src: './img/offer3.png',
//                 alt: 'Gluten-Free Pasta',
//                 title: 'Gluten-Free Pasta',
//                 descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
//                 discount: 45,
//                 sale: 25,
//             },
//         ];

//         specialOffers.forEach(specialOffer => {
//             const {src, alt, title, descr, discount, sale} = specialOffer;

//             new SpecialOffer(
//                 src,
//                 alt,
//                 title,
//                 descr,
//                 discount,
//                 sale,
//                 '.offers-items'
//             ).render();
//         });

//         // specialOffers - Port: 3013

//         const specialOffers__URL = 'http://localhost:3013/specialOffers';

//         fetch(specialOffers__URL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }).then(res => {
//             return res.json();
//         }).then(data => {
//             data.forEach(specialOffer => {
//                 const {src, alt, title, descr, discount, sale} = specialOffer;

//                 new SpecialOffer(
//                     src,
//                     alt,
//                     title,
//                     descr,
//                     discount,
//                     sale,
//                     '.offers-items'
//                 ).render();
//             });
//         });


//         // Class - SpecialMenu:

//         class SpecialMenu {
//             constructor(
//                 src,
//                 alt,
//                 title,
//                 price,
//                 descr,
//                 parentSelector
//             ) {
//                 this.src = src;
//                 this.alt = alt;
//                 this.title = title;
//                 this.price = price;
//                 this.descr = descr;
//                 this.parentSelector = document.querySelector(parentSelector);
//                 this.formatToUSD();
//             }

//             formatToUSD() {
//                 this.price = this.price.toLocaleString('en-US', {
//                     style: 'currency',
//                     currency: 'USD'
//                 });
//             }

//             render() {
//                 const el = document.createElement('div');

//                 el.classList.add('menu-item');

//                 el.innerHTML = `
//                     <img src=${this.src} alt=${this.alt}>
//                     <div>
//                         <h3>${this.title} <span class="primary-text">${this.price}</span></h3>
//                         <p>${this.descr}</p>
//                     </div>
//                 `;

//                 this.parentSelector.append(el);
//             }
//         }

//         const specialMenuItems = [
//             {
//                 src: './img/food1.png',
//                 alt: 'LASAL Cheese',
//                 title: 'LASAL Cheese',
//                 price: 18,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food2.png',
//                 alt: 'JUMBO CRAB SHRIMP',
//                 title: 'JUMBO CRAB SHRIMP',
//                 price: 24,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food3.png',
//                 alt: 'KOKTAIL JUCIE',
//                 title: 'KOKTAIL JUCIE',
//                 price: 12,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food4.png',
//                 alt: 'CAPO STEAK',
//                 title: 'CAPO STEAK',
//                 price: 60,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food5.png',
//                 alt: 'ORGANIC FRUIT SALAD',
//                 title: 'ORGANIC FRUIT SALAD',
//                 price: 8,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food6.png',
//                 alt: 'CHEESE PIZZA',
//                 title: 'CHEESE PIZZA',
//                 price: 18,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-left',
//             },
//             {
//                 src: './img/food7.jpeg',
//                 alt: 'KOFTA MEAT',
//                 title: 'KOFTA MEAT',
//                 price: 40,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//             {
//                 src: './img/food8.jpeg',
//                 alt: 'SPANISH PIES',
//                 title: 'SPANISH PIES',
//                 price: 14,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//             {
//                 src: './img/food9.jpeg',
//                 alt: 'CHEESE TOST',
//                 title: 'CHEESE TOST',
//                 price: 6,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//             {
//                 src: './img/food10.jpeg',
//                 alt: 'FRUIT SALAD',
//                 title: 'FRUIT SALAD',
//                 price: 14,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//             {
//                 src: './img/food11.jpeg',
//                 alt: 'CHICKEN SHAWARMA',
//                 title: 'CHICKEN SHAWARMA',
//                 price: 20,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//             {
//                 src: './img/food12.jpeg',
//                 alt: 'MEGA CHEESE PIZZA',
//                 title: 'MEGA CHEESE PIZZA',
//                 price: 30,
//                 descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
//                 parentSelector: '.menu-items-right',
//             },
//         ];

//         specialMenuItems.forEach(specialMenuItem => {
//             const {src, alt, title, price, descr, parentSelector} = specialMenuItem;
//             new SpecialMenu(
//                 src,
//                 alt,
//                 title,
//                 price,
//                 descr,
//                 parentSelector
//             ).render();
//         });

//         // specialMenuItems - Port: 3014

//         const specialMenuItems__URL = 'http://localhost:3014/specialMenuItems';

//         fetch(specialMenuItems__URL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }).then(res => {
//             return res.json();
//         }).then(data => {
//             data.forEach(specialMenuItem => {
//                 const {src, alt, title, price, descr, parentSelector} = specialMenuItem;
//                 new SpecialMenu(
//                     src,
//                     alt,
//                     title,
//                     price,
//                     descr,
//                     parentSelector
//                 ).render();
//             });
//         });


//         // Class - DayTime:

//         class DayTime {
//             constructor(
//                 src,
//                 alt,
//                 title,
//                 startTime,
//                 endTime,
//                 descr,
//                 parentSelector
//             ) {
//                 this.src = src;
//                 this.alt = alt;
//                 this.title = title;
//                 this.startTime = startTime;
//                 this.endTime = endTime;
//                 this.descr = descr;
//                 this.parentSelector = document.querySelector(parentSelector);
//             }

//             formatTime(hour) {
//                 if (hour === undefined || hour === null) {
//                     return '';
//                 }

//                 const period = hour >= 12 ? 'pm' : 'am',
//                     formattedHour = hour % 12 === 0 ? 12 : hour % 12;

//                 return `${formattedHour}:00 ${period}`;
//             }

//             render() {
//                 let timeText;

//                 if (this.descr) {
//                     timeText = this.descr;
//                 } else {
//                     timeText = `${this.formatTime(this.startTime)} to ${this.formatTime(this.endTime)}`;
//                 }

//                 const el = document.createElement('div');

//                 el.classList.add('daytime-item');

//                 el.innerHTML = `
//                     <img src=${this.src} alt=${this.alt}>
//                     <h3>${this.title}</h3>
//                     <p>${timeText}</p>
//                 `;

//                 this.parentSelector.append(el);
//             }
//         }

//         const dayTimes = [
//             {
//                 src: './img/breakfastIcon.png',
//                 alt: 'Breakfast',
//                 title: 'Breakfast',
//                 startTime: 8,
//                 endTime: 10,
//             },
//             {
//                 src: './img/lunchIcon.png',
//                 alt: 'Lunch',
//                 title: 'Lunch',
//                 startTime: 16,
//                 endTime: 19,
//             },
//             {
//                 src: './img/dinnerIcon.png',
//                 alt: 'Dinner',
//                 title: 'Dinner',
//                 startTime: 21,
//                 endTime: 1,
//             },
//             {
//                 src: './img/dessertIcon.png',
//                 alt: 'Dessert',
//                 title: 'Dessert',
//                 descr: 'All day',
//             },
//         ];

//         dayTimes.forEach(dayTime => {
//             const {src, alt, title, startTime, endTime, descr} = dayTime;

//             new DayTime(
//                 src,
//                 alt,
//                 title,
//                 startTime,
//                 endTime,
//                 descr,
//                 '.daytime-items'
//             ).render();
//         });

//         // dayTimes - Port: 3015

//         const dayTimes__URL = 'http://localhost:3015/dayTimes';

//         fetch(dayTimes__URL, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }).then(res => {
//             return res.json();
//         }).then(data => {
//             data.forEach(dayTime => {
//                 const {src, alt, title, startTime, endTime, descr} = dayTime;

//                 new DayTime(
//                     src,
//                     alt,
//                     title,
//                     startTime,
//                     endTime,
//                     descr,
//                     '.daytime-items'
//                 ).render();
//             });
//         });
//     }

//     __Class();


//     // Modal && Form:

//     function __Modal__Form() {

//         // Modal:

//         const modal = document.querySelector('.modal'),
//             modalContent = document.querySelector('.modal__content'),
//             modalOpenBtns = document.querySelectorAll('[data-modal]');

//         function openModal() {
//             modal.classList.add('show');
//             modal.classList.remove('hide');
//             modalContent.classList.add('modal__fade');
//             document.body.style.overflow = 'hidden';
//             clearInterval(modalOpenTimerId);
//         }

//         modalOpenBtns.forEach(btn => {
//             btn.addEventListener('click', openModal);
//         });

//         function closeModal() {
//             modal.classList.add('hide');
//             modal.classList.remove('show');
//             modalContent.classList.remove('modal__fade');
//             document.body.style.overflow = 'visible';
//         }

//         modal.addEventListener('click', (event) => {
//             const target = event.target;

//             if (target === modal || target.getAttribute('data-modal-close') === '') {
//                 closeModal();
//             }
//         });

//         document.addEventListener('keydown', (event) => {
//             const eventCode = event.code;

//             if (eventCode === 'Escape' && modal.classList.contains('show')) {
//                 closeModal();
//             }
//         });

//         const modalOpenTimerId = setInterval(openModal, 5000);


//         // Form:

//         function __Form() {
//             const form = document.querySelector('form');

//             const message = {
//                 loading: 'Loading...',
//                 success: 'Thanks for contacting with us',
//                 failure: 'Something went wrong', 
//             }

//             form.addEventListener('submit', (event) => {
//                 event.preventDefault();

//                 const loader = document.createElement('div');

//                 loader.classList.add('loader');
//                 loader.style.width = '1.25rem';
//                 loader.style.height = '1.25rem';
//                 loader.style.marginTop = '1.25rem';

//                 form.append(loader);

//                 const formData = new FormData(form);

//                 const object = {}

//                 formData.forEach((value, key) => {
//                     object[key] = value;
//                 });

//                 fetch('http://localhost:5000/send-message', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(object),
//                 }).then(() => {
//                     setTimeout(() => {
//                         showStatusMessage(message.success);
//                         form.reset();
//                     }, 1000);
//                 }).catch(() => {
//                     setTimeout(() => {
//                         showStatusMessage(message.failure);
//                     }, 1000);
//                 }).finally(() => {
//                     setTimeout(() => {
//                         loader.remove();
//                     }, 2000);
//                 });
//             });

//             function showStatusMessage(message) {
//                 const modalDialog = document.querySelector('.modal__dialog');

//                 modalDialog.classList.add('hide');

//                 openModal();
                
//                 const statusModal = document.createElement('div');

//                 statusModal.classList.add('modal__dialog');

//                 statusModal.innerHTML = `
//                     <div class="modal__content">
//                         <div data-modal-close class="modal__close">&times;</div>
//                         <div class="modal__title">${message}</div>
//                     </div>
//                 `;

//                 document.querySelector('.modal').append(statusModal);

//                 setTimeout(() => {
//                     statusModal.remove();

//                     modalDialog.classList.remove('hide');

//                     closeModal();
//                 }, 3000);
//             }
//         }

//         __Form();
//     }

//     __Modal__Form();


//     // Slider:

//     function __Slider() {
//         const slides = document.querySelectorAll('.offer__slide'),
//             next = document.querySelector('.offer__slider-next'),
//             prev = document.querySelector('.offer__slider-prev'),
//             total = document.querySelector('#total'),
//             current = document.querySelector('#current'),
//             slidesInner = document.querySelector('.offer__slider-inner'),
//             slidesWrapper = document.querySelector('.offer__slider-wrapper'),
//             width = window.getComputedStyle(slidesWrapper).width;

//         let slideIndex = 1,
//             offset = 0;

//         if (slides.length < 10) {
//             total.textContent = `0${slides.length}`;
//             current.textContent = `0${slideIndex}`;
//         } else {
//             total.textContent = slides.length;
//             current.textContent = slideIndex;
//         }

//         slidesInner.style.width = 100 * slides.length + '%';
//         slidesInner.style.display = 'flex';
//         slidesInner.style.transition = 'all 0.5s ease';
//         slidesWrapper.style.overflow = 'hidden';

//         slides.forEach(slide => {
//             slide.style.width = width;
//         });

//         next.addEventListener('click', () => {
//             if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
//                 offset = 0;
//             } else {
//                 offset += +width.slice(0, width.length - 2);
//             }

//             slidesInner.style.transform = `translateX(-${offset}px)`;

//             if (slideIndex === slides.length) {
//                 slideIndex = 1;
//             }else {
//                 slideIndex++;
//             }

//             if (slides.length < 10) {
//                 current.textContent = `0${slideIndex}`;
//             } else {
//                 current.textContent = slideIndex;
//             }
//         });

//         prev.addEventListener('click', () => {
//             if (offset === 0) {
//                 offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//             } else {
//                 offset -= +width.slice(0, width.length - 2);
//             }

//             slidesInner.style.transform = `translateX(-${offset}px)`;

//             if (slideIndex === 1) {
//                 slideIndex = slides.length;
//             }else {
//                 slideIndex--;
//             }

//             if (slides.length < 10) {
//                 current.textContent = `0${slideIndex}`;
//             } else {
//                 current.textContent = slideIndex;
//             }
//         });
//     }

//     __Slider();
// });


"use strict"

import __Tabs from "./modules/tabs";
import __Loader from "./modules/loader";

window.addEventListener('DOMContentLoaded', () => {

    // Tabs:

    // function __Tabs() {
    //     const tabs = document.querySelectorAll('.tabheader__item'),
    //         tabContents = document.querySelectorAll('.tab_content'),
    //         tabsParent = document.querySelector('.tabheader__items');

    //     function hideTabContents() {
    //         tabs.forEach(tab => {
    //             tab.classList.remove('tabheader__item_active');
    //         });

    //         tabContents.forEach(tabContent => {
    //             tabContent.classList.add('hide');
    //             tabContent.classList.remove('show');
    //         });
    //     }

    //     function showTabContent(index = 0) {
    //         tabs[index].classList.add('tabheader__item_active');
    //         tabContents[index].classList.add('show', 'tab__fade');
    //         tabContents[index].classList.remove('hide');
    //     }

    //     tabsParent.addEventListener('click', (event) => {
    //         const target = event.target;

    //         if (target && target.classList.contains('tabheader__item')) {
    //             tabs.forEach((tab, index) => {
    //                 if (tab === target) {
    //                     hideTabContents();

    //                     showTabContent(index);
    //                 }
    //             });
    //         }
    //     });

    //     hideTabContents();

    //     showTabContent();
    // }

    // __Tabs();

    __Tabs();


    // Loader:

    // function __Loader() {
    //     const loaderWrapper = document.querySelector('.loader-wrapper');

    //     setTimeout(() => {
    //         loaderWrapper.style.display = 'none';
    //     }, 1000);
    // }

    // __Loader();

    __Loader();


    // Timer:

    function __Timer() {

        const deadline = '2025-09-08';

        function getTimeRemainer(endDate) {
            const time = Date.parse(endDate) - Date.parse(new Date());

            let days, hours, minutes, seconds;

            if (time <= 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
            } else {
                days = Math.floor(time / (1000 * 60 * 60 * 24));
                hours = Math.floor((time / (1000 * 60 * 60)) % 24);
                minutes = Math.floor((time / (1000 * 60)) % 60);
                seconds = Math.floor((time / 1000) % 60);
            }

            return {
                totalTime: time,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            }
        }

        function formatTimeDigit(timeDigit) {
            if (timeDigit >= 0 && timeDigit < 10) {
                return `0${timeDigit}`;
            } else {
                return timeDigit;
            }
        }

        function setClock(selector, endDate) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeIntervalId = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const time = getTimeRemainer(endDate);

                days.textContent = formatTimeDigit(time.days);
                hours.textContent = formatTimeDigit(time.hours);
                minutes.textContent = formatTimeDigit(time.minutes);
                seconds.textContent = formatTimeDigit(time.seconds);

                if (time.totalTime <= 0) {
                    clearInterval(timeIntervalId);
                }
            }
        }

        setClock('.timer', deadline);
    }

    __Timer();


    // Class: 

    function __Class() {

        // Class - SpecialOffers:

        class SpecialOffer {
            constructor(
                src,
                alt,
                title,
                descr,
                discount,
                sale,
                parentSelector
            ) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.discount = discount;
                this.sale = sale;
                this.parentSelector = document.querySelector(parentSelector);
                this.formatToUSD();
            }

            formatToUSD() {
                this.discount = this.discount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });

                this.sale = this.sale.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
            }

            render() {
                const element = document.createElement('div');

                element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <div>
                        <h3>${this.title}</h3>
                        <p>${this.descr}</p>
                        <p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
                    </div>
                `;

                this.parentSelector.append(element);
            }
        }

        const specialOffers = [
            {
                src: './img/offer1.png',
                alt: 'Quattro Pasta',
                title: 'Quattro Pasta',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
                discount: 55,
                sale: 25,
            },
            {
                src: './img/offer2.png',
                alt: 'Vegertarian Pasta',
                title: 'Vegertarian Pasta',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
                discount: 65,
                sale: 35,
            },
            {
                src: './img/offer3.png',
                alt: 'Gluten-Free Pasta',
                title: 'Gluten-Free Pasta',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
                discount: 45,
                sale: 15,
            },
        ];

        specialOffers.forEach(specialOffer => {
            const {src, alt, title, descr, discount, sale} = specialOffer;

            new SpecialOffer(
                src,
                alt,
                title,
                descr,
                discount,
                sale,
                '.offers-items'
            ).render();
        });

        // specialOffers - Port: 3013

        const specialOffers__URL = 'http://localhost:3013/specialOffers';

        fetch(specialOffers__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            data.forEach(specialOffer => {
                const {src, alt, title, descr, discount, sale} = specialOffer;

                new SpecialOffer(
                    src,
                    alt,
                    title,
                    descr,
                    discount,
                    sale,
                    '.offers-items'
                ).render();
            });
        });


        // Class - SpecialMenu:

        class SpecialMenu {
            constructor(
                src,
                alt,
                title,
                price,
                descr,
                parentSelector
            ) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.price = price;
                this.descr = descr;
                this.parentSelector = document.querySelector(parentSelector);
                this.formatToUSD();
            }

            formatToUSD() {
                this.price = this.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                });
            }

            render() {
                const element = document.createElement('div');

                element.classList.add('menu-item');

                element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <div>
                        <h3>${this.title} <span class="primary-text">${this.price}</span></h3>
                        <p>${this.descr}</p>
                    </div>
                `;

                this.parentSelector.append(element);
            }
        }

        const specialMenuItems = [
            {
                src: './img/food1.png',
                alt: 'LASAL CHEESE',
                title: 'LASAL CHEESE',
                price: 18,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food2.png',
                alt: 'JUMBO CRAB SHRIMP',
                title: 'JUMBO CRAB SHRIMP',
                price: 24,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food3.png',
                alt: 'KOKTAIL JUCIE',
                title: 'KOKTAIL JUCIE',
                price: 12,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food4.png',
                alt: 'CAPO STEAK',
                title: 'CAPO STEAK',
                price: 60,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food5.png',
                alt: 'ORGANIC FRUIT SALAD',
                title: 'ORGANIC FRUIT SALAD',
                price: 8,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food6.png',
                alt: 'CHEESE PIZZA',
                title: 'CHEESE PIZZA',
                price: 18,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-left',
            },
            {
                src: './img/food7.jpeg',
                alt: 'KOFTA MEAT',
                title: 'KOFTA MEAT',
                price: 40,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
            {
                src: './img/food8.jpeg',
                alt: 'SPANISH PIES',
                title: 'SPANISH PIES',
                price: 14,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
            {
                src: './img/food9.jpeg',
                alt: 'CHEESE TOST',
                title: 'CHEESE TOST',
                price: 6,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
            {
                src: './img/food10.jpeg',
                alt: 'FRUIT SALAD',
                title: 'FRUIT SALAD',
                price: 14,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
            {
                src: './img/food11.jpeg',
                alt: 'CHICKEN SHAWARMA',
                title: 'CHICKEN SHAWARMA',
                price: 20,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
            {
                src: './img/food12.jpeg',
                alt: 'MEGA CHEESE PIZZA',
                title: 'MEGA CHEESE PIZZA',
                price: 30,
                descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.',
                parentSelector: '.menu-items-right',
            },
        ];

        specialMenuItems.forEach(specialMenuItem => {
            const {src, alt, title, price, descr, parentSelector} = specialMenuItem;

            new SpecialMenu(
                src,
                alt,
                title,
                price,
                descr,
                parentSelector
            ).render();
        });

        // specialMenuItems - Port: 3014

        const specialMenuItems__URL = 'http://localhost:3014/specialMenuItems';

        fetch(specialMenuItems__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            data.forEach(specialMenuItem => {
                const {src, alt, title, price, descr, parentSelector} = specialMenuItem;

                new SpecialMenu(
                    src,
                    alt,
                    title,
                    price,
                    descr,
                    parentSelector
                ).render();
            });
        });


        // Class - DayTimes:
        
        class DayTime {
            constructor(
                src,
                alt,
                title,
                descr,
                startTime,
                endTime,
                parentSelector
            ) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.startTime = startTime;
                this.endTime = endTime;
                this.parentSelector = document.querySelector(parentSelector);
                this.formatTime();
            }

            formatTime(hour) {
                if (hour === undefined && hour === null) {
                    return '';
                }

                const period = hour > 12 ? 'pm' : 'am';

                const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

                return `${formattedHour}:00 ${period}`;
            }

            render() {
                let timeText;

                if (this.descr) {
                    timeText = this.descr;
                } else {
                    timeText = `${this.formatTime(this.startTime)} to ${this.formatTime(this.endTime)}`;
                }

                const element = document.createElement('div');

                element.classList.add('daytime-item');

                element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3>${this.title}</h3>
                    <p>${timeText}</p>
                `;

                this.parentSelector.append(element);
            }
        }

        const dayTimes = [
            {
                src: './img/breakfastIcon.png',
                alt: 'Breakfast',
                title: 'Breakfast',
                startTime: 8,
                endTime: 10,
            },
            {
                src: './img/lunchIcon.png',
                alt: 'Lunch',
                title: 'Lunch',
                startTime: 16,
                endTime: 19,
            },
            {
                src: './img/dinnerIcon.png',
                alt: 'Dinner',
                title: 'Dinner',
                startTime: 21,
                endTime: 1,
            },
            {
                src: './img/dessertIcon.png',
                alt: 'Dessert',
                title: 'Dessert',
                descr: 'All day',
            },
        ];

        dayTimes.forEach(dayTime => {
            const {src, alt, title, descr, startTime, endTime} = dayTime;

            new DayTime(
                src,
                alt,
                title,
                descr,
                startTime,
                endTime,
                '.daytime-items'
            ).render();
        });
        
        // dayTimes - Port: 3015

        const dayTimes__URL = 'http://localhost:3015/dayTimes';

        fetch(dayTimes__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            data.forEach(dayTime => {
                const {src, alt, title, descr, startTime, endTime} = dayTime;

                new DayTime(
                    src,
                    alt,
                    title,
                    descr,
                    startTime,
                    endTime,
                    '.daytime-items'
                ).render();
            });
        });
    }

    __Class();


    // Modal && Form:

    function __Modal__Form() {

        // Modal:

        const modal = document.querySelector('.modal'),
            modalContent = document.querySelector('.modal__content'),
            modalOpenBtns = document.querySelectorAll('[data-modal]');

        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modalContent.classList.add('modal__fade');
            document.body.style.overflow = 'hidden';
            clearInterval(modalOpenTimerId);
        }

        modalOpenBtns.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            modalContent.classList.remove('modal__fade');
            document.body.style.overflow = '';
        }

        modal.addEventListener('click', (event) => {
            const target = event.target;

            if (target === modal || target.getAttribute('data-modal-close') === '') {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            const eventCode = event.code;

            if (eventCode === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        const modalOpenTimerId = setInterval(openModal, 5000);


        // Form:

        function __Form() {
            const form = document.querySelector('form');

            const message = {
                loading: 'Loading...',
                success: 'Thanks for contacting us',
                failure: 'Something went wrong',
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                const loader = document.createElement('div');

                loader.classList.add('loader');
                loader.style.width = '1.25rem';
                loader.style.height = '1.25rem';
                loader.style.marginTop = '1.25rem';

                form.append(loader);

                const formData = new FormData(form);

                const formObject = {}

                formData.forEach((value, key) => {
                    formObject[key] = value;
                });

                fetch('http://localhost:5000/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formObject),
                }).then(() => {
                    setTimeout(() => {
                        showStatusMessage(message.success);
                        form.reset();
                    }, 1000);
                }).catch(() => {
                    setTimeout(() => {
                        showStatusMessage(message.failure);
                    }, 1000);
                }).finally(() => {
                    setTimeout(() => {
                        loader.remove();
                    }, 2000);
                });
            });

            function showStatusMessage(message) {
                const modalDialog = document.querySelector('.modal__dialog');

                modalDialog.classList.add('hide');

                openModal();

                const statusModal = document.createElement('div');

                statusModal.classList.add('modal__dialog');

                statusModal.innerHTML = `
                    <div class="modal__content">
                        <div data-modal-close class="modal__close">&times;</div>
                        <div class="modal__title">${message}</div>
                    </div>
                `;

                document.querySelector('.modal').append(statusModal);

                setTimeout(() => {
                    statusModal.remove();

                    modalDialog.classList.remove('hide');

                    closeModal();
                }, 3000);
            }
        }

        __Form();
    }

    __Modal__Form();


    // Slider:

    function __Slider() {
        const slides = document.querySelectorAll('.offer__slide'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            current = document.querySelector('#current'),
            total = document.querySelector('#total'),
            slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            slidesInner = document.querySelector('.offer__slider-inner'),
            width = window.getComputedStyle(slidesWrapper).width;

        let slideIndex = 1,
            offset = 0;

        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }

        slidesInner.style.width = 100 * slides.length + '%';
        slidesInner.style.display = 'flex';
        slidesInner.style.transition = 'all 0.5s ease';
        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        next.addEventListener('click', () => {
            // if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
            //     offset = 0;
            // } else {
            //     offset += +width.slice(0, width.length - 2);
            // }

            if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === slides.length) {
                slideIndex = 1
            } else {
                slideIndex++;
            }

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        });

        prev.addEventListener('click', () => {
            // if (offset === 0) {
            //     offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            // } else {
            //     offset -= +width.slice(0, width.length - 2);
            // }

            if (offset === 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesInner.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === 1) {
                slideIndex = slides.length
            } else {
                slideIndex--;
            }

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        });
    }

    __Slider();
});