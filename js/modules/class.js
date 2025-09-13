function __Class() {
    // Class - SpecialOffer:

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
            sale: 30,
        },
        {
            src: './img/offer2.png',
            alt: 'Vegertarian Pasta',
            title: 'Vegertarian Pasta',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
            discount: 60,
            sale: 35,
        },
        {
            src: './img/offer3.png',
            alt: 'Gluten-Free Pasta',
            title: 'Gluten-Free Pasta',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
            discount: 45,
            sale: 25,
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
        },
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
        },
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


    // Class - DayTime:

    class DayTime {
        constructor(
            src,
            alt,
            title,
            startTime,
            endTime,
            descr,
            parentSelector
        ) {
            this.src= src;
            this.alt= alt;
            this.title= title;
            this.startTime= startTime;
            this.endTime= endTime;
            this.descr= descr;
            this.parentSelector= document.querySelector(parentSelector);
        }

        formatTime(hour) {
            if (hour === undefined || hour === null) {
                return '';
            }

            const period = hour > 12 ? 'pm' : 'am',
                formattedHour = hour % 12 === 0 ? 12 : hour % 12;

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
        const {src, alt, title, startTime, endTime, descr} = dayTime;

        new DayTime(
            src,
            alt,
            title,
            startTime,
            endTime,
            descr,
            '.daytime-items'
        ).render();
    });


    // dayTimes - Port: 3015

    const dayTimes__URL = 'http://localhost:3015/dayTimes';

    fetch(dayTimes__URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    }).then(data => {
        data.forEach(dayTime => {
            const {src, alt, title, startTime, endTime, descr} = dayTime;

            new DayTime(
                src,
                alt,
                title,
                startTime,
                endTime,
                descr,
                '.daytime-items'
            ).render();
        });
    });
}

export default __Class;