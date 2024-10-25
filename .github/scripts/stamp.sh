#!/bin/sh

# Context - repository root dir
cd "$(dirname "$0")/../.."

# Get timestamp and branch
timestamp=$(date)
commit=$(git rev-parse HEAD)

# Update release.js
echo "export const timestamp = '$timestamp', commit = '$commit'" > src/public/release.js