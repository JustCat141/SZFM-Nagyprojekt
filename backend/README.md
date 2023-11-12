# Questionnaire - API Dokumentáció
Ez a fájl a backend szerver rövid dokumentációját tartalmazza

## 1. Követelmények
Ahhoz hogy a szervert futtathassuk szükségünk van a Node.js keretrendszerre. Ezt az [alábbi](https://nodejs.org/en) linken lehet letölteni, majd telepíteni.

Emellett szükségünk van egy MySQL adarbázisra is. Ebben az adatbázisban készítenünk kell 3 táblát:
- users
- questionnaires
- answers

Ezeket az alábbi módon tudjuk elkészíteni:

### Users tábla legenerálása:
```sql
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

### Questionnaires tábla legenerálása:
```sql
CREATE TABLE `questionnaires` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `questions` json NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```
### Answers tábla legenerálása:
```sql
CREATE TABLE `answers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `questionnaire_id` int NOT NULL,
  `question_id` int NOT NULL,
  `answer` json NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `questionnaire_id_UNIQUE` (`questionnaire_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
```

Emellett a .env fájlban lévő adatokat is konfigurálni kell, hogy az adatbázis működjön.

## 2. Szerver futtatása
A szerver futtatásához a *backend* mappában lévő [run.bat](./run.bat) fájlt kell futtatni

Ha a szerverünk fut, akkor a következő üzenetet kell látnunk:

```bash
(15:40:24) [INFO] Connecting to MySQL database...
(15:40:24) [INFO] Successfully connected to the database!
(15:40:24) [INFO] Starting server...
(15:40:24) [INFO] Server started successfully! Running on port 8080!
```

## 3. Endpointok elérése
Az API által biztosított endpointokat a következő URL-eken keresztül lehet elérni:

### User endpointok

#### Get Users (GET)
```
http://DOMAIN:PORT/api/user
```

#### Get User (GET)
```
http://DOMAIN:PORT/api/user/ID
```

#### Register (POST)
```
http://DOMAIN:PORT/api/user/register
```
A regisztráció bodyába a következő adatokat kell elhelyezni JSON formátumban:
```json
{
  "username": "string",
  "email": "string",
  "password" : "string"
}
```

#### Login (POST)
```
http://DOMAIN:PORT/api/user/login
```
A login bodyába a következő adatokat kell elhelyezni JSON formátumban:
```json
{
  "email": "string",
  "password" : "string"
}
```

### Questionnaire Endpointok

#### Get Questionnaire (GET)
```
http://DOMAIN:PORT/api/questionnaire/ID
```

#### Get User Questionnaire (GET)
```
http://DOMAIN:PORT/api/questionnaire/user/USERID
```

#### Submit Questionnaire (POST)
```
http://DOMAIN:PORT/api/questionnaire/create
```
A submit bodyába a következő adatokat kell elhelyezni JSON formátumban:
```json
{
  "user_id": "int",
  "title": "string",
  "description": "string",
  "questions" : "JSON"
}
```

**TODO: Answer endpoint dokumentáció**

## 4. Hibaüzenetek

Az API bizonyos endpointjai (általában POST metódusok) egy egyszerű JSON formátumú válasszal térnek vissza, amely a művelet sikerességét, illetve egy hibakódot tartalmaz
```json
{
  "success": false,
  "errorCode": 102 // Helytelen jelszó
}
```

Ezeknek a kódoknak külön jelentéseik vannak, amellyet a következő táblázat tartalmaz:
| Hibakód | Jelentés                        | Előfordulás                                     |
| ------- | ------------------------------- | ----------------------------------------------- |
| 101     | Helytelen email formátum        | Regisztráció, Bejelentkezés                     |
| 102     | Helytelen jelszó formátum       | Regisztráció                                    |
| 103     | Helytelen bejelentkezési adatok | Bejelentkezés, Felhasználói adatok változtatása |
| 104     | Helytelen adatformátum          | Kérdőív feltöltése, Válasz feltöltése           |
| 201     | Foglalt emailcím                | Regisztráció                                    |

