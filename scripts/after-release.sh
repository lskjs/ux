#!/usr/bin/env bash
cd packages/docs && \
npm run bootstrap && \
npm run build-storybook && \
echo "Storybook build successfully"