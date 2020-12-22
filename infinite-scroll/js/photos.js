import { apiKey } from './config.js';

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let photosArray = [];
let imagesLoaded = 0;
let totalImages = 0;

const count = 10;
const query = 'puppy';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&query=${query}&orientation=squarish`;

function imageLoader() {
  imagesLoaded++;
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
      photosArray = await response.json();
      
      displayPhotos();

    } catch (error) {
      alert(error);
    }
  }

function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

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

    img.addEventListener('load', imageLoader);
    photoLink.appendChild(img);
    imageContainer.appendChild(photoLink);
  });

}

getPhotos();
