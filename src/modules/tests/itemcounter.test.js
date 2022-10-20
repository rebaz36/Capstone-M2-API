import { counter } from '../ClassCall/classCall.js';

document.body.innerHTML = '';

describe('items counter', () => {
  test('items counter should return 0 if the list has no .comment elements', () => {
    expect(counter.getItems()).toEqual(0);
  });
  test('Comment counter should return the number of elements which has movie-container class', () => {
    document.body.innerHTML = `
    <div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
    </div>`;
    expect(counter.getItems()).toEqual(7);
  });
});