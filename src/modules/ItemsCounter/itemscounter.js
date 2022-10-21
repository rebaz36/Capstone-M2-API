export default class ItemCounter {
  constructor() {
    this.items = 0;
  }

  addItems() {
    return this.items + 1;
  }

  getItems() {
    document.querySelectorAll('.movie-container').forEach(() => {
      this.items = this.addItems();
    });
    return this.items;
  }

  setItems() {
    document.querySelector('#moviecount').innerHTML = `Movies (${this.items})`;
  }
}