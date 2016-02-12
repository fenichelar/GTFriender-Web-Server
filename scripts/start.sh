#!/bin/bash

SCRIPT_PATH=$(cd "$(dirname "$0")" && pwd)

forever stopall

if [[ $* == *--log* ]] || [[ $* == *-l* ]]; then
  forever -w --sourceDir $SCRIPT_PATH/.. start app.js
  forever logs app.js -f
elif [[ $* == *--prod* ]] || [[ $* == *-p* ]]; then
  forever -w --sourceDir $SCRIPT_PATH/.. start app.js --prod
else
  forever -w --sourceDir $SCRIPT_PATH/.. start app.js
fi
