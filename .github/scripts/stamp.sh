#!/bin/sh

# Context - repository root dir
cd "$(dirname "$0")/../.."

# Get timestamp and branch
timestamp=$(date)
commit=$(git rev-parse HEAD)
[ -z $RUN ] && exit 1

# Update release.js
file=src/public/release.js
head -n -1 $file > $file
echo "export const timestamp = '$timestamp', commit = '$commit', run = '$RUN'" >> $file

# Print release.js
cat $file