const displayHero = (number, section) => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      const imageContainer = document.querySelector('.hero-image');
      imageContainer.innerHTML += `<img src="${data[number][section]}" />`;
      console.log(data);
    });
};

export default displayHero;