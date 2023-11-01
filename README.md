# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
![](/screenshots/screenshot-desktop.png)
![](/screenshots/screenshot-desktop-active.png)
![](/screenshots/screenshot-mobile.png)
![](/screenshots/screenshot-mobile-active.png)

### Links

- Live Site URL: https://sue-section-with-dropdown-navigation.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Bootstrap

### What I learned

Creating dropdown menu, using JS

```js
toggleLine.forEach((line, index) => {
  line.addEventListener("click", () => {
    const targetId = line.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    //   setting max-height to the toggle menu
    targetElement.style.maxHeight = "250px";

    if (targetElement.classList.contains("open")) {
      targetElement.classList.remove("open");
      targetElement.style.maxHeight = "0";
    } else {
      targetElement.classList.add("open");
    }

    toggleButtons[index].classList.toggle("closing");

    currentOpenLine = line;
  });
});
```

## Author

- Frontend Mentor - [@shoproizoshlo](https://www.frontendmentor.io/profile/shoproizoshlo)
