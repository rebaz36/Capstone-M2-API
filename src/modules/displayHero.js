import ghibliapi from './API/ghibliApi.js';
import { imageContainer } from './elements/elements.js';

export default async function displayHero(number) {
  const data = await ghibliapi.fetchallmovies();
  imageContainer.innerHTML += `<img src="${data[number].image}" />`;
}