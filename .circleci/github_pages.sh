#!/bin/bash

git config --global user.email "tse@ucsd.edu"
git config --global user.name "TSE CircleCI Bot"
git pull
mv public ..
git checkout gh-pages
rm -rf *
mv ../public/* .
rm -rf ../public
git add .
git commit -m "[ci skip] Deploy build files to master branch"
git push
