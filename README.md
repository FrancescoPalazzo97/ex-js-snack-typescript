# 🚀 EX - Snack TypeScript

**Repo:** `ex-js-snack-typescript`

---

## 🏆 Snack 1 - Controllo Dinamico dei Tipi

Hai ricevuto un **dato generico da un'API**, ma non sai di che tipo sia... Il tuo compito è **controllare il tipo del dato** e stampare il valore in modo corretto.

### 📋 Requisiti Base

- Se è una **stringa**: stampala in maiuscolo
- Se è un **numero**: moltiplicalo per due e stampalo  
- Se è un **booleano**: stampa `"Sì"` o `"No"` in base al suo valore
- **In tutti gli altri casi**: stampa `"Tipo non supportato"`

### 🎯 BONUS

- Se è `null`: stampa `"Il dato è vuoto"`
- Se è un **array**: stampa la sua lunghezza
- Se è una **Promise**: **attendi che si risolva e stampa il valore del resolve**

---

## 🏆 Snack 2 - Type Alias per Dipendente

Crea un **type alias** `Dipendente` che rappresenta un lavoratore con i seguenti dati:

### 📊 Proprietà Richieste

- `nome` → stringa
- `cognome` → stringa  
- `annoNascita` → numero
- `sesso` → Può essere solo `"m"` o `"f"`
- `anniDiServizio` → array di numeri, es. `[2014, 2015, 2017, 2018]`

### 🎯 BONUS

Il type alias `Dipendente`, ha anche i seguenti dati:

- `emailAziendale` → Email assegnata al dipendente (*non si può modificare*)
- `contratto` → Specifica il tipo di contratto del dipendente, con valori limitati a `"indeterminato"`, `"determinato"` o `"freelance"`

---

## 🏆 Snack 3 - Estensione dei Ruoli Aziendali

Estendiamo `Dipendente` per definire due ruoli specifici all'interno dell'azienda:

### 👨‍💻 1. Developer

- `livelloEsperienza` → Il livello di esperienza del developer (le scelte possibili sono solo `"Junior"`, `"Mid"` o `"Senior"`)
- `linguaggi` → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (*opzionale*, perché i neo assunti non hanno ancora dei linguaggi assegnati)
- `certificazioni` → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto)

### 📈 2. ProjectManager

- `teamSize` → Il numero di persone nel team gestito dal Project Manager (può essere `null` se non ha ancora un team assegnato)
- `budgetGestito` → Il totale del budget annuale gestito dal PM (*opzionale*)
- `stakeholderPrincipali` → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto)

### 🎯 BONUS - Type Alias Team

Definiamo un nuovo **type alias** `Team`, che rappresenta un gruppo di lavoro all'interno dell'azienda:

- `nome` → Nome del team (stringa)
- `progettoAttuale` → Nome del progetto su cui lavora il team (può essere `null` se il team è in attesa di assegnazione)  
- `budget` → Importo numerico del budget assegnato al team (*sempre presente*)
- `membri` → Una tuple in cui il **primo elemento** è sempre un **Project Manager**, seguito da uno o più **Developers** (*almeno un developer obbligatorio*)