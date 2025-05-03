document.addEventListener('DOMContentLoaded', () => {
  // DESKTOP SELECTORS
  const desktopLogo = document.querySelector('.header__logo');
  const desktopNavigation = document.querySelector('.nav');
  const desktopButtonGroup = document.querySelector('.nav__btn-group');

  // MOBILE SELECTORS
  const mobileOpenButton = document.querySelector('.header__mobile-toggle');
  const mobileCloseButton = document.querySelector('.header__mobile-close');

  const mobileNavigation = document.querySelector('.nav--mobile');
  const mobileBackground = document.querySelector('.nav--background');

  const toggleMobileNavigation = (isOpen) => {
    const navClassList = mobileNavigation.classList;
    const navBackgroundClassList = mobileBackground.classList;

    if (isOpen) {
      navClassList.add('open');
      navBackgroundClassList.add('open');
    } else {
      navClassList.remove('open');
      navBackgroundClassList.remove('open');
    }

    // Block scroll when mobile navigation is open
    document.body.style.overflow = isOpen ? 'hidden' : '';

    mobileOpenButton.setAttribute('aria-expanded', String(isOpen));
    toggleAriaHiddenNavigation(isOpen);
  };

  const toggleAriaHiddenNavigation = (isHidden) => {
    desktopLogo.setAttribute('aria-hidden', String(isHidden));
    desktopNavigation.setAttribute('aria-hidden', String(isHidden));
    desktopButtonGroup.setAttribute('aria-hidden', String(isHidden));

    mobileNavigation.setAttribute('aria-hidden', String(!isHidden));
    mobileBackground.setAttribute('aria-hidden', String(!isHidden));
  };


  mobileOpenButton.addEventListener('click', () => toggleMobileNavigation(true));
  mobileCloseButton.addEventListener('click', () => toggleMobileNavigation(false));
});