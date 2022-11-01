import ghibliapi from './API/ghibliApi.js';
import { imageContainer } from './elements/elements.js';

export default async function displayHero(number) {
  const data = await ghibliapi.fetchallmovies();
  imageContainer.innerHTML += `<img src="${data[number].image}" />`;
  const logo = document.querySelector('#logo');
  logo.innerHTML = '<img class = "logo" src=\'https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg\'> </img>';
}