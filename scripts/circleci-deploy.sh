#!/bin/bash

git config --global user.email "tse@ucsd.edu"
git config --global user.name "CircleCI Bot"
git pull
mv public ..
git checkout master
rm -rf *
mv ../public/* .
rm -rf ../public
git add .
git commit -m "[ci skip] Deploy build files to master branch"
git push
sshpass -e ssh tse@acsweb.ucsd.edu 'sh refresh.sh'
