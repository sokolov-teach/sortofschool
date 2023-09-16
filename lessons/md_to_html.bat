for %%i in (*.md) do (
    pandoc ^
        "%%i" ^
        --template=template.html ^
        --number-sections ^
        --section-divs ^
        --lua-filter=shifted-numbered-headings.lua ^
        --toc ^
        --mathjax ^
        -o "%%~ni.html"
)