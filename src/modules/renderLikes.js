import { involvement } from './ClassCall/classCall.js';

export async function renderLikes() {
  const movieLikes = await involvement.getLikes();
  document.querySelectorAll('.like-button').forEach((button, index) => {
    const likes = 'Likes: ';
    if (!movieLikes[index]) {
      button.textContent = `${likes} 0`;
    } else if (movieLikes[index].likes === 0) {
      button.textContent = `${likes} 0`;
    } else {
      button.textContent = `Likes: ${movieLikes[index].likes}`;
    }
    // const numLikes = like[index][likes];
    // button.innerHTML = `Likes ${like[index][likes]}`;
  });
}

export async function activeButtons() {
  document.querySelectorAll('.like-button').forEach((button, index) => {
    const Index = index;
    button.addEventListener('click', async () => {
      await involvement.addLikes(Index);
    });
  });
  renderLikes();
}
// const movieLike = Object.values(movieLikes).filter((movie) => movie.item_id === i);
