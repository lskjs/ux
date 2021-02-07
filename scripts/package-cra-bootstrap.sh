#!/usr/bin/env bash
cd cra && \
if [ "$NODE_ENV" != "production" ]
then
  ../../../node_modules/npm-check-updates/bin/cli.js --dep=prod,dev,peer,optional
else
  true
fi && \
npm i && \
cd ../