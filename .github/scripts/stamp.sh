#!/bin/sh

# Context - repository root dir
cd "$(dirname "$0")/../.."

# Get GitHub Actions run ID
if [ -z $RUN ]; then 
    echo \$RUN not defined, is this not running within a GitHub Action workflow? 
    exit 1
fi
# Get timestamp, commit, and UI version
timestamp=$(date)
commit=$(git rev-parse HEAD)
ui=$(jq .uiVersion wix.config.json)

# Update release.js
file=src/public/release.js
head -n -1 $file > tmp.js       # Remove last row
mv tmp.js $file
echo "export const timestamp = '$timestamp', commit = '$commit', run = '$RUN', ui = '$ui'" >> $file

# Print release.js
cat $file