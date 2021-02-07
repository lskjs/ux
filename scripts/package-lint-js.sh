#!/usr/bin/env bash
NODE_ENV=production \
  eslint \
    --cache \
    --cache-location=.cache/eslint \
    --ext .js,.jsx,.json,.ts,.tsx \
    --report-unused-disable-directives \
    src