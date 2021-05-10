(function(){
  function getParameterByName(name) {
      var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
      return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  function replacePhotoWith3DPhoto(node, url, width) {
    node.innerHTML = `
    <div class="fb-post"
        data-href="${url}"
        data-width="${width}"></div>
        `;
  }

  // replace with 3D photos corresponding to article images
  const articlePhoto3DUrls = [
    null,
    'https://www.facebook.com/mikhael.kohen.75/posts/108894971367572',
    null,
  ];
  let main3DPhotoUrl = 'https://www.facebook.com/mikhael.kohen.75/posts/108828791374190';
  const mainPhotoCSS = '.css-bsn42l';
  const articlePhotoCSS = '.css-zjzyr8';

  const overrideUrl = getParameterByName("overrideurl");
  if (overrideUrl) {
    main3DPhotoUrl = overrideUrl;
  }

  // replace main photo
  const mainPhoto = document.querySelector(mainPhotoCSS);
  replacePhotoWith3DPhoto(mainPhoto, main3DPhotoUrl, 1000);

  // replace article photos
  const articlePhotos = document.querySelectorAll(articlePhotoCSS);
  let i = 0;
  articlePhotos.forEach(function(node) {
    if (articlePhoto3DUrls[i] != null) {
      replacePhotoWith3DPhoto(node, articlePhoto3DUrls[i], 720);
    }
    i++;
  });
}());
