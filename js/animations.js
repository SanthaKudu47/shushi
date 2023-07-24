let bannerAnimated = false;

function animateHeader() {
  const header = document.querySelector(".header__nav");
  const logo = document.querySelector(".header__logo");
  const menu = document.querySelector(".header__menu");
  if (header && logo && menu) {
    logo.style.marginTop = "-100px";
    menu.style.marginTop = "-100px";
    setTimeout(() => {
      logo.style.marginTop = "0px";
      menu.style.marginTop = "0px";
      logo.style.visibility = "visible";
      menu.style.visibility = "visible";
    }, 300);
  }
}

function animateHeaderBanner(scrollPosition = { y: 0, x: 0 }) {
  const banner = document.querySelector(".hero__right--banner");
  const classes = banner.classList;
  console.log(classes);

  if (banner) {
    if (window.innerHeight - scrollPosition.y === window.innerHeight) {
      console.log("revert animation");
      bannerAnimated = false;
      banner.classList.remove("animate__active");
    } else {
      if (bannerAnimated) {
        console.log("already done");
      } else {
        bannerAnimated = true;
        banner.classList.add("animate__active");
        console.log("play for once");
      }
    }
  }
}

class ScrollPositionDetector {
  static addScrollListener() {
    console.log("Added Listener");
    window.addEventListener("scroll", (win, event) => {
      let currentScrollXPosition = window.scrollX;
      let currentScrollYPosition = window.scrollY;
      animateExecutor({ x: currentScrollXPosition, y: currentScrollYPosition });
    });
  }

  static addPageLoadListener() {
    window.addEventListener("load", (event) => {
      animateHeader();
    });
  }
}

function animateExecutor(scrollPosition = { y: 0, x: 0 }) {
  animateHeaderBanner(scrollPosition);
}

ScrollPositionDetector.addScrollListener();
ScrollPositionDetector.addPageLoadListener();

export { animateHeader };
