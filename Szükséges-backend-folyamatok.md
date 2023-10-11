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

  
 


Kitöltéshez visszaküldött objektum struktúrája:
- {
    - id: "1550"
    - title: "Bl-Döntő"    
    - desc: "Kérdőív leírása. Ez adja meg az egész kérdőívre vonatkozó leírást"
    - quests: [
        - {
            - q_id: "1"
            - type: "type"
            - question: "Kérdés #1"
            - description: "Kérdés leírása. Ez adja meg egy kérdés leírását"
        - } 
        - {
            - q_id: "2"
            - type: "one"
            - question: "Kérdés #2"
            - description: "Kérdés leírása. Ez adja meg egy kérdés leírását"
            - answers: 
                - [
                    - "Opció #1" 
                    - "Opció #2"
                    - "Opció #3" 
                    - "Opció #4"
                - ]
        - } 
        - {
            - q_id: "3"
            - type: "multiple"
            - question: "Kérdés #3"
            - description: "Kérdés leírása. Ez adja meg egy kérdés leírását"
            - answers: 
                - [
                    - "Opció #1" 
                    - "Opció #2"
                    - "Opció #3" 
                    - "Opció #4"
                - ]
        - }
    - ]
- }
