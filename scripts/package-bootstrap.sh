#!/usr/bin/env bash

# pre link
rm -rf release && \
rm -rf build && mkdir -p build && \

rm -rf node_modules && npm i && mkdir -p node_modules && \
cp -R package.json build && \
cp -R package-lock.json build && \
if [[ -d ./cra ]]
then
  sh ../../scripts/package-cra-bootstrap.sh
fi && \
if [ "$NODE_ENV" != "production" ]
then
  ../../node_modules/npm-check-updates/bin/cli.js --dep=prod,dev,peer,optional && \
  ../../scripts/package-bootstrap-nodemodules.sh
else
  true
fi && \

echo "OK"


