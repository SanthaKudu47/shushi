let bannerAnimated = false;
const sectionOneImagesAnimated = {
  image1: false,
  image2: false,
};
let sectionOneContentAnimated = false;

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

  if (banner) {
    if (window.innerHeight - scrollPosition.y === window.innerHeight) {
      bannerAnimated = false;
      banner.classList.remove("animate__active");
    } else {
      if (!bannerAnimated) {
        bannerAnimated = true;
        banner.classList.add("animate__active");
      }
    }
  }
}

function animateSectionOneImage(
  imageElementId,
  containerId,
  indexName = "image1"
) {
  const container = document.getElementById(imageElementId);
  const image = document.getElementById(containerId);

  if (image && container) {
    if (container.getBoundingClientRect().y <= window.innerHeight / 2) {
      sectionOneImagesAnimated[indexName] = true;
      image.classList.add("animation-active");
    } else {
      sectionOneImagesAnimated[indexName] = false;
      image.classList.remove("animation-active");
    }
  }
}

function animateSectionOneTextContent() {
  const container = document.getElementById("section-one-right-content");
  if (container) {
    if (container.getBoundingClientRect().y <= window.innerHeight / 2) {
      sectionOneContentAnimated = true;
      container.classList.add("content-animate");
    } else {
      sectionOneContentAnimated = false;
      container.classList.remove("content-animate");
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
  animateSectionOneImage(
    "section-one-image-one-container",
    "section-one-image-one",
    "image1"
  );
  animateSectionOneImage(
    "section-one-image-two-container",
    "section-one-image-two",
    "image2"
  );
  animateSectionOneTextContent();
}

ScrollPositionDetector.addScrollListener();
ScrollPositionDetector.addPageLoadListener();

export { animateHeader };
