const imageContainer = document.getElementById('image-container');

let photosArray = [];

const count = 10;
// You shouldn't store API Keys publicly like this, but this is an exception because it is free and the data are anyways available.
const APIkey = '';
const query = 'puppy';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish`;

async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();

      // displayPhotos();
    } catch (error) {
      alert(error);
    }
  }

  getPhotos();