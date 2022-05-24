const body = document.body;
const title = document.querySelector('#page-title');
const button = document.querySelector('#mode-selector');
const footer = document.querySelector('footer');


button.addEventListener('click', event => {
    body.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    event.target.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
})
