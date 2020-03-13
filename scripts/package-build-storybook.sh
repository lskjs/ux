#!/usr/bin/env bash
rm -rf ../../docs
env NODE_OPTIONS=--max_old_space_size=4096 \
  node ../../node_modules/@storybook/react/bin/build.js \
    -c .storybook \
    -o ../../docs
