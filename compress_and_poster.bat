mkdir compressed 2>nul

for %%a in (*.mp4) do (
    ffmpeg -i "%%a" -r 24 -c:v libx264 -preset slow -crf 28 -movflags +faststart -vf scale=1280:720 -c:a copy -an "compressed\%%~na.mp4"
    ffmpeg -i "%%a" -ss 00:00:01 -vframes 1 -vf scale=1280:720 "compressed\%%~na_temp.png"
)

for %%b in (*.png) do (
    magick "%%b" -resize "1280x720>" -strip -quality 95 -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 "compressed\%%~nb.png"
)

for %%c in (*_temp.png) do (
    move "compressed\%%c" "compressed\%%~nc.png"
)

pause
