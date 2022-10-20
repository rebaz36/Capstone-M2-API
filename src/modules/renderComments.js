import { commentCounter, involvement } from './ClassCall/classCall.js';

const renderComments = async (number) => {
  const commentsContainer = document.querySelector('.comments');
  commentsContainer.innerHTML = '<h4 id"comments-header"></h4>';
  const comments = await involvement.getComments(`item${number}`);
  for (let i = 1; i < comments.length; i += 1) {
    const newP = document.createElement('p');
    newP.textContent = `${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment}`;
    newP.classList.add('comment');
    commentsContainer.appendChild(newP);
  }
  commentCounter.getComments();
};

export default renderComments;
