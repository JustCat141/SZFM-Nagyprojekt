| Questionnaire rendszer tesztelése | Tesztelő: | Pósán Róbert  |  |  |  |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Böngésző | Lépés | Leírás | Státusz | Várt eredmény | Kapott eredmény |
| Chrome | 1 | Regisztráció | passed | Regisztrációs felület helyes kitöltése, a regisztrálás megtörténik és bejelentkező felület jelenik meg | Létrejön a felhasználó fiókja az adatbázisban amivel a bejelentkezést létre tudja hozni |
|  | 2 | Bejelentkezés | passed | A felhasználó megadja a helyes felhasználónevét és jelszavát, majd sikeresen bejelentkezik és átirányítódik a főoldalra | Sikeres authentikáció után megtörténik az átirányítás a főoldalra |
| | 3 | Kérdőív kitöltése | passed | A rendszer rögzíti a válaszokat, és átirányítja a felhasználót a következő kérdésre, a beküldés gombbal elküldheti a kitöltött kérdőívet | A rendszer rögzíti a válaszokat, és átirányítja a felhasználót a következő kérdésre, a beküldés gombbal elküldheti a kitöltött kérdőívet |
| | 4 | Kérdőív validáció | passed | Kitöltetlen válasznál a program megjelenít egy hibaüzenetet a hiányzó mezőkkel | Kitöltetlen válasznál a program megjelenít egy hibaüzenetet a hiányzó mezőkkel |
|  | 5 | Kérdőív mentése | passed | A rendszer megerősíti a mentést, és a felhasználó láthatja az elmentett válaszait a profiljában | A rendszer megerősíti a mentést, és a felhasználó láthatja az elmentett válaszait a profiljában |
|  | 6 | Oldalak közötti navigáció | passed | A rendszer megjegyzi az eddigi válaszokat, és visszatér a megfelelő kérdéshez | A rendszer megjegyzi az eddigi válaszokat, és visszatér a megfelelő kérdéshez |
|  | 7 | Kijelentkezés | passed | A felhasználó kijelentkezik, és a rendszer visszairányítja a bejelentkező képernyőre. Ha újra bejelentkezik, folytathatja a munkáját | A felhasználó kijelentkezik, és a rendszer visszairányítja a bejelentkező képernyőre. Ha újra bejelentkezik, folytathatja a munkáját |
|  | 8 | Keresés azonosítóval | passed | A felhasználó azonosító alapján kereshet a kérdőívek között | A felhasználó azonosító alapján kereshet a kérdőívek között
|  | 9 | Rossz azonosító | passed | A felhasználó ha rossz azonosítót ad meg, hibaüzenetet kap | A felhasználó ha rossz azonosítót ad meg, hibaüzenetet kap |
|  | 10 | Kérdőív létrehozása cím nélkül | passed | A felhasználó nem képes cím nélkül létrehozni kérdőívet | A felhasználó nem képes cím nélkül létrehozni kérdőívet |
|  | 11 | Kérdőív létrehozása kérdés nélkül | passed | A felhasználó nem képes kérdés nélkül létrehozni kérdőívet | A felhasználó nem képes kérdés nélkül létrehozni kérdőívet |
|  | 12 | Kérdés rögzítése válaszlehetőség nélkül | passed | A felhasználó nem képes nem kifejtős kérdést válasz nélkül rögzíteni  | A felhasználó nem képes nem kifejtős kérdést válasz nélkül rögzíteni |
|  | 13 | Valid email cím megadása | passed | A felhasználó csak megfelelő formátumú email címet tud megadni | A felhasználó csak megfelelő formátumú email címet tud megadni |
|  | 14 | Felhasználó kérdőívenek helyes listázása | passed | Saját kérdőívek megjelennek a megfelelő elrendezéssel. Rákattintva megnyitható | Saját kérdőívek megjelennek a megfelelő elrendezéssel. Rákattintva megnyitható |
|  | 15 | Kijelentkezés utáni újbóli bejelentkezés | passed | A felhasználó kijelentkezik, és újra bejelentkezik,ezt többször is megteheti | A felhasználó kijelentkezik, és újra bejelentkezik,ezt többször is megteheti |