/* displayModal.js */
const modalBg = document.querySelector('.modal-bg');
const modalContainer = document.querySelector('.modal-content');

export const hideModal = () => {
  modalBg.style.display = 'none';
  modalContainer.style.display = 'none';
};

const displayModal = async (number) => {
  modalBg.style.display = 'flex';
  modalContainer.style.display = 'flex';
  await fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => response.json())
    .then((data) => {
      modalContainer.innerHTML = `
      <i class="fa-solid fa-xmark fa-2xl"></i>
      <img src="${data[number].image}"/>
      <div class="information">
        <div class="left">
        <p class="indicator">Title: <span>${data[number].title}</span></p>
        <p class="indicator">Original Title: <span>${data[number].original_title}</span></p>
        </div>
        <div class="right">
        <p class="indicator">Release date: <span>${data[number].release_date}</span></p>
        <p class="indicator">Director: <span>${data[number].director}</span></p>
        
        </div>
      </div>
      <p class="description indicator">Description: <span>${data[number].description}</span></p>
      `;
    });
  modalBg.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('modal-bg') || target.classList.contains('fa-xmark')) {
      hideModal();
    }
  });
};

export default displayModal;