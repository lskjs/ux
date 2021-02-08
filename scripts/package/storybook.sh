#!/usr/bin/env bash
PACKAGE=${PWD##*/} 

pwd && \
cd ../../.storybook && \
pwd && \
echo "${PACKAGE} => start-storybook -p 9001" && \
PACKAGE=${PACKAGE} npm run storybook -- -p 9001 -c config