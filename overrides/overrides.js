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
    null,
    null,
  ];
  let main3DPhotoUrl = 'https://www.facebook.com/mikhael.kohen.75/posts/108828791374190';
  const mainPhotoCSS = '.css-bsn42l';
  const articlePhotoCSS = '.css-zjzyr8';

  const overrideUrl = getParameterByName("overrideurl");
  const all = getParameterByName("all");
  if (overrideUrl) {
    main3DPhotoUrl = overrideUrl;
  } else if (all) {
    const smallPhotos = document.querySelectorAll(articlePhotoCSS);
    let i = 0;
    smallPhotos.forEach(function(node) {
      console.log(node)
      if (articlePhoto3DUrls[i] != null) {
        replacePhotoWith3DPhoto(node, articlePhoto3DUrls[i], 720);
      }
      i++;
    });
  }

  const mainPhoto = document.querySelector(mainPhotoCSS);
  replacePhotoWith3DPhoto(mainPhoto, main3DPhotoUrl, 1000);
}());
