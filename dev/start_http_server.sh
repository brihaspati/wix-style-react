#!/usr/bin/env sh

# This http server is used for running storybook in offline mode.

VERSION=`python -c 'import sys; print(".".join(map(str, sys.version_info[:3])))' | awk -F . '{print $1}'`

if [ $VERSION -eq "3" ]; then
  python -m http.server 8080
else
  python -m SimpleHTTPServer 8080
fi