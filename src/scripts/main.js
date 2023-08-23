"use strict";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

window.addEventListener("load", documentReady);


function documentReady() {

window.addEventListener("scroll", toggleNav);


  const logo = document.querySelector(".logo-container")
  logo.addEventListener("click", ()=>{
     location.replace("/");
  })

  //   // Add active class to current page
  //   const currentLocation = location.href;
  //   const menuItem = document.querySelectorAll(".nav_links a");
  //   const menuLength = menuItem.length;

  // for (let i = 0; i < menuLength; i++) {
  //   if (menuItem[i].href === currentLocation) {
  //     menuItem[i].className = "active-page";
  //   }
  // }

    // Toggle burgermenu on click
    const burger = document.querySelector(".burger");
    const body = document.querySelector("body");
    burger.addEventListener("click",() => toggleBurgerMenu(burger, body));
}

// Handle burger menu toggle
function toggleBurgerMenu(burger, body) {
    const links = document.querySelector(".nav_links");
    links.classList.toggle("nav_toggle");
    burger.classList.toggle("toggle");
    body.classList.toggle("overflow-hidden")
}

function toggleNav() {
  let windowY = window.scrollY;
  const header = document.querySelector(".nav_container");

  if (windowY >= 800) {
    header.classList.add("sticky", "toggle_nav");
  } else {
    header.classList.remove("sticky", "toggle_nav");
  }
}

