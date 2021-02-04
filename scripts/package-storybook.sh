#!/usr/bin/env bash
PACKAGE=${PWD##*/} 
PACKAGE=${PACKAGE} start-storybook -p 9001 -c ../../.storybook