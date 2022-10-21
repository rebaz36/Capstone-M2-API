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
    document.body.innerHTML = '';
  });
  test('item counter should update the header with the number of items', () => {
    document.body.innerHTML = `
    <div>
      <button id="moviecount" >Movies</button>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
      <div class="movie-container"> content </div>
    </div>`;
    counter.setItems();
    const movieCount = document.querySelector('#moviecount').innerHTML;
    const expected = 'Movies (7)';
    expect(movieCount).toEqual(expected);
  });
});