import ItemCounter from '../ItemsCounter/itemscounter.js';
import InvolvementAPI from '../API/InvolvementAPI.js';
import Ghibliapi from '../API/ghibliApi.js';
import CommentsCounter from '../ItemsCounter/commentsCounter.js';

const counter = new ItemCounter();
const commentCounter = new CommentsCounter();
const involvement = new InvolvementAPI();
const ghibliApi = new Ghibliapi();

export {
  counter,
  commentCounter,
  involvement,
  ghibliApi,
};