// const sharp = require('sharp');
// const fs = require('fs');
// const path = require('path');

// const target = path.resolve(dirname, 'src/public/images');
// const destination = path.resolve(dirname, 'dist/images');

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

const target = path.resolve(dirname, '../../src/public/images');
const destination = path.resolve(dirname, '../../dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(900)
    .toFile(
      path.resolve(
        dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-900.webp`,
      ),
    );

  sharp(`${target}/${image}`)
    .resize(720)
    .toFile(
      path.resolve(
        dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-720.webp`,
      ),
    );

  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-480.webp`,
      ),
    );
});
