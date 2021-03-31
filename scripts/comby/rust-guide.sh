#!/usr/bin/env bash

COMBY=`which comby`
CLONE=`mktemp -d`
CONFIG=rust-guide.toml
GUIDES="src/content/learn/how-to-guides"

if [ ! -e dependencies_repos.csv ]
then
  echo "Run this from the website root!"
  exit 1
fi

if [ -z $COMBY ]
then
  echo "Please install comby https://comby.dev"
  exit 1
fi


pushd $CLONE
git clone https://github.com/ockam-network/ockam.git 
popd
rm -rf "$GUIDES/rust" 
cp -r $CLONE/ockam/documentation/guides/rust/ $GUIDES

comby -i -config scripts/comby/$CONFIG -d $GUIDES -f .md

