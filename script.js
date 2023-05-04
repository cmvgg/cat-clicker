// Obtener elementos del DOM
const catImages = document.querySelectorAll('img[data-index]');
const dogImage = document.getElementById('dog');
const counter = document.getElementById('counter');

// Definir nombres de los gatos
const catNames = ['Lola', 'Silvestre'];

// Añadir evento de click a las imágenes de los gatos
catImages.forEach((catImage) => {
  const catName = catNames[catImage.dataset.index];
  catImage.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1;
    catImage.setAttribute('title', catName);
  });
});

// Añadir evento de click al perro
const dogName = 'Toby';
dogImage.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) - 1;
    dogImage.setAttribute('title', dogName);
  }
);
