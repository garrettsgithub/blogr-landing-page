const menuItems = document.querySelectorAll('.mobile-menu-item');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

menuItems.forEach(menuItem => {
    const select = menuItem.querySelector('.select');
    const caret = menuItem.querySelector('.caret');
    const dropdown = menuItem.querySelector('.dropdown');

    select.addEventListener('click', () => {
        caret.classList.toggle('caret-rotate');
        dropdown.classList.toggle('mobile-dropdown-display');
    })

})


function navToggle() {
    btn.classList.toggle('open');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}