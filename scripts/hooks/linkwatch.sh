#!/usr/bin/env bash

declare -a PROJECTS="${HOME}/projects"

./scripts/opt/linkwatch.sh ${PROJECTS}/lskjs-ux/packages/t/build `pwd`/packages/dash/node_modules/@lskjs/t &
./scripts/opt/linkwatch.sh ${PROJECTS}/lskjs-ux/packages/form/build `pwd`/packages/dash/node_modules/@lskjs/form &
echo 'OK'



