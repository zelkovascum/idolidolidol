'use strict';

{
  const images=document.querySelectorAll('a img');

  function showImage() {
    images.forEach(image => {
      image.classList.add('show');
    });
  }

  const showTime=setTimeout(showImage,1000);
}