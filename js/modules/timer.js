function __Timer() {
    const deadline = '2025-12-31';

    function getTimeRemainer(endDate) {
        const time = Date.parse(endDate) - Date.parse(new Date());

        let days, hours, minutes, seconds;

        if (time <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0
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
            return `0${timeDigit}`
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

export default __Timer;