function __Loader() {
    const loaderWrapper = document.querySelector('.loader-wrapper');

    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 1000);
}

export default __Loader;