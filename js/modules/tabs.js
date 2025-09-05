function __Tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tab_content'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContents() {
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

        tabContents.forEach(tabContent => {
            tabContent.classList.add('hide');
            tabContent.classList.remove('show');
        });
    }

    function showTabContent(index = 0) {
        tabs[index].classList.add('tabheader__item_active');
        tabContents[index].classList.add('show', 'tab__fade');
        tabContents[index].classList.remove('hide');
    }

    tabsParent.addEventListener('click', (event) => {
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

export default __Tabs;