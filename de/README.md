#TargetFriend - Dokumentation#

Dokumentationverzeichnis für TargetFriend.

##Screenshots erstellen##
Screenshots von *TargetFriend* werden mithilfe von PhantomJS gerendert. Wenn du PhantomJS installiert hast, führe einfach folgenden Befehl aus:

`phantomjs build_screenshots.js 0`

Anstelle der `0` kannst du auch eine `1` oder `2` verwenden, wobei die Zahlen für unterschiedliche Bildschirmgrößen stehen:

| Nummer | Bedeutung          |
|--------|--------------------|
|   0    | Kleines Smartphone |
|   1    | Smartphone         |
|   2    | Tablet             |


##Markdown zu PDF##
Die Handbuch.md Datei kann in eine PDF Datei konvertiert werden. Dazu wird [Pandoc](http://johnmacfarlane.net/pandoc/) verwendet.  
Installiere zurerst Pandoc, um fortzufahren. Wie du dies machst, erfährst du auf der Website von Pandoc.  
Außerdem muss LaTeX installiert sein.


##Icons erstellen##
In diesem GitHub Verzeichnis werden die Icons für *TargetFriend* in allen Größen erzeugt. Dazu muss dieser Befehl in das Terminal eingegeben werden:

`phantomjs build_icons.js`

Danach werden die Icons im Verzeichnis `icons` erstellt. Das Icon, welches zum Erstellen der anderen verwendet wird ist `icons/icon.svg`

*Bitte beachte, dass du dich im Hauptverzeichnis/Root dieses Verzeichnisses befinden musst, damit die Terminal-Befehle funktionieren.*

*Lizenz: MIT - siehe LICENSE*
