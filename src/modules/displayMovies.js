import { listContainer } from './elements/elements.js';
import ghibliapi from './API/ghibliApi.js';
import { counter } from './ClassCall/classCall.js';

export default async function displayMovies(number) {
  const data = await ghibliapi.fetchallmovies();

  for (let i = 0; i < number; i += 1) {
    const hour = Math.floor((data[i].running_time / 60));
    const minutes = (data[i].running_time % 60);
    listContainer.innerHTML += `<div class="movie-container">
      <img class="movie-image" src="${data[i].image}" alt="${data[i].title}" data-index-number=${i}>
        <div class="movie-info">
          <h3 class="movie-title">${data[i].title}</h3>
          <p>Release Date: ${data[i].release_date}</p>
          <p>Duration: ${hour}h ${minutes} min</p>
        </div>
        <div class="movie-buttons">
          <button class="like-button">Like</button>
          <button class="comment-button">Comment</button>
        </div>
      </div>`;
  }
  counter.getItems();
}