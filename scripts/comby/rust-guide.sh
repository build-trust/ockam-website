#!/usr/bin/env bash

COMBY=`which comby`
CLONE=`mktemp -d`
CONFIG=rust-guide.toml
GUIDE="../../src/content/learn/how-to-guides/rust/"

if [ -z $COMBY ]
then
  echo "Please install comby https://comby.dev"
  exit 1
fi


pushd $CLONE
git clone https://github.com/ockam-network/ockam.git 
popd
rm -rf $GUIDE 
cp -r $CLONE/ockam/documentation/guides/rust/ $GUIDE
rm -rf $CLONE

comby -i -config $CONFIG -d $GUIDE -f .md

