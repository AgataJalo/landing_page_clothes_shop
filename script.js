function menuToggle() {
    const toggleMenu = document.querySelector('.toggle-menu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}