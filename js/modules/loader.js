function __Loader(loaderWrapperSelector) {
    const loaderWrapper = document.querySelector(loaderWrapperSelector);

    setTimeout(() => {
        loaderWrapper.style.display = 'none';
    }, 1000);
}

export default __Loader;