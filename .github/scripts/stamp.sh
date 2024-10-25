#!/bin/sh

# Context - repository root dir
cd "$(dirname "$0")/../.."

# Get timestamp and branch
timestamp=$(date)
commit=$(git rev-parse HEAD)
[ -z $RUN ] && exit 1

# Update release.js
echo "export const timestamp = '$timestamp', commit = '$commit', run = '$RUN'" > src/public/release.js