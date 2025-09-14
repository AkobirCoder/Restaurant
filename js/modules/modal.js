function openModal(modalSelector, modalContentSelector, modalOpenTimerId) {
    const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    modalContent.classList.add('modal__fade');
    document.body.style.overflow = 'hidden';

    if (modalOpenTimerId) {
        clearInterval(modalOpenTimerId);
    }
}

function closeModal(modalSelector, modalContentSelector) {
    const modal = document.querySelector(modalSelector),
        modalContent = document.querySelector(modalContentSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    modalContent.classList.remove('modal__fade');
    document.body.style.overflow = 'visible';
}

function __Modal(modalSelector, modalContentSelector, modalOpenBtnSelector, modalOpenTimerId) {
    // Modal:

    const modal = document.querySelector(modalSelector),
        modalOpenBtns = document.querySelectorAll(modalOpenBtnSelector);

    modalOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalContentSelector, modalOpenTimerId));
    });

    modal.addEventListener('click', event => {
        const target = event.target;

        if (target === modal || target.getAttribute('data-modal-close') === '') {
            closeModal(modalSelector, modalContentSelector);
        }
    });

    document.addEventListener('keydown', event => {
        const eventCode = event.code;

        if (eventCode === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector, modalContentSelector);
        }
    });

    // const modalOpenTimerId = setInterval(openModal, 5000);
}

export default __Modal;
export {openModal, closeModal};
