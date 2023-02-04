const modal = document.querySelector('.modal');
const slider = document.querySelector('.slider-modal');

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        slider.classList.toggle('sidebar-cerrar');
    }, 900);
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    slider.classList.toggle('sidebar-cerrar');
    setTimeout(() => {
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';

    }, 900);
});
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        slider.classList.toggle('sidebar-cerrar');
        setTimeout(() => {
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
        }, 900);

    }
});

