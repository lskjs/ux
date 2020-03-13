#!/usr/bin/env bash
cd packages/docs && \
npm run bootstrap && \
npm run build-storybook && \
echo "Storybook build successfully" && \
cd ../.. && \
npm run deploy-storybook -- -e=docs && \
echo "Storybook deploy successfully" && \
echo "Cleaning docs folder" && \
rm -rf docs