export default class InvolvementAPI {
  constructor() {
    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
    this.appId = 'fqzVdzHlyFNWpuh7iQ2I';
  }

  async getId() {
    const response = await fetch(`${this.url}`, {
      method: 'POST',
    });
    const data = await response.text();
    return data;
  }

  async getLikes() {
    const response = await fetch(`${this.url}${this.appId}/likes`);
    const data = await response.json();
    return data;
  }

  async postLikes() {
    const response = await fetch(`${this.url}${this.appId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: '1',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }

  async getComments() {
    const response = await fetch(`${this.url}${this.appId}/comments`);
    const data = await response.json();
    return data;
  }

  async postComments(comment) {
    const response = await fetch(`${this.url}${this.appId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: '1',
        username: 'user',
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }
}