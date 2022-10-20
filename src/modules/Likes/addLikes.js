import { involvement } from '../ClassCall/classCall.js';

export default async function addLikes() {
  const moviesContainer = document.querySelector('.list-container');
  moviesContainer.addEventListener('click', async (e) => {
    e.preventDefault();
    const { target } = e;
    const movieId = target.getAttribute('data-index-number');
    if (target.matches('.like-button')) {
      await involvement.addLikes(movieId);
      const likes = await involvement.getLikes();
      const likenum = likes.findIndex((item) => item.item_id === movieId);
      target.innerHTML = `Liked: ${likes[likenum].likes}`;
    }
  });
}
