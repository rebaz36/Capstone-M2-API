import ghibilapi from './API/ghibliApi.js';
import { modalBg, modalContainer, body } from './elements/elements.js';
/* displayModal.js */

export const hideModal = () => {
  modalBg.style.display = 'none';
  modalContainer.style.display = 'none';
  body.style.overflow = 'auto';
};

export async function displayModal(number) {
  modalBg.style.display = 'flex';
  modalContainer.style.display = 'flex';
  body.style.overflow = 'hidden';
  const data = await ghibilapi.fetchmovie(number);
  modalContainer.innerHTML = `
  <i class="fa-solid fa-xmark fa-2xl"></i>
  <img src="${data.image}"/>
  <div class="information">
    <div class="left">
    <p class="indicator">Title: <span>${data.title}</span></p>
    <p class="indicator">Original Title: <span>${data.original_title}</span></p>
    </div>
    <div class="right">
    <p class="indicator">Release date: <span>${data.release_date}</span></p>
    <p class="indicator">Director: <span>${data.director}</span></p>
    
    </div>
  </div>
  <p class="description indicator">Description: <span>${data.description}</span></p>
  `;

  modalBg.addEventListener('click', (e) => {
    const { target } = e;
    if (target.classList.contains('modal-bg') || target.classList.contains('fa-xmark')) {
      hideModal();
    }
  });
}

export default displayModal;