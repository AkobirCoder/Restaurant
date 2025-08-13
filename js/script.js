window.addEventListener('DOMContentLoaded', () => {
	// Tabs:

	function tab() {
		const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContents = document.querySelectorAll('.tab_content'),
		tabsParent = document.querySelector('.tabheader__items');

		function hideTabContents() {
			tabs.forEach(tab => {
				tab.classList.remove('tabheader__item_active');
			});

			tabsContents.forEach(tabContent => {
				tabContent.classList.add('hide');
				tabContent.classList.remove('show');
			});	
		}

		function showTabContent(index = 0) {
			tabs[index].classList.add('tabheader__item_active');
			tabsContents[index].classList.add('show', 'fade');
			tabsContents[index].classList.remove('hide');
		}

		tabsParent.addEventListener('click', event => {
			const target = event.target;

			if (target && target.classList.contains('tabheader__item')) {
				tabs.forEach((tab, index) => {
					if (tab === target) {
						hideTabContents();

						showTabContent(index);
					}
				});
			}
		});

		hideTabContents();

		showTabContent();
	}

	tab();

	// const tabs = document.querySelectorAll('.tabheader__item'),
	// 	tabsContents = document.querySelectorAll('.tab_content'),
	// 	tabsParent = document.querySelector('.tabheader__items');

	// function hideTabContents() {
	// 	tabs.forEach(tab => {
	// 		tab.classList.remove('tabheader__item_active');
	// 	});

	// 	tabsContents.forEach(tabContent => {
	// 		tabContent.classList.add('hide');
	// 		tabContent.classList.remove('show');
	// 	});	
	// }

	// function showTabContent(index = 0) {
	// 	tabs[index].classList.add('tabheader__item_active');
	// 	tabsContents[index].classList.add('show', 'fade');
	// 	tabsContents[index].classList.remove('hide');
	// }

	// tabsParent.addEventListener('click', event => {
	// 	const target = event.target;

	// 	if (target && target.classList.contains('tabheader__item')) {
	// 		tabs.forEach((tab, index) => {
	// 			if (tab === target) {
	// 				hideTabContents();

	// 				showTabContent(index);
	// 			}
	// 		});
	// 	}
	// });

	// hideTabContents();

	// showTabContent();


	// Loader:

	const loaderWrapper = document.querySelector('.loader-wrapper');

	setTimeout(loader, 1000);

	function loader() {
		loaderWrapper.style.display = 'none';
	}


	// Timer:

	const deadline = '2025-09-01';

	function getTimeRemainer(endtime) {
		let days, hours, minutes, seconds;

		const time = Date.parse(endtime) - Date.parse(new Date());

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
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function formatTimeDigit(timeDigit) {
		if (timeDigit >= 0 && timeDigit < 10) {
			return `0${timeDigit}`;
		} else {
			return timeDigit;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const time = getTimeRemainer(endtime);

			days.textContent = formatTimeDigit(time.days);
			hours.textContent = formatTimeDigit(time.hours);
			minutes.textContent = formatTimeDigit(time.minutes);
			seconds.textContent = formatTimeDigit(time.seconds);

			if (time.totalTime <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);


	// Modal:

	const modal = document.querySelector('.modal'),
		modalContent = document.querySelector('.modal__content'),
		modalOpenBtns = document.querySelectorAll('[data-modal]'),
		modalCloseBtn = document.querySelector('[data-modal-close]');

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
		document.body.style.overflow = 'visible';
	}

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', event => {
		const target = event.target;

		if (target === modal) {
			closeModal();
		}
	});

	document.addEventListener('keydown', event => {
		const eventCode = event.code;

		if (eventCode === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	const modalOpenTimerId = setInterval(openModal, 5000);


	// Class - Special Offers:
	class OffersMenu {
		constructor(
			src,
			alt,
			title,
			description,
			discount,
			sale,
			parentSelector
		) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.description = description;
			this.discount = discount;
			this.sale = sale;
			this.parentSelector = document.querySelector(parentSelector);
			this.formatToUSD();
		}

		formatToUSD() {
			this.discount = this.discount.toLocaleString('en-US', {style:'currency', currency:'USD'});
			this.sale = this.sale.toLocaleString('en-US', {style:'currency', currency:'USD'});
		}

		render() {
			const element = document.createElement('div');

			element.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<div>
				<h3>${this.title}</h3>
					<p>${this.description}</p>
					<p><del>${this.discount}</del> <span class="primary-text">${this.sale}</span></p>
				</div>
			`;

			this.parentSelector.append(element);
		}
	}

	const offers = [
		{
			src: './img/offer1.png',
			alt: 'Quattro Pasta',
			title: 'Quattro Pasta',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 55,
			sale: 25,
		},
		{
			src: './img/offer1.png',
			alt: 'Vegertarian Pasta',
			title: 'Vegertarian Pasta',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 65,
			sale: 35,
		},
		{
			src: './img/offer1.png',
			alt: 'Gluten-Free Pasta',
			title: 'Gluten-Free Pasta',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.',
			discount: 35,
			sale: 15,
		},
	];

	offers.forEach(offer => {
		new OffersMenu(
			offer.src,
			offer.alt,
			offer.title,
			offer.description,
			offer.discount,
			offer.sale,
			'.offers-items'
		).render();
	});


	// Class - DayTimes:
	class DayTimes {
		constructor(
			src,
			alt,
			title,
			description,
			startTime,
			endTime,
			parentSelector
		) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.description = description;
			this.startTime = startTime;
			this.endTime = endTime;
			this.parentSelector = document.querySelector(parentSelector);
		}

		formatTime(hour) {
			if (hour === undefined || hour === null) {
				return '';
			}

			const period = hour >= 12 ? 'pm' : 'am',
				formattedHour = hour % 12 === 0 ? 12 : hour % 12;

			return `${formattedHour}:00 ${period}`;
		}

		render() {
			const element = document.createElement('div');

			element.classList.add('daytime-item');

			let timeText;

			if (this.description) {
				timeText = this.description;
			} else {
				timeText = `${this.formatTime(this.startTime)} to ${this.formatTime(this.endTime)}`;
			}

			element.innerHTML = `
				<img src="${this.src}" alt="${this.alt}">
				<h3>${this.title}</h3>
				<p>${timeText}</p>
			`;

			this.parentSelector.append(element);
		}
	}

	const dayTimes = [
		{
			src: './img/breckfastIcon.png',
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
			description: 'All day',
		},
	];

	dayTimes.forEach(dayTime => {
		new DayTimes(
			dayTime.src,
			dayTime.alt,
			dayTime.title,
			dayTime.description,
			dayTime.startTime,
			dayTime.endTime,
			'.daytime-items'
		).render();
	});


	// Form:

	const form = document.querySelector('form'),
		telegramTokenBot = '8412748328:AAE04CUQA-93MzC1XOJ13vJrjvENZHRUz6k',
		chatID = '7491858572';

	const message = {
		loading: 'loading...',
		success: 'Thanks for contacting with us',
		failure: 'Something went wrong',
	}

	form.addEventListener('submit', event => {
		event.preventDefault();

		const statusMessage = document.createElement('div');

		statusMessage.textContent = message.loading;

		form.append(statusMessage);

		const formData = new FormData(form);

		const formObject = {}

		formData.forEach((value, key) => {
			formObject[key] = value;
		});

		fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				chat_id: chatID,
				text: `FullName: ${formObject.name}, Phone: ${formObject.phone}`,
			}),
		})
		.then(() => {
			setTimeout(() => {
				statusMessage.textContent = message.success;
			}, 1000);	
		})
		.catch(() => {
			setTimeout(() => {
				statusMessage.textContent = message.failure;
			}, 1000);
		})
		.finally(() => {
			setTimeout(() => {
				statusMessage.remove();
			}, 2000);
		});
	});
});