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
        document.body.style.overflow = 'visible';
    }

    modal.addEventListener('click', event => {
        const target = event.target;

        if (target === modal || target.getAttribute('data-modal-close') === '') {
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


    // Form:

    function __Form() {
        const form = document.querySelector('form');

        const message = {
            loading: 'Loading...',
            success: 'Thans for contacting with us',
            failure: 'Something went wrong',
        }

        form.addEventListener('submit', event => {
            event.preventDefault();

            const loader = document.createElement('div');

            loader.classList.add('loader');

            loader.style.width = '1.25rem';
            loader.style.height = '1.25rem';
            loader.style.marginTop = '1.25rem';

            form.append(loader);

            const formData = new FormData(form);

            const formObject = {};

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

export default __Modal__Form;