#!/bin/sh

git pull origin master
npm install
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html
