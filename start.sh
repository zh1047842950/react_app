  #!bin/bash
  now=`date '+%Y-%m-%d %H:%M:%S'`
  echo "Hello react_app !"
  cd /home/react_app
  rm -rf ./share_file/*
  cp -r ./dist/* ./share_file
  echo "Update react_app success!"$now
