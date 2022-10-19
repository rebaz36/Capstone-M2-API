// import _ from 'lodash';
import { displayHero, displayMovies } from './modules/displayMovies.js';
import displayModal from './modules/displayModal.js';
import './styles.css';

const moviesContainer = document.querySelector('.list-container');

document.addEventListener('DOMContentLoaded', displayHero(0, 'image'));
document.addEventListener('DOMContentLoaded', displayMovies(20));
moviesContainer.addEventListener('click', (e) => {
  const { target } = e;
  if (target.matches('.movie-image')) {
    displayModal(target.getAttribute('data-index-number'));
  }
});