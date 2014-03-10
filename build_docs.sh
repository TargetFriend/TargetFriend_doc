mkdir -p de/dist
echo "German"
echo "- Handbuch"
pandoc de/Handbuch.md -f markdown -t html -s -o de/dist/Handbuch.html
pandoc de/Handbuch.md -s -o de/dist/Handbuch.pdf
echo "- Alternativen"
pandoc de/Alternativen.md -f markdown -t html -s -o de/dist/Alternativen.html
pandoc de/Alternativen.md -s -o de/dist/Alternativen.pdf
echo "- FAQ"
pandoc de/FAQ.md -f markdown -t html -s -o de/dist/FAQ.html
pandoc de/FAQ.md -s -o de/dist/FAQ.pdf
echo "- Auflagen"
pandoc de/Auflagen.md -f markdown -t html -s -o de/dist/Auflagen.html
pandoc de/Auflagen.md -s -o de/dist/Auflagen.pdf
echo "finished"
