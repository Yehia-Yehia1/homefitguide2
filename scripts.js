function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

document.addEventListener('click', function (event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuToggle = document.querySelector('.menu-toggle');
    const isClickInsideMenu = sideMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
    }
});
