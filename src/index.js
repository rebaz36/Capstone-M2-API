// import _ from 'lodash';
import displayHero from './modules/displayHero.js';
import displayMovies from './modules/displayMovies.js';
import { displayModal } from './modules/displayModal.js';
import './styles.css';
import addLikes from './modules/Likes/addLikes.js';
import renderLikes from './modules/renderLikes.js';

const moviesContainer = document.querySelector('.list-container');
async function render() {
  document.onload = await displayHero(0);
  document.onload = await displayMovies(8);
  document.onload = await renderLikes();
  document.onload = await addLikes();
  moviesContainer.addEventListener('click', (e) => {
    const { target } = e;
    if (target.matches('.movie-image') || target.matches('.comment-button')) {
      displayModal(target.getAttribute('data-index-number'));
    }
  });
}

render();
