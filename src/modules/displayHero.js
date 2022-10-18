export const displayHero = (number, section) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.querySelector('.hero-image');
      imageContainer.innerHTML += `<img src="${data[number][section]}" />`;
    });
};

export const Displaymovies = (number) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < number; i += 1) {
        const hour = Math.floor((data[i].running_time / 60));
        const minutes = (data[i].running_time % 60);
        const listContainer = document.querySelector('.list-container');
        listContainer.innerHTML += `<div class="movie-container">
          <img class="movie-image" src="${data[i].image}" alt="${data[i].title}">
            <div class="movie-info">
              <h3>${data[i].title}</h3>
              <p>${data[i].release_date}</p>
              <p>${hour}h ${minutes} min</p>
            </div>
            <div class="movie-buttons">
              <button class="like-button">Like</button>
              <button class="comment-button">Comment</button>
            </div>
          </div>`;
      }
    });
};