//Twitter
import twitterImage from '@assets/twitter-feed.png'
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
      'This project was done in my spare time. The project itself is an advanced challenge on Frontend Mentor. The goal for me was to improve my JavaScript skills while incorporating the use of a REST API. In retrospect, I would have liked to include the use of a JavaScript framework in this project.',
    demoLink: 'https://frontend-mentor-api-countries.netlify.app/',
    repoLink: 'https://github.com/ande397c/Frontend-Mentor-rest-countries-api',
    stack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
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
    desc: 'Guess which movie has the highest rating. Game made with React and TypeScript.',
    tag: 'imdb',
    intro:
      'This is a very personal project of mine. The idea for the project is a result of an early unbound fascination and interest for movies. As I started getting more into Web Development, I thought that it would make for a nice spare time project. The site uses Supabase for the backend.',
    demoLink: 'https://rating-guess.netlify.app/',
    repoLink: 'https://github.com/ande397c/react-movie-rating/tree/main',
    stack: [
      'Tailwind',
      'React',
      'TypeScript',
      'Supabase',
    ],
    navigateLinks: {
      linkPrevious: '/projects/countries-project/',
      linkNext: '',
    },
    screenshots: {
      img1: imdbIntro,
      img2: imdbHighscores,
      img3: imdbLost,
    },
  },
]
