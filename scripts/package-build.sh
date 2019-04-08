#!/bin/sh
mkdir -p ${DIST:-build} && \
cp README.md ${DIST:-build}/
node ../../node_modules/@babel/cli/bin/babel ${SRC:-src} --out-dir ${DIST:-build} --source-maps both --ignore .test.jsx? ${BUILD_PARAMS}
