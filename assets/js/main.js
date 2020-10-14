function handleMenuClick() {
  var navbar = document.getElementById("navbar");
  if (navbar.className === "") {
    navbar.className += "show";
  } else {
    navbar.className = "";
  }
}
