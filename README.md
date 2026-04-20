<p align="center">
  <img width="1200" height="280" alt="kindguard-logo" src="https://github.com/user-attachments/assets/085a9337-9495-4b5c-a62f-3c00db809bb2" />
  <br/>
  <a href="https://github.com/dvuvud/mistral/actions/workflows/linter.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/dvuvud/mistral/linter.yml?style=for-the-badge&logo=github&label=Lint" alt="Lint" />
  </a>
  <br/>
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

# Mistral – Utvecklarguide

Det här dokumentet går igenom allt du behöver göra för att sätta upp din utvecklingsmiljö och komma igång med projektet.

---

## Innehållsförteckning

- [1. Förutsättningar](#1-förutsättningar)
- [2. Klona repot](#2-klona-repot)
- [3. Starta databasen](#3-starta-databasen)
- [4. Starta backend](#4-starta-backend)
- [5. Starta frontend](#5-starta-frontend)

---

## Snabbstart (TLDR :O)

Om du redan har allt installerat, så är det här är allt du behöver köra:

```bash
# Klona repot
git clone https://github.com/dvuvud/mistral.git
cd mistral

# Starta databasen
docker compose up -d

# Starta backend (i ett terminalfönster)
cd backend
mvn spring-boot:run

# Starta frontend (i ett annat terminalfönster)
cd frontend
ng serve
```

Därefter är följande tillgängligt:

| Tjänst | URL |
|---|---|
| Frontend | http://localhost:4200 |
| Backend | http://localhost:8080 |
| pgAdmin | http://localhost:5050 |

---

## 1. Förutsättningar

Se till att du har följande installerat innan du går vidare.

### Java 25+

Kontrollera om du redan har rätt version (ni borde redan ha det installerat från IOOPM):

```bash
java -version
```

### Maven

```bash
# För MacOS (om du har brew (du borde ha brew))
brew install maven

# För Linux
sudo apt install maven

# För windows (om du har chocolatey (du borde verkligen ha chocolatey))
choco install maven
```

Verifiera installationen:

```bash
mvn -version
```

### Node.js och npm

```bash
# MacOS
brew install node

# Linux
sudo apt install node

# Windows
choco install node
```

### Angular CLI

```bash
npm install -g @angular/cli
```

### Docker Desktop

Ladda ner och installera från [docker.com](https://www.docker.com/products/docker-desktop). Se till att Docker Desktop är igång innan du startar projektet.

---

## 2. Klona repot

```bash
git clone https://github.com/dvuvud/mistral.git
cd mistral
```

---

## 3. Starta databasen

PostgreSQL databasen och pgAdmin körs i Docker-containrar, så ni behöver alltså inte installera varken pgAdmin eller PostgreSQL själva. Starta dem från **rooten** av projektet:

```bash
docker compose up -d
```

`-d` innebär att containrarna körs i bakgrunden så att du får tillbaka terminalen.

Du kan nu nå pgAdmin i webbläsaren på [http://localhost:5050](http://localhost:5050) och logga in med:

| Fält | Värde |
|---|---|
| E-post | admin@mistral.se |
| Lösenord | secret |

### Stoppa containrarna

```bash
docker compose stop
```

Stoppar containrarna men bevarar datan. Kör `docker compose up -d` igen för att starta dem.

```bash
docker compose down
```

Stoppar och tar bort containrarna. Datan bevaras ändå eftersom den lagras i `pgdata/` lokalt på din dator.

---

## 4. Starta backend

Gå in i `backend/`-mappen och starta Spring Boot:

```bash
cd backend
mvn spring-boot:run
```

Första gången kan det ta ett par minuter eftersom Maven laddar ner alla dependencies på din dator. Efterföljande starter går betydligt snabbare.

När du ser följande i terminalen är backend igång:

```
Started BackendApplication in X seconds
```

Backend körs på [http://localhost:8080](http://localhost:8080).

> [!NOTE]
> Se till att Docker-containrarna körs **innan** du startar backend, annars kan den inte ansluta till databasen.

### Om det inte fungerar

Kontrollera att Docker-containrarna är igång:

```bash
docker compose ps
```

Och att dina `application.properties` ser ut så här (`backend/src/main/resources/application.properties`):

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mistral
spring.datasource.username=admin
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 5. Starta frontend

Öppna en ny terminal, gå in i `frontend/`-mappen och kör:

```bash
cd frontend
ng serve
```

Frontend körs på [http://localhost:4200](http://localhost:4200) och uppdateras automatiskt när du sparar filer.

