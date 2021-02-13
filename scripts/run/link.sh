#!/usr/bin/env bash

declare -a PROJECTS="${HOME}/projects"

lsk link ${PROJECTS}/lskjs-ux/packages/t/build `pwd`/packages/dash/node_modules/@lskjs/t &
lsk link ${PROJECTS}/lskjs-ux/packages/form/build `pwd`/packages/dash/node_modules/@lskjs/form &
lsk link ${PROJECTS}/lskjs-ux/packages/navbar/build `pwd`/packages/dash/node_modules/@lskjs/navbar &
lsk link ${PROJECTS}/lskjs-ux/packages/ui2/build `pwd`/packages/dash/node_modules/@lskjs/ui2 &
echo 'OK'



