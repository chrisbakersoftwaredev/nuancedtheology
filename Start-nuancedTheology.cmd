@echo off
cd /d "%~dp0app"
echo Opening nuancedTheology at http://127.0.0.1:4200/
echo Keep this window open while using the site. Press Ctrl+C to stop it.
call npm start
pause
