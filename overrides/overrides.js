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

  const articlePhoto3DUrls = [
    null,
    null,
    'https://www.facebook.com/michael.cohen.12764/posts/10159452170718699',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  let main3DPhotoUrl = 'https://www.facebook.com/michael.cohen.12764/posts/10159452170718699';
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