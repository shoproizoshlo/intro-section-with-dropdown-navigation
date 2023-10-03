document.getElementById("menu-icon").addEventListener("click", () => {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-icon").innerHTML =
      '<img onclick="teste()" src="./images/icon-menu.svg" alt="">';
    document.querySelector(".overlay").style.display = "none";
  } else {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-icon").innerHTML =
      '<img onclick="teste()" src="./images/icon-close-menu.svg" alt="">';
    document.querySelector(".overlay").style.display = "block";
  }
});
