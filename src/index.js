// import _ from 'lodash';
import displayHero from './modules/displayHero.js';
import displayMovies from './modules/displayMovies.js';
import { displayModal } from './modules/displayModal.js';
import './styles.css';

const moviesContainer = document.querySelector('.list-container');
document.onload = displayHero(0);
document.onload = displayMovies(20);

moviesContainer.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.movie-image') || target.matches('.comment-button')) {
    displayModal(target.getAttribute('data-index-number'));
  }
});