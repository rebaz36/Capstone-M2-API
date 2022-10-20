import ItemCounter from '../ItemsCounter/itemscounter.js';
import InvolvementAPI from '../API/InvolvementAPI.js';
import Ghibliapi from '../API/ghibliApi.js';

const counter = new ItemCounter();
const involvement = new InvolvementAPI();
const ghibliApi = new Ghibliapi();

export {
  counter,
  involvement,
  ghibliApi,
};