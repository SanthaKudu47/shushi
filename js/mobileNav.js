function enableMobileNav() {
  const menuIcon = document.getElementById("menu");
  const dropDown = document.getElementById("drop-down");

  if (menuIcon && dropDown) {
    menuIcon.onclick = (handler, event) => {
      if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
      } else {
        dropDown.style.display = "none";
      }
    };
  }
}

export {enableMobileNav}
