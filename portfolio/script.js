window.onload = function() {

    let isMenuOpen = false;
    
    const menuButton = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    
    menuButton.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
    
            if (isMenuOpen) {
                menuButton.classList.add('open');
                menu.classList.add('menu-open');
            } else {
                menuButton.classList.remove('open');
                menu.classList.remove('menu-open');
            }
        });
}
