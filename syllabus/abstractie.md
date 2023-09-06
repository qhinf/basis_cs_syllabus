# Lagen van abstractie

Abstractie is een van de basisprincipes van de informatica. Wat is het? Dit is wat Wikipedia erover zegt:

> Abstractie is het (...) weglaten van alle **niet-essentiële informatie** en secundaire aspecten en vervolgens **generaliseren** om zo de meer **fundamentele structuren** zichtbaar te maken.
> -- [Wikipedia](https://nl.wikipedia.org/w/index.php?title=Abstractie&oldid=60580100)

Door alle niet-relevante zaken we te laten, kunnen we tot de essentie van iets komen. Abstracte kunstenaars proberen de essentie van wat ze afbeelden te vatten en laten daarbij details die er -- wat hen betreft -- niet toe doen weg. Maar wat essentieel is, hangt er maar net van af wat je wilt weten. Welke details onbelangrijk zijn, hangt van de situatie af.

Een ander vakgebied waar je abstractie al vaker tegen bent gekomen, is in de natuurkunde. Bij alle vragen over vallende ballen gebruik je over het algemeen de formules die Newton heeft gevonden, maar dat is slechts een beperkt model van de zwaartekracht: alle invloed van relativiteit is daarin niet meegenomen. In de meeste gevallen is dat de juiste abstractie, want die invloed is verwaarloosbaar klein. Maar als je in een ruimteschip zit dat zich met 99.9% van de lichtsnelheid door de sterren beweegt, zul je er wel degelijk rekening mee moeten houden. Ook hier geldt dus: welke details je nodig hebt, verschilt per situatie.

Terug naar informatica: het komt in ons vakgebied vaak voor dat we onbelangrijke details willen weglaten. Als je bijvoorbeeld een website maakt, wil je er niet over nadenken hoe elk type computer de berekeningen uitvoert die de elementen op jouw website op de juiste plek zetten. Je gebruikt een abstract model van de computer en een browser zorgt dat jouw websiteontwerp vertaald wordt naar die concrete berekeningen. Voor de programmeurs die de browser maken werkt die abstractie dus niet: zij moeten juist met de details van de computer rekening houden.

Als jij een website bezoekt, moet de code van die website over het internet verstuurd worden. Ook hier zien we verschillende abstracties: er is bijvoorbeeld het IP-protocol (van de IP-adressen) dat zich alleen bezig houdt met het versturen van berichtjes door een heel netwerk van routers en computers zodat het uiteindelijk op de juiste plek uitkomt. Hoe de berichten tussen computers en routers worden verstuurd maakt daarbij niet uit: dat kan met kabels, met radiosignalen of met [postduiven](https://datatracker.ietf.org/doc/html/rfc1149). De fysieke verbinding is in de abstractie weggelaten.

Aan de andere kant maakt het voor de fysieke verbinding niet uit wat voor informatie daar heen en weer gestuurd wordt. Dat mogen IP-berichten zijn, maar je mag ook je eigen protocol bedenken. De fysieke verbinding houdt zich alleen bezig met het omzetten van informatie naar stroompjes op een kabel of radiosignalen. In de abstractie laten we weg wat die informatie verder betekent.

Over het algemeen zien we in computersystemen drie lagen terug:

- **Fysiek**: de hardware. Bijvoorbeeld de fysieke onderdelen van een computer of de kabels in een netwerk.
- **Logisch**: de logische beschrijving van hoe het systeem werkt, zonder dat je naar de specifieke hardware kijkt of hoe het systeem gebruikt wordt. Bijvoorbeeld het wiskundig idee van een computer: het ding kan berekeningen uitvoeren, maar het kan ons niet schelen hoe die dat doet of welke dingen je wilt uitrekenen.
- **Toepassingen**: wat je ermee kan en hoe je het gebruikt. Hier kijken we dus naar *welke* berekeningen je wilt uitvoeren, of *welke* informatie je over het netwerk verstuurt.

Deze drie lagen zijn op zichzelf ook een abstractie. We laten allerlei details over hoe computers werken weg en vinden dan deze fundamentele structuur. Dit model is nuttig als je wilt begrijpen hoe de systemen werken, want we hebben nu drie brillen die we kunnen gebruiken om een systeem uit te pluizen: door één bril kijken we naar het fysieke systeem en alle onderdelen, door een ander zien we wat het systeem kan doen en welke functies er zijn, en door nog een ander zien we hoe gebruikers het systeem kunnen gebruiken voor iets nuttigs. Met die drie perspectieven krijg je een vollediger beeld van het systeem, dan wanneer je maar met een van die brillen zou kijken.

:::{exercise}
Ga in je huis op zoek naar twee voorwerpen. Het ene voorwerp is daarbij een abstracte weergave van het andere voorwerp. 

1. Welke details zijn weggelaten in de abstractie?
2. Wat is volgens het abstracte voorwerp de essentie van dit ding?

Zorg dat je beide voorwerpen bij de hand hebt tijdens de eerste (online) les.
:::
