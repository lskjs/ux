#!/usr/bin/env bash
echo "waiting 30sec before docs deploy...." && \
cd packages/docs && \
sleep 30 && \
npm run bootstrap && \
npm run build-storybook && \
echo "Storybook build successfully" && \
cd ../.. && \
npm run release:storybook -- -e=docs && \
echo "Storybook deploy successfully" && \
echo "Cleaning docs folder" && \
rm -rf docs