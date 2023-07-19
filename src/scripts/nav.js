"use strict";

window.addEventListener("load", documentReady);


function documentReady() {

const el = document.querySelector(".scroll-indicator")


  const logo = document.querySelector(".logo-container")
  logo.addEventListener("click", ()=>{
     location.replace("/");
  })

    // Add active class to current page
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll(".nav_links a");
    const menuLength = menuItem.length;

  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }

    // Toggle burgermenu on click
    const burger = document.querySelector(".burger");
    burger.addEventListener("click",() => toggleBurgerMenu(burger));
}

// Handle burger menu toggle
function toggleBurgerMenu(burger) {
    const links = document.querySelector(".nav_links");
    links.classList.toggle("nav_toggle");
    burger.classList.toggle("toggle");
}
