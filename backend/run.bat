@echo off

:: Get the current directory
set "currentFolder=%CD%"

:: Set the path to server.js
set "serverPath=%currentFolder%\api\src\server.js"

:: Change directory to the location of server.js
cd /d "%currentFolder%\api\src"

:: Start the Node.js server
node "server.js"