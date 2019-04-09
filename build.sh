#!/bin/bash/ -e

rm -rf ./lib &&
NODE_ENV=production babel ./src/components -d ./lib -D --include-dot-files --no-comments --compact --minified
NODE_ENV=production babel ./src/components/.globals.js -o ./lib/.globals.js --include-dot-files --no-comments --compact --minified
