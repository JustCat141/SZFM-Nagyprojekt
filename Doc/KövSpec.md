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
Szükség van egy olyan reszponzív webes rendszerre amely először is
felhasználóbarát, lehetőség van a regisztrációra, bejelentkezésre, jelszó
megváltoztatására és segítségével felmérést lehet végezni egy adott
témakörben, majd ez automatikusan ki kell értékelődjön. Ezután szükséges
volna hogy statisztikákat tudjunk kiállítani egy adott felméréssel
kapcsolatban. További elvárás hogy a reszponzivitás mellett a design is
igazodjon a megrendelő vállalatának a színeihez és bárki számára könnyen
kezelhető legyen.

<h3> 3. Jelenlegi folyamatok: </h3>
Jelenleg külön egy erre a célra felvett ember végzi a feladatot, 
valamint időszakonként diákok szokták diákmunka keretein belül. 
Ez a modell több okból is problémás és nem fenntartható hosszú távon,
előnye nincs sok, de hátránya annál több. 
Itt az ideje hogy egy digitális megoldással kiváltsuk ezt az elavult
kérdőívezési módszert.

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

## 7. Fogalomszótár: