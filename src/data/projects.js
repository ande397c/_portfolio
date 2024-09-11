// Project images:: 

// Countries
import countriesImage from '@assets/countries-overview.png'
import countriesOverviewLight from '@assets/countries-overview-light.png'
import countriesDetailed from '@assets/countries-detailed.png'
import countriesFiltered from '@assets/countries-filtered.png'
//Imdb
import imdbImage from '@assets/imdb-playing.png'
import imdbIntro from '@assets/imdb-intro.png'
import imdbHighscores from '@assets/imdb-highscores.png'
import imdbLost from '@assets/imdb-lost.png'

export const projectData = [
  {
    slug: 'projects/countries-project/',
    heading: 'Countries API project',
    projectImg: countriesImage,
    desc: 'Frontend Mentor project with light/dark theme. Made with vanilla JavaScript.',
    tag: 'countries',
    intro:
      'This project is an advanced challenge on Frontend Mentor. The goal for me was to improve my JavaScript skills while incorporating the use of an external API. The project supports dark/light theme. In retrospect, I would have liked to include the use of a JavaScript framework in this project.',
    demoLink: 'https://frontend-mentor-api-countries.netlify.app/',
    repoLink: 'https://github.com/ande397c/Frontend-Mentor-rest-countries-api',
    stack: ['HTML', 'CSS', 'JavaScript'],
    navigateLinks: {
      linkPrevious: '',
      linkNext: '/projects/rating-game/',
    },
    screenshots: {
      img1: countriesOverviewLight,
      img2: countriesDetailed,
      img3: countriesFiltered,
    },
  },
  {
    slug: 'projects/rating-game/',
    heading: 'Movie rating game',
    projectImg: imdbImage,
    desc: 'Guess which movie has the highest rating. Game made with React and TypeScript. Can you beat the current highscore?',
    tag: 'imdb',
    intro:
      'The idea for the project sprung from an early unbound fascination and interest for movies. The goal for the user is to correctly guess the movie with highest rating. The user can submit the score and compare it against other users. The site uses Supabase for storing the data. Future plans for this project includes: Ability to choose categories, difficulties and more.',
    demoLink: 'https://rating-guess.netlify.app/',
    repoLink: 'https://github.com/ande397c/react-movie-rating/tree/main',
    stack: ['Tailwind', 'React', 'TypeScript', 'Supabase'],
    navigateLinks: {
      linkPrevious: '/projects/countries-project/',
      linkNext: '/projects/weather-app/',
    },
    screenshots: {
      img1: imdbIntro,
      img2: imdbHighscores,
      img3: imdbLost,
    },
  },
  {
    slug: 'projects/weather-app/',
    heading: 'Weather app',
    projectImg: imdbImage,
    desc: 'Ios weather app clone. Made with React, Tailwind and Typescript',
    tag: 'weather',
    intro:
      'This project is a clone of the ios weather app. The project used weather data from the OpenWeatherMap API to get both coordinates and actual Data. ',
    demoLink: 'https://rating-guess.netlify.app/',
    repoLink: 'https://github.com/ande397c/react-movie-rating/tree/main',
    stack: ['Tailwind', 'React', 'TypeScript', 'REST API'],
    navigateLinks: {
      linkPrevious: '/projects/rating-game/',
      linkNext: '/projects/kanban-board/',
    },
    screenshots: {
      img1: imdbIntro,
      img2: imdbHighscores,
      img3: imdbLost,
    },
  },
  {
    slug: 'projects/kanban-board/',
    heading: 'Kanban board',
    projectImg: imdbImage,
    desc: 'Kanban board, made with Vue3, Vuetify, Typescript and testet using Vitest.',
    tag: 'kanban',
    intro:
      'This project was made to introduce myself to Vue and to corresponding technologies, like the ui library Vuetify. The board supports functionalities like, deleting and adding tasks and lists and dragging tasks. I am planning to hook the data up to a real backend to allow for data persistence.',
    demoLink: 'https://vue-board-kanban.netlify.app/',
    repoLink: 'https://github.com/ande397c/vue-kanban-board',
    stack: ['Vue', 'Vuetify', 'TypeScript', 'Vitest'],
    navigateLinks: {
      linkPrevious: '/projects/weather-app/',
      linkNext: '',
    },
    screenshots: {
      img1: imdbIntro,
      img2: imdbHighscores,
      img3: imdbLost,
    },
  },
]
