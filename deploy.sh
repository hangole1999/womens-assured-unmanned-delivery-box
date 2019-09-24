#!/bin/sh

git pull origin master
npm install
npm run build
sudo rm -rf /var/www/womens-assured-unmanned-delivery-box/*
sudo cp -r dist/* /var/www/womens-assured-unmanned-delivery-box
