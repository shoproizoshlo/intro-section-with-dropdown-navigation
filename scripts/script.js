// click on the menu button in mobile version
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

// click on the menu toggle buttons
const toggleButtons = document.querySelectorAll(".icon-arrow-down");
const toggleLine = document.querySelectorAll(".q-line");
const toggleTexts = document.querySelectorAll(".toggle-text");

let currentOpenButton = null;
let currentOpenLine = null;

toggleLine.forEach((line, index) => {
  line.addEventListener("click", () => {
    const targetId = line.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    //   setting max-height to the toggle menu
    targetElement.style.maxHeight = "150px";

    if (currentOpenLine && currentOpenLine !== line) {
      const currentTargetId = currentOpenLine.getAttribute("data-target");
      const currentTargetElement = document.getElementById(currentTargetId);

      currentTargetElement.classList.remove("open");
      currentOpenLine.classList.remove("closing");
      //   setting max-height to the toggle menu
      currentTargetElement.style.maxHeight = "0";
      toggleButtons.forEach((button) => {
        button.classList.remove("closing");
      });
    }

    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
    } else {
      targetElement.classList.add("open");
    }

    toggleButtons[index].classList.toggle("closing");

    currentOpenLine = line;
  });
});
