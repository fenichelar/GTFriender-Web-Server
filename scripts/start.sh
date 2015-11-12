#!/bin/bash

SCRIPT_PATH=$(cd "$(dirname "$0")" && pwd)

if [[ $* == *--log* ]]
  then
    forever -w --sourceDir $SCRIPT_PATH/.. start app.js
    forever logs 0 -f
  else
    forever -w --sourceDir $SCRIPT_PATH/.. start app.js
fi
