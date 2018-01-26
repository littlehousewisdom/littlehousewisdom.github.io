#!/bin/sh

TARGET=Wisdoms.js

echo "export const Wisdoms = {
    items: [" > $TARGET

while read LINE; do
  if [ -n "$LINE" ]; then
    echo "{text: \"$LINE\"}," >> $TARGET
  fi
done < wisdoms.txt

echo "]
}" >> $TARGET