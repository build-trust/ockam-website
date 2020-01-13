#!/bin/bash
#
# Checkout depended repositories so gatsby has all necessary code to produce
# the whole Ockam page.

# exit when any command fails
set -ex

export TOKEN=$1

function _message() {
  echo "$(basename $0): $@"
}

CONFIG="./dependencies_repos.csv"
if test -f "$CONFIG"; then
  _message "Config file: OK"; echo
else
  >&2 _message "Config file: Missing"
  exit 100
fi

while IFS=';' read -r ORGANIZATION REPO_NAME COMMIT SRC_DIR URL_PATH
do
  REPO_PATH=src/content/$URL_PATH
  _message "Cloning $ORGANIZATION/$REPO_NAME.."
  git clone -n https://$TOKEN@github.com/$ORGANIZATION/$REPO_NAME /tmp/$REPO_NAME
  mkdir -p src/content/ # make sure subfolder exists
  mv /tmp/$REPO_NAME$SRC_DIR $REPO_PATH
  rm -rf /tmp/$REPO_NAME # clean it
  echo
  cd $REPO_PATH;
  _message "Checking out $COMMIT.."
  git checkout -q $COMMIT
  cd - > /dev/null
done < "$CONFIG"
