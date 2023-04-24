import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення розмітки галереї

const gallery = document.querySelector(".gallery");


const markup = galleryItems.map(({preview, original, description})=> `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src= ${preview}
    data-source=${original}
    alt= ${description}
  />
</a>
</li>`).join('');
gallery.insertAdjacentHTML("beforeend", markup);


// Додавання модального вікна

const lightbox = basicLightbox.create(`
  <img src="" alt="" />
`);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.dataset.source;
    const imageAlt = event.target.alt;

    lightbox.element().querySelector('img').setAttribute('src', imageUrl);
    lightbox.element().querySelector('img').setAttribute('alt', imageAlt);

    lightbox.show();
  }
});
