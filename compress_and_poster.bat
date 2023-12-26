mkdir compressed 2>nul

for %%a in (*.mp4) do (
    ffmpeg -i "%%a" -r 24 -c:v libx264 -preset slow -crf 30 -movflags +faststart -vf scale=1280:720 -c:a copy -an "compressed\%%~na.mp4"
    ffmpeg -i "%%a" -ss 00:00:01 -vframes 1 -vf scale=960:540 "compressed\%%~na.png"
)

for %%b in (*.png) do (
    ffmpeg -i "%%b" -vf scale=1280:-1 -compression_level 100 "compressed\%%~nb.png"
)

pause

