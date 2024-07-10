'use strict'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

document.addEventListener('astro:beforeload', documentReady)
documentReady();

function documentReady() {
  // Toggle burgermenu on click
  const burger = document.querySelector('.burger')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => toggleBurgerMenu(burger, body))
}

// Handle burger menu toggle
function toggleBurgerMenu(burger, body) {
  console.log('toggleBurgerMenu')
  const links = document.querySelector('.nav_links')
  links.classList.toggle('nav_toggle')
  burger.classList.toggle('toggle')
  body.classList.toggle('overflow-hidden')
}
