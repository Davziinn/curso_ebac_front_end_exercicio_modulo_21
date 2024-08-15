document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.shows__tabs__button');
    const lists = document.querySelectorAll('.shows__list');

    // Iterando sobre os botões com um loop for
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function () {
            // Remover a classe ativa de todos os botões e listas
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('shows__tabs__button--is-active');
                lists[j].classList.remove('shows__list--is-active');
            }

            // Adicionar a classe ativa ao botão clicado e à lista correspondente
            tabs[i].classList.add('shows__tabs__button--is-active');
            lists[i].classList.add('shows__list--is-active');
        });
    }

    // Ativar a primeira aba e lista por padrão
    tabs[0].classList.add('shows__tabs__button--is-active');
    lists[0].classList.add('shows__list--is-active');
});
