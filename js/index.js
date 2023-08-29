function onClickToggleMenu() {
    const menuButton = document.getElementById('nav__btn');
    const navList = document.getElementsByClassName('navigation__list')[0];
    const navMenu = document.getElementsByClassName('navigation')[0];
    const state = menuButton.getAttribute('state');
    const newState = state === 'closed' ? 'opened' : 'closed';
    menuButton.setAttribute('state', newState);
    if (newState === 'opened') {
        navList.className += ' hidden';
        navMenu.style.background = 'transparent';
    } else {
        navList.classList.remove('hidden');
    }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 800) {
    navList.classList.remove('hidden'); 
    navMenu.style.background = 'transparent';
    menuButton.setAttribute('state', 'closed');
  }
});
  