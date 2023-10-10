| Komponsens       | Típus  | Szükséges adatok   | Paraméterek  |
| - | - | - | - |
| Login  | Get  | Adott felhasználó kérdéssorainak kódjai és címeik, ha nincs olyan felhasználó, vagy téves adatok, akkor üres tömb és nem 200-as response code | Titkosított email és jelszó kombinciója |
| Regisztráció  | Post  | 200-as response code ha sikeres | Titkosított email és jelszó kombinciója és további adatok |     
| Regisztráció generáló | Get | Még szabad felhasználó azonosító | -- |    
| Kérdéssor lista | Get | Kérdéssor eredményei kiértékeléshez | Kérdéssor azonosítója |
| Kérdéssor kereső | Get | Elérhető kérdéssorok egy listája az azonosítóikkal és címükkel, kitöltéshez | Kérdéssor azonosítója/neve |
| Kérdéssor generáló | Post | 200-as response code ha sikeres | Kérdéssor |
| Kérdéssor generáló | Get | Még szabad kérdéssor azonosító | -- |
| Kérdéssor Kitöltő rész | Post | 200-as response code ha sikeres | Kérdéssor azonosítója és válaszok |
