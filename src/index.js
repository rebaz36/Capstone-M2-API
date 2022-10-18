import _ from 'lodash';
import './styles.css';

const getData = (number, section) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.querySelector('.hero-image');
      imageContainer.innerHTML += `<img src="${data[number][section]}" />`;
      console.log(data);
    });
};

document.addEventListener('DOMContentLoaded', getData(0, 'image'));