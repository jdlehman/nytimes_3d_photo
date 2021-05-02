# Demo of a 3D Photo from Facebook on NYTimes

This can be done on any website as well, including your own.

## Get a 3D Photo from Facebook

You can get an embeddable script/iFrame from any public 3D photo on Facebook using Facebook's [embeddable posts](https://developers.facebook.com/docs/plugins/embedded-posts/). Follow the [documentation](https://developers.facebook.com/docs/plugins/embedded-posts/) to add the embedded 3D photo post to your site. You can use an existing public 3D photo, or [create your own](https://www.facebook.com/help/414295416095269).

## Generating a Demo for an Existing Site

Get static page with wget (or save the page from your browser).

```bash
wget -mpk --no-clobber --page-requisites --adjust-extension --convert-links --no-parent --ignore-tags=script <site>

# example
wget -mpk --no-clobber --page-requisites --adjust-extension --convert-links --no-parent --ignore-tags=script www.nytimes.com/section/travel
```

## Host Locally

```
python -m SimpleHTTPServer 8000
```
