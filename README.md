# File Upload Demo

## Overview

This is a demo on how to build a Node server to preview and upload files
via HTML Forms and Multer.

## Deployment

You can run this in a Dockerfile via the image `docker run -p 5000:5000 mckp/file-upload-demo`

## Development

```sh
yarn #install deps
yarn dev # run server locall for dev
```

## Environment Variables

There are some things we can toggle via env vars. See `.env` for more
details

```s
# you can see defaults set inside of `app/env.js`
# Set to _anything_ to be to true
# do not set or set to empty to be false
SHOW_UPLOADED_IMAGE=
# if the above is false, what file would
# you like us to serve, based in public/img/<name>
HARDCODED_FILENAME=contours-big.png
# what port do you want the system to listen on?
PORT=5000
```