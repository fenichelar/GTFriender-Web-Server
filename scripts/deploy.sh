#!/bin/bash

SCRIPT_PATH=$(cd "$(dirname "$0")" && pwd)
REPO_PATH=$(cd $SCRIPT_PATH/.. && pwd)

echo "Content-Type: text/html"
echo ""

echo "<html>"

echo "<head>"
echo "<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>"
echo "<title>Deploy Status</title>"
echo "</head>"

echo "<body>"

echo "<h1>Deploy Status</h1>"

echo "<div>"
echo "<h3>Stopping Server...</h3>"
echo "<p>"
cd $REPO_PATH && sudo -u travis forever stopall
echo "</p>"
echo "<b>Done.</b>"
echo "</div>"

echo "<br>"

echo "<div>"
echo "<h3>Pulling Changes...</h3>"
echo "<p>"
cd $REPO_PATH && sudo -u travis git checkout .
cd $REPO_PATH && sudo -u travis git pull
echo "</p>"
echo "<b>Done.</b>"
echo "</div>"

echo "<br>"

echo "<div>"
echo "<h3>Updating Packages...</h3>"
echo "<p>"
cd $REPO_PATH && sudo -u travis npm update
echo "</p>"
echo "<b>Done.</b>"
echo "</div>"

echo "<br>"

echo "<div>"
echo "<h3>Starting Server...</h3>"
echo "<p>"
cd $REPO_PATH && sudo -u travis forever -w start app.js --prod
echo "</p>"
echo "<b>Done.</b>"
echo "</div>"

echo "</body>"

echo "</html>"

exit 0
