#!/usr/bin/env bash
IS_STORYBOOK=`node -e "console.log(Number(require('./.lskjs.js').storybook) || 0)"`
if [ $IS_STORYBOOK = '1' ]
then
echo "=========== lskjs.storybook is enabled, installing dependencies ===========" && \
cd .storybook && \
npm ci && \
rm -f ../packages/node_modules && \
ln -s `pwd`/node_modules ../packages/node_modules && \
cd .. && \
echo "=========== Storybook dependencies installed successful ==========="
fi &&
lerna exec -- npm run bootstrap
