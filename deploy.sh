#!/bin/bash

npm run build
git branch -D heroku
git checkout --orphan heroku
git add -A
git add --force __sapper__/build #static/server.css
git commit -m update
git push --force heroku heroku:master
git checkout master
