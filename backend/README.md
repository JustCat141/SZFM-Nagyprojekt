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
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
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
Starting server...
Server is running on port 8080
```

## 3. Endpointok elérése
Az API által biztosított endpointokat a következő URL-eken keresztül lehet elérni:

```
http://localhost:8080/api/user/...
http://localhost:8080/api/questionnaire/...
http://localhost:8080/api/answer/...
```

*(jelenleg az API még nem rendelkezik endpointokkal...)*

bocs ha a megfogalmazás szar, jelenleg hajnali fél 3 van 🥱💀