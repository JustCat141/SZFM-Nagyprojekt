<h1>Questionnaire - Követelményspecifikáció</h1>

<h3> 1. Jelenlegi helyzet:</h3> 
A megrendelő jelenleg is egy papíralapú kérdőívet használ, amely a mai
felgyorsult világban már nem megengedhető. 
Ezek rendezése, manuális kiértékelése jelentős emberi munkát és időt
igényel, ez akár kérdőívenként 10-15 perc is lehet.
Ilyen időkiesést a mai világban egyetlen cég sem engedhet meg magának,
erre jött rá a megrendelő is.
Napjainkban már a folyamatok jelentős része online zajlik, az irodákban nem
papír, hanem sokkal inkább digitális eszközök, számítógépek vannak.
Ezért is jutott a megrendelő arra a következtetésre, hogy szeretne a
digitalizáció útjára lépni, és szeretne egy olyan rendszert 
amely segítségével egyszerűen felmérést tud végezni egy adott
témakörben, automatikus eredmény kiértékeléssel és reszponzív dizájnnal.
Jelenleg több rendszer is létezik erre a célra, a legismertebb talán a
Google Forms, ahol saját részre tudunk kérdőíveket készíteni,
megosztani, ellenőrizni, azonban itt a tervező felhasználó lehetőségei
igen szűkösek, korlátozottak és a kitöltéséhez Gmail fiókra van szükség.
A mi projektünk a Questionnaire névre hallgat és célja egy felhasználóbarát,
dinamikus webes kérdőívkezelő program létrehozása, mely 
lehetővé teszi a felhasználók
számára különböző típusú és témájú kérdőívek létrehozását, kitöltését,
valamint az eredmények elemzését. 
A programot olyan személyek számára is tervezzük, akik különböző
területeken (pl. oktatás, piackutatás, felmérések) szeretnék
felhasználni.
Nagyon hasznos lehet például az oktatásban is, mert ezen keresztül a 
diákok oktatása és fejlődése egy komolyabb szintet léphet és
izgalmasabbá válhatnak a tanórák, mindenki a saját okoseszközén tudja
kitölteni.
Megfelelve a mai kor követelményeinek, a program számítógépen és
okostelefonon is megfelelő módon kell működjön.
Ezen kívül a programnak képesnek kell lennie a felhasználóktól tippeket/
jóslatokat kérni és fogadni, például "Ki fogja megnyeri a következő football világbajnokságot?"
A kérdőívek kitöltésénnél célunk az információk begyűjtése, ezeket egy adatbázis segítségével fogjuk eltárolni, 
a későbbi felhasználás érdekében.

<h2>Megrendelői igényspecifikáció</h2>

<h3>2. Vágyálom rendszer: </h3>
Biztosítani kell egy reszponzív webes alkalmazást, amely elsősorban a felhasználók számára kényelmes és egyszerű használatot nyújt. Az alkalmazásnak lehetőséget kell biztosítania a felhasználók számára a regisztrációra, bejelentkezésre és a jelszavak változtatására. Ezenkívül a rendszernek lehetőséget kell nyújtania felmérések létrehozására egy meghatározott témában, majd ezen felmérések automatikus kiértékelésére is szükség van. Az eredményekből származó statisztikák létrehozása is elengedhetetlen. A designnak az ügyfél vállalati színeihez kell igazodnia, emellett a felhasználói felületnek könnyen használhatónak és áttekinthetőnek kell lennie mindenki számára.

Ez a projekt komoly és sokrétű, és nagy figyelmet és gondos tervezést igényel a különböző komponensek közötti szoros integráció érdekében. Az alkalmazásnak elsődlegesen a felhasználói élményre kell összpontosítania, különösen a regisztráció, bejelentkezés és felmérések készítése során. A reszponzív design elengedhetetlen ahhoz, hogy az alkalmazás bármilyen eszközön tökéletesen működjön, és az ügyfél vállalati színeinek alkalmazása egy egységes és meghatározó megjelenést biztosít az alkalmazásnak. Az áttekinthető és könnyen navigálható felhasználói felület biztosítja, hogy a felhasználók kényelmesen és hatékonyan használhassák az alkalmazást.

<h3> 3. Jelenlegi folyamatok: </h3>
Jelenleg külön egy erre a célra felvett ember végzi a feladatot, 
valamint időszakonként diákok szokták diákmunka keretein belül. 
Ez a modell több okból is problémás és nem fenntartható hosszú távon,
előnye nincs sok, de hátránya annál több. 
Mindezek a tényezők összességében azt mutatják, hogy itt az ideje egy modern digitális megoldás bevezetésének, amely hatékonyabb, pontosabb és fenntarthatóbb. Egy ilyen digitális rendszer lehetővé teszi a kérdőívek automatizált kezelését, az adatok pontosabb gyűjtését és értékelését, valamint az erőforrások hatékonyabb felhasználását, így előnyöket teremt mind az időtartam, mind pedig a minőség szempontjából.

A folyamat a következőképpen néz ki jelenleg:

* Papír vásárlása (Nem túl környezetbarát megoldás)
* Kérdőívek elkészítése
* Ezek kinyomtatása
* Kérdőívek szétosztása
* Kérdőívek begyűjtése
* Kérdőívek kielemzése
* Statisztikák létrehozása
* Ellenőrzés
* Az adott eredmény prezentálása a megfelelő személynek

Nos, az itt leírt nem túl effektív folyamatot a digitalizálás
segítségével egy új, modern szintre lehet emelni és
hosszútávon ez egyértelműen spórolást jelent az adott vállalkozásnak.

A Google Forms esetében más a folyamat:

* Itt elsőként rendelkeznünk kell egy Gmail fiókkal, amennyiben nem, akkor regisztrálni
* Csak Google fiók birtokában tud a létrehozó kérdőíveket kreálni
* Ezután a létrehozó elkészíti a kérdőívet
* A létrehozó elküldi az általa létrehozott kérdőív URL linkjét
* A létrehozó a kitöltés után megkapja a válaszokat.

### 4. Igényelt folyamatok:
#### 4.1 Megjelenés:
- **4.1.1:** Online megjelenés.
- **4.1.2:** Az oldalt bármilyen eszközről, illetve bármilyen böngészőből el lehessen érni.
- **4.1.3:** Az oldal legyen reszponzív.
#### 4.2 Regisztráció, bejelentkezés:
- **4.2.1:** Legyen lehetőség a felhasználó regisztrációjára.
- **4.2.2:** A regisztrációhoz legyen szükséges egy felhasználónév, egy email, illetve egy jelszó. A jelszó karakterei legyenek elrejtve.
- **4.2.3:** A jelszó legyen legalább 6 karakter, illetve tartalmazzok betűket, illetve számokat.
- **4.2.4:** A jelszót meg kell erősítenie a felhasználónak, így kötelezően meg kell adnia ismét.
- **4.2.5:** Sikeres regisztráció esetén tárolódjanak el a felhasználó adatai, illetve a regisztráció ideje egy adatbázisban. A jelszó legyen titkosítva, mielőtt a frontend atküldené a backendre.
- **4.2.6:** A sikeres regisztációt követően a fejhasználó tudjon bejelentkezni.
- **4.2.7:** A felhasználó a bejelentkezést követően meg tudja nézni a saját kérdéssorozatait.
- **4.2.8:** A felhasználó a bejelentkezést követően meg tudja nézni a saját adatait, illetve tudja módosítani a jelszavát.
#### 4.3 Kérdéssorozatok kitöltése:
- **4.3.1:** A felhasználó tudjon kérdéssorozatokat kitölteni.
- **4.3.2:** A kérdéssorozatokat csak akkor lehessen kitölteni, ha a felhasználó bejelentkezett az oldalra.
- **4.3.3:** A kérdéssorozat legalján legyen egy gomb amely a kérdéssorozat befejezését indikálja (pl. küldés/kész).
- **4.3.4:** A kérdés kitöltését követően az adott válaszokat mentse el a rendszer egy adatbázisba.
#### 4.4 Kérdéssorozat létrehozása, elemzése:
- **4.4.1:** Minden felhasználó tudjon kérdéssorozatokat létrehozni, szerkeszteni, illetve törölni (adatbázis műveletek).
- **4.4.2:** Minden felhasználó a saját kérdéssorozata fölött rendelkezik, úgymond ő az adminja.
- **4.4.3:** A felhasználó meg tudja nézni a kérdéssorozatára kapott válaszok elemzését, statisztikáját.

### 5. Rendszerre vonatkozó szabályok

## 6. Követelménylista:
| Modul       | ID  | Név                                     | Leírás                                                                                                                                                                                                                                                                                                                           |
| ----------- | --- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Megjelenés  | K1  | Reszponzivitás                          | Az oldal megjelenésének reszponzívnak kell lennie. Illeszkedjen hiba nélkül mobil illetve számítógépes felületen.                                                                                                                                                                                                                  |
| Jogosultság | K2  | Regisztáció                             | A felhasználónak a regisztrációhoz meg kell adnia egy felhasználónevet, egy emailt, illetve kétszer a jelszót (ellenörzés képpen). A jelszó titkosítani kell, mielőtt a frontend átküldené a backendre. Ha a felhasználónév vagy az email már foglalt, vagy a jelszó nem felel meg az előírt regexnek, akkor az oldal hibát dob. |
| Jogosultság | K3  | Bejelentkezés                           | A felhasználó az emailcím, illetve a jelszó megadásával tud az oldalra bejelentkezni. Hibás adat megadása esetén az oldal hibát dob.                                                                                                                                                                                             |
| Jogosultság | K4  | Felhasználó jogosultságai               | Mások kvízeinek kitöltése. Saját kvíz létrehozása, szerkesztése, illetve törlése                                                                                                                                                                                                                                                 |
| Módosítás   | K5  | Felhasználói adatok módosítása          | A felhasználó módosítani tudja a saját adatait. Az adatok módosításának érvényesítéséhez a felhasználónak meg kell adnia a jelszavát                                                                                                                                                                                             |
| Módosítás   | K6  | Jelszó módosítása                       | A felhasználó módosítani tudja a jelszavát. Ehhez meg kell adnia a régi jelszavát, illetve az újat kétszer. Itt is az új jelszót titkosítani kell, mielőtt a frontend átküldi a backendnek, illetve meg kell felelnie az előírt regexnek.                                                                                        |
| Feladat     | K7  | Feladat kitöltése                       | A felhasználó mások által elkészített kérdéssorozatokat tud kitölteni.                                                                                                                                                                                                                                                           |
| Feladat     | K8  | Pontok megtekintése                     | A feladat kitöltését követően a felhasználó meg tudja nézni az elért pontokat, illetve hogy melyik kérdést válaszolta meg helyesen, illetve helytelenül                                                                                                                                                                          |
| Feladat     | K9  | Feladat létrehozása                     | A felhasználók saját kérdéssorozatokt tudnak létrehozni, illetve ezeket meg tudják osztani más felhasználókkal.                                                                                                                                                                                                                  |
| Módosítás   | K10 | Feladatok módosítása                    | A felhasználók a saját kvízeiket tudják szerkeszteni.                                                                                                                                                                                                                                                                            |
| Módosítás   | K11 | Feladatok törlése                       | A felhasználók a saját kvízeiket tudják törölni.                                                                                                                                                                                                                                                                                 |
| Felület     | K12 | Bejelentkezés                           | Ezen a felületen lehet bejelentkezni.                                                                                                                                                                                                                                                                                            |
| Felület     | K13 | Főoldal                                 | Bejelentkezést követően a felületen megjelenik a felhasználó által készített kvízek, illetve egy ikon, amelyre kattintva a felhasználó meg tudja tekinteni az adatait                                                                                                                                                            |
| Felület     | K14 | Adatok megtekintése                     | A felhasználók itt tudják megtekinteni a saját adataikat, illetve ezen a felületen tudják módosítani azokat.                                                                                                                                                                                                                     |
| Felület     | K15 | Kérdéssorozat kitöltése                 | Ezen a felületen jelennek meg a kérdések.                                                                                                                                                                                                                                                                                        |
| Felület     | K16 | Kérdéssorozat értékelése                | Ezen a felületen jelenik meg a kérdésekre adott válaszok statisztikája.                                                                                                                                                                                                                                                          |
| Felület     | K17 | Kérdéssorozat létrehozása, szerkesztése | Ezen a felületen lehet szerkeszteni az adott kvízt.                                                                                                                                                                                                                                                                              |

## 7. Fogalomszótár:

<h2>8. Fejlesztői igényspecifikáció:</h2>
<h3>-Fejlesztői vízió (Vágyálom):</h3> 
A fejlesztő számára az ideális helyzet az lenne, hogy olyan megrendelések érkezzenek, amelyeket a jelenlegi kapacitásai határidőn belül és kiváló minőségben képes teljesíteni. Ez lehetővé tenné számára, hogy a projektek tervezésében és kivitelezésében a legjobb munkát nyújtsa.

A fejlesztők képesek lennének minden részletet kivitelezni a megrendelői igények alapján, anélkül, hogy hiányosságok vagy hibák maradnának a végeredményben. Modern fejlesztési módszereket és eljárásokat alkalmaznának, hogy a projekt hatékony és innovatív legyen.

A fejlesztők számára fontos lenne a folyamatos és zökkenőmentes kommunikáció a megrendelővel. Ez lehetővé tenné, hogy az igények és elvárások mindvégig tiszták és átláthatóak legyenek, és lehetővé tenné a projekt szakmai irányítását.

A fejlesztő számára az is lényeges, hogy minden projektet biztos alapokra építsen. Ez magában foglalja a szükséges kutatást, tervezést és tesztelést, hogy a végeredmény stabil és megbízható legyen.

Ezen vágyálmok megvalósítása segítene a fejlesztőnek abban, hogy sikeres és kielégítő projekteken dolgozhasson, és hosszú távon is jó kapcsolatot alakítson ki a megbízóival.


<h3>-Fejlesztői cél:</h3> 
A saját tudását felhasználva a megrendelő igényeinek maximális kielégítése: A fejlesztő elsődleges feladata az, hogy a megbízó által megfogalmazott igényeket a lehető legjobban megvalósítsa. Ehhez a projektek során szükséges folyamatos tanulás és fejlődés.

További projektekben is a bizalom elnyerése a megrendelő részéről: A megbízók bizalmát megnyerni és megtartani kulcsfontosságú a fejlesztő számára. Ha a megbízó elégedett a korábbi munkával, nagyobb az esélye újabb projektek kapcsán való együttműködésre.

Egy olyan termék elkészítése, amely mindkét oldalról pozitív véleményt vált ki: A fejlesztőnek olyan terméket kell létrehoznia, amely nemcsak a megbízót, hanem a végső felhasználókat is elégedetté teszi. A jó termék az elégedett felhasználókat eredményezi, ami hosszú távú sikerhez vezet.

Fejlesztő portfóliójának a bővítéséül szolgál: A fejlesztő minden projektet lehetőségként kell kezeljen a személyes portfóliójának bővítésére. A változatos projektek és tapasztalatok hozzájárulnak a fejlesztő szakmai fejlődéséhez és hírnevének növeléséhez.

A fejlesztési görbe normális ütemtervben halad, nem stagnál: A fejlesztőnek folyamatosan fejlődnie kell, de nem szabad elhamarkodottan cselekednie. Az egyensúly fontos: a fejlesztésnek folyamatosnak és stabilnak kell lennie, de ne szabad beleesni a túlzott rohanásba.

A felmerülő problémák, akadályok hamar orvosolhatók: A fejlesztőnek proaktívan kell reagálnia a projekt során felmerülő problémákra és akadályokra. Az időben történő problémamegoldás kulcsfontosságú a projekt sikere szempontjából.

