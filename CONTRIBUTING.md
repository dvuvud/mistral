# Projektets Git Guidelines

Inget i den här filen är ett måste, men tänkte att det kan vara bra att ha lite samlad information om hur man kan jobba i Git för att göra det enklare om man känner sig osäker någon gång.

---

## Branch-struktur

Alla nya features, bugfixar, förbättringar etc. ska utvecklas i egna branches (main har branch protection så det går inte att pusha till den ens).
Konventionen för branch-namn är kebab-case, men vi behöver inte ha något strikt krav på att följa den.

### Exempel

  * `feature/namn-på-feature`
  * `bugfix/namn-på-bugfix`
  * `hotfix/namn-på-hotfix`

---

## Rebase före merge till main

För att hålla commit-historiken så ren och lättläst som möjligt bör alla branches rebasas mot `main` innan de mergas.

Det innebär att man lägger sina commits ovanpå den senaste versionen av `main`, istället för att skapa en merge commit.

```bash
git checkout <din-branch>
git fetch origin
git rebase origin/main
```

Om det uppstår konflikter löser man dessa och kör:
```bash
git add <fil>
git rebase --continue
```

Detta gör att historiken förblir linjär och enklare att följa, samtidigt som man undviker onödiga merge commits.

> [!WARNING]
> Detta skriver om historiken. Om branchen redan liggeer på remote behöver du använda `--force-with-lease` när du pushar (det står mer om det här i [följande avsnitt](#du-har-råkat-commita-något-du-inte-ville-ha-med)).

---

## Vanliga problem

Det finns ett antal vanliga problem som man kan stöta på när man arbetar i git.
Därför har jag gjort en liten snabb guide med åtgärder till dessa.

### ToC

- [Din lokala branch är bakom remote och push nekas](#din-lokala-branch-är-bakom-remote-och-push-nekas)
- [Du glömde något i ditt senaste commit](#du-glömde-något-i-ditt-senaste-commit)
- [Du har råkat commita något du inte ville ha med](#du-har-råkat-commita-något-du-inte-ville-ha-med)
- [Du har byggt en ny feature ovanpå en branch som inte mergats till main än](#du-har-byggt-en-ny-feature-ovanpå-en-branch-som-inte-mergats-till-main-än)
- [Du vill navigera till eller ändra i tidigare commits](#du-vill-navigera-till-eller-ändra-i-tidigare-commits)

---

### Din lokala branch är bakom remote och push nekas

Det här händer när någon annan (eller du själv från en annan dator) har pushat commits till samma branch efter att du senast pullade. Git nekar din push för att du inte har de senaste ändringarna.

För att lösa det här problemet behöver man hämta de nya ändringar och göra en rebase, vilket innebär att man lägger sina commits ovanpå ändringarna.

```bash
git pull --rebase origin <branch-namn>

# om konflikter sker löser man dessa och kör
git add <filnamn>
git rebase --continue

git push origin <branch-namn>
```

---

### Du glömde något i ditt senaste commit

Gör **inte** ett nytt commit bara för att lägga till det du glömde. Använd `--amend` för att uppdatera det senaste committet:

```bash
# stagea de filer du glömde:
git add <fil>

# lägg till dem i det senaste committet (öppnar editorn så du kan justera meddelandet):
git commit --amend

# vill du behålla samma commit-meddelande utan att öppna editorn:
git commit --amend --no-edit
```

> [!WARNING]
> Amend skriver om historiken. Om du redan pushat det committet behöver du använda `--force-with-lease` (det står mer om det här i [följande avsnitt](#du-har-råkat-commita-något-du-inte-ville-ha-med)).

---

### Du har råkat commita något du inte ville ha med

Gör **inte** ett nytt commit som tar bort det du råkade lägga till, om det fortfarande finns lokalt. Det ser onödigt rörigt ut i historiken. Gå istället tillbaka och skriv om historiken.

Det finns två fall:

**Fall 1 – Du har inte pushat till remote än**

Använd `git reset` för att ta bort de senaste committsen lokalt. `HEAD~n` betyder att du går tillbaka `n` commits. Filerna finns kvar i working directory efteråt.

```bash
# ta bort de senaste n commits (filernas innehåll behålls fortfarande, men blir unstaged istället):
git reset HEAD~n

# återställ de filer du inte vill ha kvar alls:
git restore <fil>

# committa sedan det du faktiskt vill behålla:
git add <fil>
git commit -m "..."
```

**Fall 2 – Du har redan pushat till din utvecklingsbranch på remote**

Gör exakt samma sak som ovan, men när du pushar efteråt måste du tvinga igenom ändringen eftersom historiken på remote nu skiljer sig från din lokala:

```bash
git reset HEAD~n

git restore <fil>          # om du vill kasta filen helt

git add <fil>
git commit -m "..."

git push --force-with-lease origin <branch-namn>
```

`--force` innebär att du skriver om githistoriken på remote. Använd med försiktighet.  
`--force-with-lease` är den säkrare varianten: pushen nekas om det finns commits på remote som du inte har lokalt, vilket skyddar mot att du av misstag skriver över andras arbete.

> [!WARNING]
> **Viktigt:** När du force-pushar måste alla som har den gamla versionen av branchen lokalt göra en rebase nästa gång de pullar:
> ```bash
> git pull --rebase origin <branch-namn>
> ```
> Se därför till att undvika stora omskrivningar, och prata alltid med berörda personer innan du force-pushar till en branch som flera jobbar på.

---

### Du har byggt en ny feature ovanpå en branch som inte mergats till main än

Det händer lätt att man fortsätter jobba på `feature/b` med `feature/a` som utgångspunkt, innan `feature/a` är mergad. Om `feature/a` sedan uppdateras eller får nya commits behöver `feature/b` hållas synkroniserad.

```bash
# Stå på feature/b och rebasa mot den uppdaterade feature/a:
git checkout feature/b
git rebase feature/a
```

När `feature/a` väl är mergad till main kan du rebasa `feature/b` direkt mot main:

```bash
git rebase main
```

På så vis följer `feature/b` alltid med utan att historiken blir rörig.

---

### Du vill navigera till eller ändra i tidigare commits

För att tillfälligt titta på ett äldre commit (**utan att ändra** din branch):

```bash
# för att hitta hashen för en commit (står i vänsterled): 
git log --oneline

git checkout <commit-hash>

# gå tillbaka till din branch:
git checkout <branch-namn>
```

För att **göra ändringar** i ett eller flera gamla commits.

Man börjar med att göra en s.k. interactive rebase:
```bash
git rebase -i HEAD~n # n är antalet commits bakåt
```

Det öppnar en editor som ser ut ungefär så här:
```
pick abc1234 add login page
pick def5678 fix button styling
pick ghi9012 add user profile
```

Ändra `pick` till `edit` på de commits du vill ändra:
```
pick abc1234 add login page
edit def5678 fix button styling
edit ghi9012 add user profile
```

Git pausar sedan rebasen varje commit du vill ändra, en efter en:
```bash
# gör dina ändringar i filerna...
git add <fil>
git commit --amend

# fortsätter till nästa commit (eller avslutar om du är klar med alla):
git rebase --continue
```

Git applicerar sedan resten av committsen ovanpå. Om det uppstår konflikter längs vägen får du lösa dem och köra `git rebase --continue` igen.
Precis som vid vanlig force-push skriver detta om historiken, så samma regler gäller. Om du redan pushat behöver du `git push --force-with-lease` efteråt.

---

## Commit-guidelines

Det är inget hårt krav att följa dessa riktlinjer, men välskrivna commit-meddelanden gör det mycket enklare för alla i gruppen att förstå historiken och snabbt se var en viss funktionalitet lades till eller förändrades. Det här blir viktigt sen om man behöver gå bakåt i historik när fel uppstår eller liknande.

### Skriv meddelandet som ett verb i infinitiv

Man brukar börja med ett verb i infinitiv-form och beskriver sedan vad man har gjort. Håll det kort och konkret.
Det finns många olika konvetioner för det här, men här är en kort lista på vad som brukar användas i olika fall.

| Prefix | När du använder det |
|--------|---|
| `add` | Lägger till ny funktionalitet, filer eller liknande |
| `fix` | Rättar ett fel eller en bugg |
| `remove` | Tar bort kod, filer eller beroenden |
| `update` | Uppdaterar något befintligt utan att lägga till eller ta bort |
| `refactor` | Strukturerar om kod utan att ändra beteendet |

### Exempel

```
add user authentication with JWT
fix crash when submitting empty form
remove deprecated API integration
update dependencies to latest versions
refactor database query logic for readability
```

### Tänk på commit-historiken i förväg

Det underlättar alltid att tänka igenom hur du vill arbeta med en feature innan du börjar. Försök att dela upp arbetet i logiska steg och commita efter varje steg, snarare än att samla ihop allt i ett enda stort commit. En ren historik gör det enklare att förstå vad som ändrades och varför, hitta exakt var en bugg introducerades, återställa ett enskilt steg utan att påverka resten, med mera.
