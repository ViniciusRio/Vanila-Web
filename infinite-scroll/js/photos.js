import { apiKey } from './config.js';

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;

const count = 10;
const query = 'puppy';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}&orientation=squarish`;

function imageLoader(imagesLoaded, totalImages) {
  // vanish loader
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
  };
}

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const photosArray = await response.json();
      
      displayPhotos(photosArray);

    } catch (error) {
      alert(error);
    }
  }

function displayPhotos(photosArray) {
  let imagesLoaded = 0;
  const totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    const photoLink = document.createElement('a');
    setAttributes(photoLink, {
      href: photo.links.html,
      target: '_blank'

    });

    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    imagesLoaded++;

    img.addEventListener('load', imageLoader(imagesLoaded, totalImages));
    photoLink.appendChild(img);
    imageContainer.appendChild(photoLink);
  });

}

window.addEventListener('scroll', () => {
  /*
    Height the screen of content + amount pixels that scrolling 
    >=
    Height the body (incluing borders and padding) - 1000 
    and only img ready (all photos loaded)
   */
  console.log(document.body.offsetHeight);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    // turn false ready for restart loop photos load 
    ready = false;

    getPhotos();
  }
});

getPhotos();
