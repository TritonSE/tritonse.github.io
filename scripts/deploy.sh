#!/bin/bash

mv public ..
git checkout master
rm -rf *
mv ../public/* .
rm -rf ../public
git add .
git commit -m "Deploy build files to master branch"
git push --force
