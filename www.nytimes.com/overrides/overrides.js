function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

const photo3DUrls = [
  'https://www.facebook.com/Dino3DPhotos/posts/290430298542834',
  'https://www.facebook.com/Dino3DPhotos/posts/290429878542876',
  'https://www.facebook.com/Dino3DPhotos/posts/285515049034359',
  'https://www.facebook.com/Dino3DPhotos/posts/290429005209630',
  'https://www.facebook.com/Dino3DPhotos/posts/290429558542908',
  'https://www.facebook.com/Dino3DPhotos/posts/285515935700937',
];
let main3DPhotoUrl = 'https://www.facebook.com/Dino3DPhotos/posts/290427008543163';
const mainPhotoCSS = 'figure.css-1fwiylb';
const smallPhotoCSS = 'figure.css-1ag53q4';

const overrideUrl = getParameterByName("overrideurl");
const useRandom = getParameterByName("random");
if (overrideUrl) {
  main3DPhotoUrl = overrideUrl;
} else if (useRandom) {
  photo3DUrls.push(main3DPhotoUrl);
  const index = Math.floor(Math.random() * photo3DUrls.length);
  main3DPhotoUrl = photo3DUrls[index];
}

function replacePhotoWith3DPhoto(node, url, width) {
  node.innerHTML = `
  <div class="fb-post"
      data-href="${url}"
      data-width="${width}"></div>
      `;
}

const mainPhoto = document.querySelector(mainPhotoCSS);
replacePhotoWith3DPhoto(mainPhoto, main3DPhotoUrl, 1000);

// uncomment to replace other photos with 3D photos on page
// const smallPhotos = document.querySelectorAll(smallPhotoCSS);
// let i = 0;
// smallPhotos.forEach(function(node) {
//   if (photo3DUrls[i]) {
//     replacePhotoWith3DPhoto(node, photo3DUrls[i], 400);
//   }
//   i++;
// });
