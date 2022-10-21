export default class CommentsCounter {
  constructor() {
    this.comments = 0;
  }

  getComments() {
    this.comments = 0;
    document.querySelectorAll('.comment').forEach(() => {
      this.comments += 1;
    });
    document.querySelector('.comments h4').innerText = `Comments (${this.comments})`;
    return this.comments;
  }
}