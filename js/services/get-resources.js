// async function getResources() {
//     try {
//         const response = await fetch('http://localhost:3013/specialOffers');

//         return await response.json();
//     } catch {
//         console.log('Error');
//     }
// }

// export default getResources;


const specialOffers__URL = 'http://localhost:3013/specialOffers';
const specialMenuItems__URL = 'http://localhost:3014/specialMenuItems';
const dayTimes__URL = 'http://localhost:3015/dayTimes';

// SpecialOffer:

async function loadSpecialOffers(SpecialOffer, specialOffersParentSelector) {
    try {
        const data = await (await fetch(specialOffers__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })).json();

        data.forEach(specialOffer => {
            const { src, alt, title, descr, discount, sale } = specialOffer;

            new SpecialOffer(
                src,
                alt,
                title,
                descr,
                discount,
                sale,
                specialOffersParentSelector
            ).render();
        });
    } catch {
        console.error("Ma'lumot yuklashda xato:");
    }
}


// SpecialMenu:

async function loadSpecialMenuItems(SpecialMenu) {
    try {
        const data = await (await fetch(specialMenuItems__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })).json();

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
    } catch (error) {
        console.error("Ma'lumot yuklashda xato:", error.message);
    }
}


// DayTime:

async function loadDataTimes(DayTime, dayTimesParentSelector) {
    try {
        const data = await (await fetch(dayTimes__URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })).json();

        data.forEach(dayTime => {
            const {src, alt, title, startTime, endTime, descr} = dayTime;

            new DayTime(
                src,
                alt,
                title,
                startTime,
                endTime,
                descr,
                dayTimesParentSelector
            ).render();
        });
    } catch (error) {
        console.error("Ma'lumot yuklashda xato:", error.message);
    }
}

export {loadSpecialOffers, loadSpecialMenuItems, loadDataTimes};