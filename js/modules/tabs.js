function __Tabs(tabsSelector, tabsContentsSelector, tabsParentSelector) {
    const tabs = document.querySelectorAll(tabsSelector),
        tabsContents = document.querySelectorAll(tabsContentsSelector),
        tabsParent = document.querySelector(tabsParentSelector);

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
        tabsContents[index].classList.add('show', 'tab__fade'),
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

export default __Tabs;