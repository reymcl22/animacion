function openPresent(event) {
  const newHeader = document.createElement('h1');
  newHeader.textContent = 'Te amo mi Milagros, amor mio!';
  const newImage = document.createElement('img');
  newImage.src = 'corazon.gif';

  const container = document.querySelector('.regalo');
  container.innerHTML = '';
  container.appendChild(newHeader);
  container.appendChild(newImage);
}

const image = document.querySelector('img');
image.addEventListener('click', openPresent);
