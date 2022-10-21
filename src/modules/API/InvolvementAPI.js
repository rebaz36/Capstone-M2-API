export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.appId = '9nlEs743ggovOR9F67Kt';
    this.headers = { 'Content-type': 'application/json; charset=UTF-8' };
  }

  // used to get app id
  async getId() {
    const response = await fetch(`${this.url}`, {
      method: 'POST',
    });
    const data = await response.text();
    return data;
  }

  // add likes, pass the movie number and that movie will get a +1 like
  async addLikes(id) {
    const response = await fetch(`${this.url}${this.appId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  }

  // retuns a list of objects each object includes movie number and it's number of likes should be
  // filtered based on the movie number
  async getLikes() {
    const result = await fetch(`${this.url}${this.appId}/likes`, {
      method: 'GET',
    });
    const list = await result.json();
    return list;
  }

  // pass comment, username, movie number
  // comment is added to the list seperated based on the id which is the movie number
  async postComments(comment, UserName, id) {
    const body = JSON.stringify({
      item_id: id,
      username: UserName,
      comment,
    });

    await fetch(`${this.url}${this.appId}/comments`, {
      method: 'POST',
      body,
      headers: this.headers,
    });
  }

  // returns list of objects that includes the movies and their comments
  async getComments(id) {
    const response = await fetch(`${this.url}${this.appId}/comments?item_id=${id}`, { method: 'GET' });
    const data = await response.json();
    return data;
  }
}