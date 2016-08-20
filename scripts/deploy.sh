#!/bin/bash

set -e
set -x

[[ -z $(git status --porcelain) ]] && \
  [[ -z $(git cherry -v) ]] && \
  ssh hdo@hdo02.holderdeord.no 'cd /webapps/hdo-rebels && git pull --ff-only origin master && npm install && npm run build'