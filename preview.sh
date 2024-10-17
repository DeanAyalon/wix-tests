#!/bin/sh

# Context
cd "$(dirname "$0")"

# Preview source
SRC=local
[ "$1" = "-r" ] && SRC=remote

# Get URL from preview
URL=$(wix preview --source $SRC | grep -o 'https://wix.to/[^ ]*')

# Open URL in browser
echo $URL | xargs open