#!/usr/bin/env bash

declare -a PROJECTS="${HOME}/projects"

./scripts/linkwatch.sh ${PROJECTS}/lskjs-ux/packages/t/build `pwd`/packages/dash/node_modules/@lskjs/t &
echo 'OK'



