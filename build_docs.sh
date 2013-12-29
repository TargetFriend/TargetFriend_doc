mkdir -p de/dist
pandoc de/Handbuch.md -f markdown -t html -s -o de/dist/Handbuch.html
pandoc de/Handbuch.md -s -o de/dist/Handbuch.pdf
