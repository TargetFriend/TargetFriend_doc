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

##Lizenz##
###Dokumentation & Grafiken##
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="http://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Namensnennung 4.0 International Lizenz</a>.

###Build Scripts###

Build scripts sind unter der MIT-Lizenz lizensiert:

    The MIT License (MIT)

    Copyright (c) 2014 Andre Meyering

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

