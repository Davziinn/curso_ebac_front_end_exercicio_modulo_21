document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq__list__item__question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const listItem = question.parentElement;
            const isOpen = listItem.classList.contains('faq__list__item--is-open');

            document.querySelectorAll('.faq__list__item--is-open').forEach(function (item) {
                item.classList.remove('faq__list__item--is-open');
            });

            if (!isOpen) {
                listItem.classList.add('faq__list__item--is-open');
            }
        });
    });

    const tabs = document.querySelectorAll('.shows__tabs__button');
    const lists = document.querySelectorAll('.shows__list');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('shows__tabs__button--is-active');
                lists[j].classList.remove('shows__list--is-active');
            }

            tabs[i].classList.add('shows__tabs__button--is-active');
            lists[i].classList.add('shows__list--is-active');
        });
    }

    tabs[0].classList.add('shows__tabs__button--is-active');
    lists[0].classList.add('shows__list--is-active');

    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        }
    }

    window.addEventListener('scroll', stickyHeader);
});
