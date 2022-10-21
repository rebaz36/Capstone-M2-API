import { commentCounter } from '../ClassCall/classCall.js';

document.body.innerHTML = '<div class="comments"><h4 id"comments-header"></h4> </div>';
const commentsListSelector = document.querySelector('.comments');

describe('Comment counter', () => {
  test('Comment counter should return 0 if the list has no .comment elements', () => {
    expect(commentCounter.getComments()).toEqual(0);
  });
  test('Comment counter should return 1 after adding a comment', () => {
    const newP = document.createElement('p');
    newP.classList.add('comment');
    newP.textContent = 'Hello World!';
    commentsListSelector.appendChild(newP);
    expect(commentCounter.getComments()).toEqual(1);
  });
});
