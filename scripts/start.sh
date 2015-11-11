#!/bin/bash

if [[ $* == *--dev* ]]
  then
    forever -w start app.js
  else
    forever -w start app.js --prod
fi
