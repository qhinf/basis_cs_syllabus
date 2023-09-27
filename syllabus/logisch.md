# De logische laag

*Werk in uitvoering: deze syllabus is nog in ontwikkeling.*

- Software
- Automaten
- De diepte in: Turing machines en het halting problem

:::{exercise} De mysterieuze munt
Vrienden hebben op het internet een spelletje gevonden waar een robot een munt opgooit en de speler moet proberen te raden of het kop of munt gaat worden. In eerste instantie leek het heel eenvoudig, de kans om te winnen was 50/50 — althans dat dachten ze. Na een tijdje begonnen ze argwanend te worden. Er leek wel een patroon te zitten in de worpen van de munt.

Was het spel eerlijk? Helemaal niet! Ze besloten het te onderzoeken. Marie hield vanaf nu de resultaten bij en dit is wat ze vond: (k = kop, m = munt)

```
k k m k k m k k k m m k k k k m m k m m m k k k
k k m k k k m m m k k k m m m k k k k k k m m k
m m m m m k m m k m m m k k k m m k k k m k k k
k k k k k k m m k k k m m m m k k k k k m m m m
m m m
```

Kun jij een voorspelbaar patroon vinden dat je meer dan 50% kans geeft voor de meeste worpen?

Er is een eenvoudige automaat die de uitkomsten van de opeenvolgende worpen beschrijft. Kun je die vinden? (Hint: er zijn maar 4 toestanden!)

*Bron: [CS Unplugged](http://www.csunplugged.nl/11-eindige-automaat/)*
:::

## Eindopdracht

Teken een automaat die beschrijft hoe jullie systeem werkt. In welke staten kan het systeem zijn? Welke acties kunnen gebruikers nemen? Welke acties gebeuren automatisch, bijvoorbeeld met een timer? In welke staten zijn die acties geldig? En naar welke staat ga je als zo'n actie is uitgevoerd?

Probeer het systeem zo precies mogelijk te beschrijven. Dat is belangrijker dan dat je het hele systeem volledig uitwerkt: beperk je eerst tot de basislaag (bijvoorbeeld de verschillende menu's en functies van je rekenmachine of combimagnetron). Zorg ervoor dat er in jullie automaat geen acties mogelijk zijn die eigenlijk niet kunnen. Als de koffieautomaat alleen voor €2 koffie geeft, maak dan niet een automaat waar je je eigen prijs kunt bepalen.

![Twee automaten die een koffiemachine tonen. De eerste heeft 4 staten: Start, €1, €2 en Koffie maken. Er zijn transities van Start naar €1 (€1 inworp), van €1 naar €2 (€1 inworp), van €2 naar Koffie maken (Klik op koffie) en van Koffie maken terug naar Start (Koffie klaar). De tweede automaat heeft slechts twee staten: Start en Koffie maken. Er zijn transities van Start naar Start met als label €1 inworp, Start naar Koffie maken (Klik op koffie) en van Koffie maken naar Start (Koffie klaar).](assets/koffieautomaten.drawio.png)

Als je de basis hebt staan, kun je die verder uitbreiden door meer onderdelen van het systeem in detail te beschrijven.

Maak gebruik van [draw.io](https://app.diagrams.net) om een leesbare tekening van de automaat te maken. Als je het bestand opslaat in Google Drive, is het via de knop *Delen* rechtsbovenin ook mogelijk om samen aan dit bestand te werken.

Naast een duidelijke tekening van de automaat geef je ook een tekstuele beschrijving die de lezer door de verschillende delen van de automaat loodst en de processen beschrijft. Leg uit welke keuzes je hebt gemaakt bij het maken van de automaat, welke aspecten je hebt versimpeld en welke delen je hebt weggelaten.

