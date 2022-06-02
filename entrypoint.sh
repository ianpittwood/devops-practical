#!/bin/sh
echo DATABASE_HOST=${DATABASE_HOST} > .env
echo DATABASE_PORT=${DATABASE_PORT} >> .env
echo DATABASE_NAME=${DATABASE_NAME} >> .env
echo DATABASE_USER=${DATABASE_USER} >> .env
echo DATABASE_PASSWORD=${DATABASE_PASSWORD} >> .env
pm2-runtime start ecosystem.config.js --env development