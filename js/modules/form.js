import { openModal, closeModal } from "./modal";

function __Form(formSelector, modalOpenTimerId) {
    const form = document.querySelector(formSelector);

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

        // fetch('http://localhost:5000/send-message', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formObject),
        // }).then(() => {
        //     setTimeout(() => {
        //         showStatusMessage(message.success);
        //         form.reset();
        //     }, 1000);
        // }).catch(() => {
        //     setTimeout(() => {
        //         showStatusMessage(message.failure);
        //     }, 1000);
        // }).finally(() => {
        //     setTimeout(() => {
        //         loader.remove();
        //     }, 2000);
        // });

        sendMessage(loader, formObject);
    });

    async function sendMessage(loader, formObject) {
        try {
            await fetch('http://localhost:5000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formObject),
            });

            showStatusMessage(message.success);
        } catch {
            setTimeout(() => {
                showStatusMessage(message.failure);
            }, 1000);
        } finally {
            setTimeout(() => {
                loader.remove();
                form.reset();
            }, 2000);
        }
    }

    function showStatusMessage(message) {
        const modalDialog = document.querySelector('.modal__dialog');

        modalDialog.classList.add('hide');

        openModal('.modal', '.modal__content', modalOpenTimerId);

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

            closeModal('.modal', '.modal__content');
        }, 3000);
    }
}

export default __Form;