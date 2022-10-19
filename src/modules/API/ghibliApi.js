export default class ghibliapi {
  // return all movies
  static async fetchallmovies() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    return data;
  }

  // return limited number of movies
  static async fetchlimitedmovies(number) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    return data.slice(0, number);
  }

  // return a movie based on it's number
  static async fetchmovie(number) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const data = await response.json();
    const movie = data[number];
    return movie;
  }

  // return all people
  static async fetchpeople() {
    const response = await fetch('https://ghibliapi.herokuapp.com/people');
    const data = await response.json();
    return data;
  }

  // return a person based on it's ID
  static async fetchperson(id) {
    const response = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
    const data = await response.json();
    return data;
  }
}