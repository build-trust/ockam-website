#!/bin/bash
#
# Checkout depended repositories so gatsby has all necessary code to produce
# the whole Ockam page.

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
  REPO_URL_WTOKEN=$(echo "$ORGANIZATION" | sed "s#//github#//${TOKEN}@github#")/$REPO_NAME.git

  _message "Cloning $ORGANIZATION/$REPO_NAME.."
  rm -rf /tmp/* # clean before to prevent space limit
  git clone -n $REPO_URL_WTOKEN /tmp/$REPO_NAME
  mv /tmp/$REPO_NAME$SRC_DIR $REPO_PATH
  rm -rf /tmp/* # .. and clean after so we don't left anything after ourselfs
  echo
  cd $REPO_PATH;
  _message "Checking out $COMMIT.."
  git checkout -q $COMMIT
  cd - > /dev/null
done < "$CONFIG"
