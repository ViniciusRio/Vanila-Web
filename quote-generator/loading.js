const quoteContainer = document.getElementById('quote-container');
const loader = document.getElementById('loader');

export function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
export function removeLoadingSpinner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
