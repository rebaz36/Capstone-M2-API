// import _ from 'lodash';
import { displayHero, Displaymovies } from './modules/displayHero.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', displayHero(0, 'image'));
document.addEventListener('DOMContentLoaded', Displaymovies(20));