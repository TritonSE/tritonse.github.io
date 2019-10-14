#!/bin/bash

git config --global user.email "tse@ucsd.edu"
git config --global user.name "TSE CircleCI Bot"
mv public ..
git checkout master
rm -rf *
mv ../public/* .
rm -rf ../public
git add .
git commit -m "Deploy build files to master branch"
git push
