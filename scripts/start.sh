#!/bin/bash

SCRIPT_PATH=$(cd "$(dirname "$0")" && pwd)

if [[ $* == *--dev* ]]
  then
    forever -w --sourceDir $SCRIPT_PATH/.. start app.js
  else
    forever -w --sourceDir $SCRIPT_PATH/.. start app.js --prod
fi
