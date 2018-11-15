#!/bin/bash/ -e

rm -rf ./lib &&
NODE_ENV=production babel ./src/components -d ./lib -D 
