// import _ from 'lodash';
import { displayHero, Displaymovies } from './modules/displayHero.js';
import displayModal from './modules/displayModal.js';
import './styles.css';

const moviesContainer = document.querySelector('.list-container');

document.addEventListener('DOMContentLoaded', displayHero(0, 'image'));
document.addEventListener('DOMContentLoaded', Displaymovies(20));
moviesContainer.addEventListener('click', (e) => {
  const { target } = e;
  displayModal(target.getAttribute('data-index-number'));
});