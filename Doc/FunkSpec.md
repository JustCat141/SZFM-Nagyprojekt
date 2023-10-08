<h1>Questionnaire - Funkcionális specifikáció</h1>

<h3> 1. Áttekintés:</h3> 

<h3> 2. Jelenlegi helyzet:</h3> 
A megrendelő jelenleg egy hagyományos papíralapú kérdőívet alkalmaz, ami már nem hatékony a felgyorsult világban. 
Ez kézi rendezést és kiértékelést igényel, ami jelentős időt és munkát emészt fel, akár 10-15 percet is képes elvenni egy-egy kérdőív
esetén. 
Ebben a modern korszakban egyetlen vállalat sem engedhet meg magának ilyen időveszteséget, és a megrendelő is rájött erre.
Ez a modell több okból is problémás és nem fenntartható hosszú távon,
előnye nincs sok, de hátránya annál több. 
Itt az ideje hogy egy digitális megoldással kiváltsuk ezt az elavult
kérdőívezési módszert. 
Ma már a legtöbb folyamat online zajlik, az irodákban nem papír, hanem digitális eszközök és számítógépek dominálnak.
Ennek következtében a megrendelő úgy döntött, hogy lép egyet előre a digitalizáció útján, és olyan rendszert szeretne, amely lehetővé teszi könnyedén felmérni különböző témákban emberek tudását. 
Ezt automatikus eredménykiértékeléssel és reszponzív designnal kívánják megvalósítani.
Jelenleg több megoldás is létezik a kérdőív készítésre. 
A talán legismertebb közülük a Google Forms, ahol létrehozhatunk, megoszthatunk és ellenőrizhetünk saját kérdőíveket. 
Viszont itt a tervezési lehetőségek meglehetősen szűkösek és korlátozottak, emellett a kitöltéshez Gmail fiókra van szükség.
A mi fejlesztésünk a Questionnaire nevet viseli, és célja egy felhasználóbarát, dinamikus webes kérdőívkezelő program készítése.
Ez lehetővé teszi a felhasználók számára különböző típusú és témájú kérdőívek létrehozását, kitöltését és az eredmények elemzését. 
A program célja, hogy különböző területeken (például oktatás, piackutatás, felmérések) dolgozó személyek is könnyedén használhassák. 
Az oktatásban különösen hasznos lehet, mivel segítségével a diákok tanulása és fejlődése egy magasabb szintre emelkedhet, 
így a tanórák is érdekesebbé válnak. 
Mindenki a saját okoseszközén tudja kitölteni a kérdőíveket.
A programnak meg kell felelnie a mai kor elvárásainak, és tökéletesen kell működnie számítógépen és okostelefonon egyaránt. 
Emellett lehetőséget kell biztosítania a felhasználók számára, hogy tippeket és jóslatokat tegyenek, például 
"Ki fogja megnyerni a következő futball világbajnokságot?"
A kérdőívek kitöltése során a cél az információk gyűjtése, melyeket egy adatbázisban fogunk tárolni a későbbi felhasználás céljából.

<h3> 3. Követelménylista</h3> 

<h3> 4. Jelenlegi üzleti folyamatok modellje:</h3>

# Igényelt üzleti folyamatok modellje
![Igényelt üzleti folyamatok modellje](./Doc/images/igenyelt_diagram.png)

# Fogalomszótár
### Google forms: 
A Google Forms egy felmérés-adminisztrációs szoftver, amely a Google által kínált ingyenes, webalapú Google Docs Editors programcsomag része. A szolgáltatás magában foglalja a Google Dokumentumokat, a Google Táblázatokat, a Google Diákat, a Google Rajzokat, a Google Webhelyeket és a Google Keepet is.
### HTML:
A HTML egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C támogatásával. Az aktuális változata az 5, mely az SGML általános jelölőnyelv egy konkrét alkalmazása.
### CSS:
A CSS a számítástechnikában egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le. Ezenkívül használható bármilyen XML alapú dokumentum stílusának leírására is, mint például az SVG, XUL stb.
### Javascript:
A JavaScript programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak. Ebből fejlődött ki a TypeScript, ami a JavaScript típusos változatának tekinthető.
### React:
A React egy ingyenes és nyílt forráskódú előtérben használható JavaScript-könyvtár, amely összetevőkön alapuló felhasználói felületek létrehozására szolgál. A Meta és az egyes fejlesztőkből és cégekből álló közösség tartja karban.
### Python:
A Python egy általános célú, nagyon magas szintű programozási nyelv, melyet Guido van Rossum holland programozó kezdett el fejleszteni 1989 végén, majd hozott nyilvánosságra 1991-ben. A nyelv tervezési filozófiája az olvashatóságot és a programozói munka megkönnyítését helyezi előtérbe a futási sebességgel szemben.
### Flask:
 Flask egy Python nyelven írt mikro webes keretrendszer. Mikrokeretrendszernek minősül, mivel nem igényel különleges eszközöket vagy könyvtárakat.
### Frontend:
A frontend a programoknak, weboldalaknak az a része, amelyik a felhasználóval közvetlenül kapcsolatban van. Feladata az adatok megjelenése, befogadása a felhasználó (vagy ritkábban egy másik rendszer) felől.
### Backend:
A backend a programoknak, weboldalaknak a hátsó, a felhasználó elől rejtett, a tényleges számításokat végző része. Feladata a front‑end (a felhasználóval kapcsolatban lévő rész) felől érkező adatok feldolgozása, és az eredményeknek a front‑end felé történő visszajuttatása.
### Adatbázis:
A számítástechnikában az adatbázis elektronikusan tárolt és elérhető adatok szervezett gyűjteménye. A kis adatbázisok fájlrendszerben tárolhatók, míg a nagy adatbázisok clusterekben vagy felhőalapú tárolókban vannak elhelyezve. Az adatbázisok tervezése kiterjed a formális technikákra és a gyakorlati megfontolásokra, beleértve az adatmodellezést, a hatékony adatreprezentációt és tárolást, a lekérdezési nyelveket, az érzékeny adatok biztonságát és védelmét.
### Admin:
Az "admin" rövidítése az "adminisztrátor" szónak. Az adminisztrátor egy olyan személy vagy felhasználó, aki speciális jogosultságokkal rendelkezik egy rendszer, weboldal, vagy alkalmazás felett.
### Kliens:
A "kliens" rövidítése a "kliensszámítógépnek" vagy "kliensprogramnak". Egy kliens egy olyan számítógép vagy alkalmazás, amely kapcsolódik egy hálózathoz vagy szolgáltatáshoz, és kéréseket küld egy szervernek adatainak lekérdezéséhez, szolgáltatások igénybevételéhez vagy kommunikációhoz. A kliens aktív szerepet játszik a kapcsolatban, és a szerver az általa küldött kérésekre válaszol.
### Reszponzitivás:
A "reszponzivitás" azt jelenti, hogy egy weboldal vagy alkalmazás képes alkalmazkodni és megjeleníteni magát különböző méretű és típusú eszközökön, például számítógépeken, táblagépeken és mobiltelefonokon. 
### Felhasználói felület/ UI: 
Az "UI" rövidítése az "User Interface" vagyis a "felhasználói felület" szónak. A felhasználói felület a számítógépes rendszer vagy alkalmazás olyan része, amely lehetővé teszi a felhasználók számára az interakciót és kommunikációt a szoftverrel. 