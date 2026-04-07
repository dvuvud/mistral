# Systemarkitektur

Detta dokument beskriver den generella systemarkitekturen för projektet.

---

## Övergripande Struktur

Systemets är uppbyggt som följande:

* **Frontend (Angular)** körs på port 4200. Hanterar gränssnitt och klientlogik.
* **Backend (Spring Boot)** Körs på port 8080. Innehåller affärslogik, säkerhet, realtidshantering.
* **Databas (PostgreSQL)** Körs på port 5432. Persistent storage av all data i systemet.

---

## Autentisering

I *Angular* och *Spring Boot* system brukar **Stateless Authentication** användas via [JWT (JSON Web Token)](https://en.wikipedia.org/wiki/JSON_Web_Token).

1. Användaren skickar användarnamn och lösenord till `/api/auth/login`.
2. Vid giltiga uppgifter returnerar servern en JWT.
3. Angular sparar denna token och bifogar den i HTTP-headern för alla efterföljande anrop.
4. Backenden validerar token vid varje anrop för att se till att användaren har rätt behörighet.

---

## Bibliotek och Grejer

För att utveckla systemet behövs följande bibliotek och grejer:

* **Spring Web (Tomcat):** Exponerar REST-endpoints och hanterar inkommande HTTP-anrop.
* **Spring Data JPA (Hibernate):** Fungerar som bryggan mellan Java-koden och databasen. Sköter automatisk generering av SQL och mappning av Entities till tabeller.
* **Spring Messaging (STOMP/WebSocket):** Möjliggör push-kommunikation från servern till klienten för realtidsuppdateringar.
* **Lombok:** Automatiserar generering av boilerplate-kod som getters, setters och constructors för att hålla koden ren.
* **Yjs (Frontend):** Implementerar CRDT-algoritmer för att möjliggöra simultant skrivande utan låsning. Notera att det här biblioteket inte är konfigurerat för tillfället.

---

## API Endpoints

Följande endpoints skulle kunna utgöra gränssnittet mellan frontend och backend. Alla anrop görs med `/api` som bas-URL.

| Resurs | Metod | Endpoint | Beskrivning |
| --- | --- | --- | --- |
| **Autentisering** | POST | `/api/auth/login` | Autentiserar användare och returnerar en JWT. |
| **Autentisering** | POST | `/api/auth/logout` | Invaliderar sessionen (raderar JWT lokalt hos klienten). |
| **Barn** | GET | `/api/children` | Hämtar alla barn och incheckningsstatus. |
| **Incheckning** | PATCH | `/api/children/{id}` | Uppdaterar status (in/utcheckning) via optimistisk låsning. |
| **Journal** | GET | `/api/journals/{id}` | Hämtar dokumentets initiala binära tillstånd. |
| **Användare** | GET | `/api/users/me` | Hämtar information om den aktuella användaren. |
| **Meddelanden** | GET | `/api/messages` | Hämtar meddelanden kopplade till användaren. |

---

## Concurrency

För att uppnå vårt mål för concurrency kan vi använda ett antal olika strategier beroende på fall:

### Optimistisk låsning
Används för statusuppdateringar (t.ex. incheckning av barn).
* **Hur?:** Användning av `@Version` i JPA på Entities.
* **Resultat:** Förhindrar att en incheckning skrivs över av en gammal status om två lärare klickar samtidigt.

### CRDT (Final boss)
Används för journaler för att tillåta att flera användare skriver i samma stycke samtidigt.
* **Hur??:** Yjs-integration.
* **Resultat:** Skickar binära ändringsset via WebSockets. Algoritmen garanterar att alla klienter når samma tillstånd utan behovet av en auktoritet som bestämmer vad som är rätt.

---

## Realtidssamarbete med WebSockets

Synkronisering av journaler sker via STOMP-protokollet.

### Det skulle kunna se ut såhär
1. Användaren skriver i Angular. Yjs beräknar en binär "update".
2. Uppdateringen skickas via WebSocket till `/app/journal/{id}/update`.
3. Servern distribuerar uppdateringen till alla prenumeranter på `/topic/journal/{id}`.
4. Servern sparar det uppdaterade binära tillståndet i databasen.

### WebSocket Specifikation
* **Topic (Utgående från servern till klienter):** `/topic/journal/{id}` - Innehåller binära tillståndsuppdateringar och cursor-positioner.
* **App (Inkommande från klienten till servern):** `/app/journal/{id}/update` - Tar emot binära diff-paket från klienter.

## Databaslagring av Realtidsdata

För att stödja CRDT-modellen behöver journaler lagras i PostgreSQL med två representationer:

1. **State Vector (BYTEA):** En binär blob som innehåller dokumentets fullständiga historik och CRDT-metadata.
2. **Snapshot (TEXT):** En renderad textversion som kan användas för snabb visning när man inte behöver redigeringsfunktionalitet.

