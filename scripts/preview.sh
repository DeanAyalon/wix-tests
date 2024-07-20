#!/bin/bash

npm run build 
URL=$(wix preview --source local | grep -o 'https://wix.to/[^ ]*') 
sleep 2
echo $URL 

os=$(uname)
if [ $os = "Linux" ]; then
    echo $URL | xargs open
elif [ $os = "Darwin" ]; then
    open $URL
else 
    echo Unsupported Operating system
fi
