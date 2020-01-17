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
apt-get install sshpass
 sshpass -p $ACSWEB_PASSWORD ssh tse@acsweb.ucsd.edu
./refresh.sh
exit
history -r
