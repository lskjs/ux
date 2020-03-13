#!/usr/bin/env bash
lerna publish --skip-npm && \
if [ "$NODE_ENV" != "production" ]
then
  ./scripts/after-release.sh
else
  true
fi