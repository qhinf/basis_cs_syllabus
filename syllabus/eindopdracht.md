# Eindopdracht

Voor de eindopdracht kies je een (computer)systeem en leg je, aan de hand van de drie lagen van abstractie die we in deze module besproken hebben, uit hoe het systeem werkt. Je beschrijft dus hoe het systeem fysiek in elkaar steekt, je evalueert of de gebruikersinterface voldoet aan de regels van goed ontwerp en maakt een papieren prototype met een aantal verbeteringen, en beschrijft hoe het systeem logisch functioneert (met een automaat!). Deze onderdelen voeg je samen in een [verslag](#het-verslag) (in wat voor vorm dan ook), dat je aan het eind van de module inlevert in je [portfolio](https://app.q-highschool.nl).

Je maakt deze opdracht in tweetallen, die we vormen aan het einde van de eerste fysieke bijeenkomst. Je krijgt tijdens de bijeenkomsten ook de tijd om aan de opdracht te werken, zodat je ook snel vragen kunt stellen als je ergens niet uitkomt of over een bepaalde keuze wilt overleggen. Doe er je voordeel mee!

Het is bij deze opdracht belangrijk dat je je bronnen vermeldt. De bronnen waar je je informatie vandaan hebt gehaald vermeld je in een bijlage bij je verslag. Welke webpagina's heb je gelezen? Welke video's heb je bekeken? Welke personen heb je geïnterviewd? Zorg dat deze allemaal terug te vinden zijn in je bronnenlijst! Dat betekent overigens niet dat je uit deze bronnen mag kopiëren, dat zou plagiaat zijn. Pleeg geen plagiaat! Dus kopieer geen teksten van internet, steel geen plaatjes met copyright, etc. Je mag alleen origineel, eigen werk inleveren.

Wat betreft het inleveren: zorg dat jullie beider namen op de eerste pagina van het verslag vermeld zijn. Iedereen levert het verslag zelf in, dus van elk tweetal krijg ik twee keer hetzelfde verslag (dat is zodat het voor de administratie duidelijk is waar je het cijfer voor hebt gekregen). Inleveren doe je zoals altijd op [app.q-highschool.nl](https://app.q-highschool.nl).

De deadline voor het inleveren is {{ eerste_inlevermoment }}. Als je meer tijd nodig hebt, dan kun je ervoor kiezen van het tweede inlevermoment gebruik te maken. Laat het voor {{ tweede_inlevermoment_melden }} weten aan je docent ({{ docent }}, {{ docent_email }}) als je dat wilt. Het tweede inlevermoment is op {{ tweede_inlevermoment }}.

## Mogelijke systemen

Computers zijn universele machines: ze kunnen in principe alles. Voor deze opdracht is het juist interessanter om te kijken naar specifiekere systemen met beperktere functionaliteit. Deze systemen zijn bijvoorbeeld interessant om uit te zoeken:

- Verkoopautomaat voor koekjes of koffie
- Een (grafische) rekenmachine
- Een Bluetooth speaker of koptelefoon
- Complexere huishoudelijke apparaten met meerdere instellingen, zoals een (combi-)magnetron, wasmachine of inductiekookplaat
- Tablet, telefoon, handheld spelcomputer of e-reader

Eigen ideeën zijn ook van harte welkom! Overleg altijd met je docent welk systeem je gaat onderzoeken.

Kies wel een concreet apparaat, zodat je ook echt kan uitzoeken hoe het werkt! Niet elke magnetron heeft dezelfde gebruikersinterface, dus kies de magnetron die bij jou in de keuken staat. Zo kun je ook daadwerkelijk iets zinnigs zeggen over het systeem en heb je aan het eind niet een verslag vol vage algemeenheden.

Verslagen over "de magnetron" of "een Bluetooth speaker" in het algemeen worden niet beoordeeld. Het gaat erom dat je je analyse-skills laat zien en dat kan alleen als je een concreet systeem kiest dat je (minstens van de buitenkant) in het echt kunt observeren.

## Het verslag

Het verslag bestaat uit zes delen, waarvan je drie delen tijdens de lessen hebt kunnen maken:

1. Algemene beschrijving van het systeem

   Wat is het? Waar is het voor? Plaatjes zijn welkom!

2. Beschrijving van de fysieke onderdelen

   Zie [de beschrijving hieronder](#fysiek).

3. User stories, evaluatie van de gebruikersinterface en een papieren prototype

   Zie [de beschrijving hieronder](#toepassingen).

4. Beschrijving van de logische werking met een automaat

   Zie [de beschrijving hieronder](#logisch).

5. Conclusie

   Hoe hebben de drie niveaus invloed op elkaar? Geef minimaal 2 concrete voorbeelden!

6. Nawoord

   - Per persoon: wat vond je van deze module? Wat heb jij ervan geleerd? Wat zouden we anders moeten doen? (Ongeveer 100 woorden.)
   - Werkverdeling: wie heeft wat gedaan?

De vorm van dit verslag is open: je mag een "standaard" geschreven verslag maken, maar een video of (opgenomen) presentatie is ook prima. Heb je een goed idee voor een stripverhaal om dit in te verwerken? Doen! Een dansvoorstelling? Ik ben benieuwd!

:::{admonition} Saai? 🥱😴
:class: note

Wil je meer uitdaging dan alleen het beschrijven van een systeem? Als uitbreiding mag je ook zelf het systeem simuleren of nabouwen, bijvoorbeeld met een game-engine of in Minecraft. Je hebt daarvoor een goede analyse nodig van de (fysieke) onderdelen van het systeem, van de logische werking en van de gebruikersinterface. Overleg met je docent als je dit zou willen!

:::

### Fysiek

Beschrijf de fysieke opbouw van het systeem dat jullie hebben gekozen voor de eindopdracht. Welke onderdelen zitten er in het systeem? Waar zijn die onderdelen voor? Hoe werken de onderdelen samen? Hoe communiceren de onderdelen met elkaar?

Beschrijf de onderdelen in jullie systeem die van belang zijn voor de belangrijkste functie van het systeem en verdeel de onderdelen daarbij in [sensoren, actuatoren en besturing](fysiek.md#soorten-onderdelen). Voeg afbeeldingen toe en leg ook uit wat de functie van elk onderdeel in het systeem is. Zoek ook de chips die op printplaten in jullie systeem zitten verder uit en leg waar mogelijk de link naar de onderdelen die je in een computer tegenkomt. De meeste moderne systemen zijn (tot op zekere hoogte) computergestuurd, dus onderdelen als een CPU, werkgeheugen en opslag zijn meestal wel ergens te vinden.

Als je het apparaat hebt dat je wilt onderzoeken en je kunt het uit elkaar halen: doe dat vooral. (Maar liever niet als dat apparaat nog in gebruik is...) Gebruik anders andere bronnen: tear-down video's, reparatie video's, reparatiehandleidingen (vooral bij oudere apparaten staat in de handleiding soms uitgebreid beschreven hoe het in elkaar zit!). Vraag mensen die er iets van weten, als je die kunt vinden! En als je niets kan vinden: logisch nadenken, wat is er nodig om dit te laten werken? Zoals altijd: vermeld je bronnen!

:::{list-table}
:header-rows: 1
:stub-columns: 1
:width: 100%

* - 
  - Goed (9)
  - Voldoende (7)
  - Matig (5)
  - Onvoldoende (3)

* - Volledigheid in onderdelen
  - Alle relevante onderdelen genoemd
  - Belangrijkste onderdelen genoemd, enkele kleine onderdelen ontbreken
  - Alleen opvallende onderdelen genoemd, maar genoeg voor een redelijk idee van de werking
  - Slechts een paar onderdelen genoemd

* - Indeling in sensoren, actuatoren, besturing
  - Alle onderdelen zijn correct verdeeld in de drie categorieën

  - De meeste onderdelen zijn correct ingedeeld

  - 
  - De indeling van onderdelen is incorrect

* - Beschrijving van onderdelen
  - Duidelijke en correcte beschrijving van de functie en locatie van ieder onderdeel, inclusief afbeeldingen
  - Van enkele onderdelen is de beschrijving incorrect of te summier
  - 
  - Voor de meeste onderdelen is de beschrijving incorrect of te summier

* - Verbindingen en communicatie
  - Duidelijke beschrijving van communicatie tussen belangrijke onderdelen, inclusief signalen of protocollen
  - Duidelijk beschreven welke belangrijke onderdelen met elkaar communiceren
  - Alleen globale beschrijving van communicatie tussen onderdelen
  - Incorrecte beschrijving van de communicatie tussen onderdelen

:::

### Toepassingen

Bij de [toepassingen](toepassingen.md) hebben we drie dingen besproken: user stories, vuistregels en papieren prototypes. Nu ga je  dit toepassen op jullie eigen systeem:

1. Beschrijf de belangrijkste user stories voor jullie systeem. Wie zijn de gebruikers? Wat willen ze bereiken?
2. Kies één van de user stories en ga na welke vuistregels beter toegepast kunnen worden in jullie systeem, zodat het makkelijker te gebruiken is.
3. Maak een papieren prototype van jullie systeem, waarmee deze user story uitvoerbaar is. Pas twee verbeteringen toe in jullie papieren prototype, op basis van de vuistregels.

:::{list-table}
:header-rows: 1
:stub-columns: 1
:width: 100%

* - 
  - Goed (9)
  - Voldoende (7)
  - Matig (5)
  - Onvoldoende (3)
* - *Een rubric volgt nog*

:::

### Logisch

Teken een automaat die beschrijft hoe jullie systeem werkt, op basis van de user story die je ook bij het vorige onderdeel hebt gebruikt. In welke toestanden kan het systeem zijn? (Denk aan de verschillende tekeningen die je in je papieren prototype hebt!) Welke acties kunnen gebruikers nemen? Welke acties gebeuren automatisch, bijvoorbeeld met een timer? In welke staten zijn die acties geldig? En naar welke staat ga je als zo'n actie is uitgevoerd?

Probeer het systeem [zo precies mogelijk](logisch.md#wees-precies) te beschrijven, maar beperk je tot de onderdelen die nodig zijn om de user story uit te voeren. Als het systeem te groot is, kun je de automaat opdelen in verschillende stukken die verschillende processen of ingewikkelde stappen in een proces beschrijven. In elk onderdeel overlapt dan een begintoestand met een toestand uit een ander deel.

Maak een Visio-tekening aan in de Werkplaats om je diagram te tekenen. Zie de Werkplaatshandleiding (in de Werkplaats) voor tips bij het tekenen van een automaat.

Naast een duidelijke tekening van de automaat geef je ook een tekstuele beschrijving die de lezer door de verschillende delen van de automaat loodst en de processen beschrijft.

:::{list-table}
:header-rows: 1
:stub-columns: 1
:width: 100%

* - 
  - Goed (9)
  - Voldoende (7)
  - Matig (5)
  - Onvoldoende (3)
* - *Een rubric volgt nog*

:::

## Beoordeling

Het verslag wordt beoordeeld aan de hand van vier rubrics: voor de drie onderdelen staat hierboven een rubric bij de uitleg en de vierde rubric hieronder beschrijft een aantal algemene aspecten van het verslag.

Per rubric wordt een cijfer berekend als het gemiddelde van alle onderdelen in die tabel, je eindcijfer is het gemiddelde van die vier rubriccijfers. Als alle punten als goed zijn aangemerkt, wordt een 10 toegekend. Ontbrekende delen leveren een 1 op voor dat onderdeel. Bij grote verschillen in de werkverdeling, kunnen we verschillende cijfers toekennen.

### Algemeen

:::{list-table}
:header-rows: 1
:stub-columns: 1
:width: 100%

* - 
  - Goed (9)
  - Voldoende (7)
  - Matig (5)
  - Onvoldoende (3)
* - Algemene beschrijving
  - De beschrijving geeft een helder beeld van het systeem en waar het voor gebruikt wordt. Er is goed gebruik gemaakt van afbeeldingen om dit te verduidelijken.
  - De beschrijving geeft een helder beeld van het systeem.
  - De beschrijving is een beetje vaag, maar klopt wel.
  - De beschrijving slaat de plank volledig mis: is incorrect of benoemt alleen irrelevante aspecten.
* - Conclusie
  - De conclusie getuigt van goed inzicht in de verbanden tussen de niveaus en wordt ondersteund met minimaal 2 concrete voorbeelden.
  - De conclusie bevat minimaal 2 concrete voorbeelden van de verbanden tussen niveaus, maar de conclusie blijft vaag.
  - Er is een conclusie getrokken op basis van 1 voorbeeld.
  - Er is een conclusie, maar er worden geen voorbeelden gegeven.
* - Nawoord
  - Nawoord is aanwezig en de werkverdeling is helder.
  - 
  - Nawoord is aanwezig, maar de werkverdeling is onduidelijk of ontbreekt.
  - 
* - Verzorging
  - Het verslag zit netjes in elkaar en bestaat uit grammaticaal correcte, lopende zinnen.
  - Het verslag is redelijk netjes.
  - Het verslag is te volgen, maar geeft geen verzorgde indruk.
  - Het verslag is niet te volgen of veel zinnen bevatten spelfouten of grammaticale fouten.
* - Brongebruik en vermelding
  - Relevante bronnen gebruikt (teardowns, handleidingen, datasheets, experts) en alle bronnen correct vermeld
  - Meeste bronnen genoemd, maar niet altijd duidelijk vermeld *of* onbetrouwbare bronnen gebruikt
  - Er is een bronvermelding, maar een of meer bronnen zijn niet duidelijk te herleiden (bijv. "ChatGPT"[^chatgpt], "Google Afbeeldingen", "Wikipedia" of "YouTube")
  - Geen bronnen vermeld

:::

[^chatgpt]: Het is toegestaan om AI chatbots zoals ChatGPT te gebruiken, maar zorg dat in je bronvermelding duidelijk is wat je voor prompt hebt gegeven, wat het resultaat was en hoe je dat gebruikt hebt. Je kunt bijvoorbeeld een link naar het chatgesprek delen of screenshots toevoegen. 

