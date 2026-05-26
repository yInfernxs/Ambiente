# 🔧 DOCUMENTAZIONE TECNICA

## Struttura dei File

```
/Ambiente
├── index.html              # File HTML principale (335 righe)
├── styles.css              # Stylesheet completo (520 righe)
├── script.js               # Logica JavaScript (250 righe)
├── README.md               # Guida generale
├── GUIDA_INSEGNANTE.md    # Per insegnanti
├── APPROFONDIMENTI.md     # Curiosità e dati aggiuntivi
├── PRESENTAZIONE.md       # Script presentazione
└── DOCUMENTAZIONE.md      # Questo file
```

---

## Componenti HTML

### Navbar
```html
<nav class="navbar">
    <div class="nav-container">
        <div class="logo">🌍 Ambiente & Civica</div>
        <ul class="nav-menu">
            <li><a href="#hero" class="nav-link">Home</a></li>
            <!-- ... -->
        </ul>
    </div>
</nav>
```
**Funzionalità:**
- Sticky (rimane in alto durante scroll)
- Link a tutte le sezioni principali
- Responsive (menu verticale su mobile)

### Sezioni
Ogni sezione ha struttura simile:
```html
<section id="civica" class="section">
    <div class="container">
        <h2>Titolo Sezione</h2>
        <p class="section-subtitle">Sottotitolo</p>
        <!-- Contenuto specifico -->
    </div>
</section>
```

### Card Container
```html
<div class="civica-grid">
    <div class="civica-card">
        <div class="card-header">Titolo Card</div>
        <p>Testo descrittivo</p>
        <ul>
            <li>✓ Punto 1</li>
            <li>✓ Punto 2</li>
        </ul>
    </div>
    <!-- Altre card -->
</div>
```

### Quiz
```html
<section id="quiz" class="section quiz-section">
    <div class="container">
        <h2>🎯 Quiz Interattivo</h2>
        <div class="quiz-container">
            <div id="quiz-content"></div>
            <button id="submit-btn" class="btn btn-primary">Verifica</button>
            <div id="result" class="result-box"></div>
        </div>
    </div>
</section>
```
**Dinamico:** Il contenuto del quiz è generato da JavaScript

### Grafico
```html
<div class="chart-container">
    <canvas id="impactChart"></canvas>
</div>
```
**Libreria:** Chart.js (CDN)

---

## CSS - Sezioni Principali

### Variabili CSS
```css
:root {
    --primary: #2ecc71;      /* Verde speranza */
    --secondary: #27ae60;    /* Verde scuro */
    --accent: #3498db;       /* Blu tecnologia */
    --dark: #1a1a1a;         /* Nero */
    --light: #ecf0f1;        /* Bianco sporco */
    --text: #333;            /* Testo scuro */
}
```

### Sistema di Grid
```css
.civica-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```
- `auto-fit`: Adatta numero colonne allo spazio
- `minmax(300px, 1fr)`: Minimo 300px, altrimenti share spazio
- Responsive automatico senza media query

### Animazioni
```css
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Breakpoints
```css
/* Desktop: 1200px+ (default) */
/* Tablet: 768px - 1199px */
/* Mobile: < 768px */

@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column;
    }
    /* ... */
}
```

---

## JavaScript - Funzionalità

### Quiz System
```javascript
const quizQuestions = [
    {
        question: "Domanda...",
        options: [
            { text: "Risposta 1", correct: true },
            { text: "Risposta 2", correct: false },
            // ...
        ]
    }
];

function initializeQuiz() {
    // Crea UI quiz dinamicamente
}

function checkAnswers() {
    // Valuta risposte e mostra feedback
}
```

### Chart.js Integration
```javascript
function initializeChart() {
    const ctx = document.getElementById('impactChart');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: { /* ... */ },
        options: { /* ... */ }
    });
}
```

### Smooth Scroll
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
```

### Intersection Observer (Animazioni al Scroll)
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInDown 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
});
```

---

## Come Modificare il Sito

### Aggiungere una Nuova Sezione

**Step 1: Aggiungere in HTML**
```html
<section id="nuova-sezione" class="section">
    <div class="container">
        <h2>🎨 Titolo Nuova Sezione</h2>
        <p class="section-subtitle">Sottotitolo</p>
        <div class="nuova-grid">
            <!-- Contenuto -->
        </div>
    </div>
</section>
```

**Step 2: Aggiungere in Navbar**
```html
<li><a href="#nuova-sezione" class="nav-link">Nuova Sezione</a></li>
```

**Step 3: Aggiungere Stile CSS**
```css
.nuova-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.nuova-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
}

.nuova-card:hover {
    transform: translateY(-10px);
}
```

### Aggiungere una Nuova Domanda al Quiz

**In script.js:**
```javascript
const quizQuestions = [
    // ... domande esistenti ...
    {
        question: "La mia nuova domanda?",
        options: [
            { text: "Opzione A", correct: false },
            { text: "Opzione B", correct: true },
            { text: "Opzione C", correct: false },
            { text: "Opzione D", correct: false }
        ]
    }
];
```

**Il sistema si aggiornerà automaticamente!**

### Cambiare i Colori

**In styles.css, sezione :root:**
```css
:root {
    --primary: #FF6B6B;      /* Nuovo colore primario */
    --secondary: #FF5252;    /* Nuovo colore secondario */
    --accent: #4ECDC4;       /* Nuovo colore accento */
    /* ... il resto rimane uguale ... */
}
```

Tutti i colori si aggiorneranno automaticamente!

### Modificare i Dati del Grafico

**In script.js, function initializeChart():**
```javascript
data: {
    labels: ['Agricoltura', 'Energia', ...],  // Categorie
    datasets: [{
        label: 'Efficienza Migliorata (%)',
        data: [30, 25, 95, 40, 80, 20],  // Valori
        backgroundColor: ['#2ecc71', ...],  // Colori
    }]
}
```

---

## Performance

### Ottimizzazioni Implementate
- ✅ CSS Grid automatico (no fixed widths)
- ✅ Chart.js caricato da CDN (non locale)
- ✅ JavaScript vanilla (no jQuery, no React)
- ✅ Lazy loading implicito (Intersection Observer)
- ✅ Sass/SCSS: No (CSS puro, più veloce)

### Tempo di Caricamento
- HTML: ~50KB
- CSS: ~25KB
- JavaScript: ~15KB
- **Totale: ~90KB** (molto veloce)

### Suggerimenti di Ottimizzazione

Se voleste aggiungere:
```javascript
// Lazy loading delle immagini
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            imageObserver.unobserve(entry.target);
        }
    });
});
images.forEach(img => imageObserver.observe(img));
```

---

## Accessibilità (WCAG 2.1)

### Implementato ✅
- ✅ Testo alt su emoji
- ✅ Contrasto colori (WCAG AA)
- ✅ Focus states visibili
- ✅ Navigazione keyboard-friendly
- ✅ Heading hierarchy corretta (h1 < h2 < h3)
- ✅ Formulari strutturati (labels, ARIA)

### Checklist Accessibilità
```html
<!-- Buono -->
<label for="quiz-radio">
    <input type="radio" id="quiz-radio" name="question">
    Testo della risposta
</label>

<!-- Cattivo -->
<input type="radio">
Testo della risposta
```

---

## Compatibilità Browser

### Supportato ✅
- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile Safari (iOS 13+)
- Android Chrome 80+

### Non supportato ❌
- Internet Explorer (versioni < 11)
- Browser antichi

### Feature Utilizzate
```javascript
// ES6 features (ampiamente supportati)
- const/let
- Arrow functions () => {}
- Template literals ``
- Classes
- Destructuring

// DOM APIs
- querySelector
- addEventListener
- classList
- dataset
- IntersectionObserver (IE no)
```

Se serve IE11:
```javascript
// Aggiungere polyfill per IntersectionObserver
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
```

---

## SEO (Search Engine Optimization)

### Meta Tags Aggiunti
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ambiente & Civica: Il Ruolo dell'IA</title>
<meta name="description" content="Capolavoro scolastico su ambiente, educazione civica e intelligenza artificiale">
<meta name="keywords" content="ambiente, civica, IA, sostenibilità, educazione">
```

### Microdata Schema (per Google)
```html
<!-- Aggiungere se voleste: -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalContent",
  "name": "Ambiente & Civica",
  "description": "...",
  "educationalLevel": "HighSchool"
}
</script>
```

### URL Friendly
- `#civica` vs `#section-1` ✅
- Heading semantici (h1 > h2 > h3) ✅
- Testo descrittivo (no solo immagini) ✅

---

## Testing

### Test Manuali
```
1. Aprire in 3+ browser diversi
2. Test responsive (desktop, tablet, mobile)
3. Testare tutti i link della navbar
4. Completare il quiz completamente
5. Verificare il grafico carica correttamente
6. Test navigazione keyboard (Tab, Enter)
7. Test su mobile: zoom, scroll, touch
```

### Bug Report Template
```
Se trovate un bug:
1. Browser e versione: ___________
2. Dispositivo: (Desktop/Mobile/Tablet)
3. Cosa avete fatto: ___________
4. Cosa dovrebbe succedere: ___________
5. Cosa succede invece: ___________
6. Screenshot/Video: [allegare]
```

---

## Estensioni Possibili

### Facili (2-4 ore)
```javascript
// 1. Aggiungere animazione loading
<div class="loader"></div>

// 2. Aggiungere Dark Mode
localStorage.setItem('darkMode', true)

// 3. Aggiungere Share buttons
<button onclick="shareOnTwitter()">Share</button>

// 4. Aggiungere contatore visite
localStorage.setItem('visits', visits + 1)
```

### Medie (5-10 ore)
```javascript
// 1. Backend database (Firebase)
firebase.firestore().collection('quiz').add({...})

// 2. Sistema di autenticazione
firebase.auth().signInAnonymously()

// 3. Analytics
gtag('event', 'quiz_completed', {score: 85})

// 4. PWA (Progressive Web App)
// Aggiungere service worker
```

### Avanzate (10+ ore)
```javascript
// 1. API reali di dati climatici
fetch('https://api.openweathermap.org/...')

// 2. Machine Learning Model
// TensorFlow.js per predizioni personali

// 3. Real-time multiplayer quiz
// WebSocket per quiz competitivo

// 4. Mobile App (React Native)
// Portare su iOS e Android
```

---

## Deployment

### Opzione 1: GitHub Pages (Gratuito)
```bash
# Caricare su GitHub
git init
git add .
git commit -m "Capolavoro Ambiente"
git push origin main

# Abilitare Pages nelle settings
# URL: username.github.io/Ambiente
```

### Opzione 2: Netlify (Gratuito)
```bash
# Drag & drop cartella nel sito Netlify
# URL: nome-sito.netlify.app
```

### Opzione 3: Vercel (Gratuito)
```bash
# Collegare repo GitHub
# URL: nome-sito.vercel.app
```

### Opzione 4: Server proprio
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

---

## File Structure Best Practice

```
Ambiente/
├── index.html          # Unica pagina
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/             # Se aggiungere immagini
│   ├── images/
│   └── icons/
├── docs/               # Documentazione
│   ├── README.md
│   ├── GUIDE.md
│   ├── APPROFONDIMENTI.md
│   └── PRESENTAZIONE.md
└── .gitignore
```

---

## Troubleshooting

### Il grafico non appare
**Soluzione:**
```javascript
// Verificare che Chart.js sia caricato
console.log(Chart) // Deve essere disponibile

// Verificare che l'elemento #impactChart esista
const ctx = document.getElementById('impactChart')
console.log(ctx) // Non deve essere null
```

### Il quiz non funziona
**Soluzione:**
```javascript
// Verificare che le domande siano definite
console.log(quizQuestions.length) // Deve essere > 0

// Verificare che initializeQuiz() sia chiamato
// Deve esserci: document.addEventListener('DOMContentLoaded', ...)
```

### Lo stile non si applica
**Soluzione:**
```html
<!-- Verificare che styles.css sia caricato PRIMA di script.js -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

<!-- Non fare il contrario! -->
```

### Errore Console JavaScript
```javascript
// Aprire DevTools (F12)
// Andare su Console
// Leggere il messaggio di errore
// Spesso il problema è:
// 1. Elemento non trovato (querySelector)
// 2. Libreria non caricata (Chart.js)
// 3. Sintassi JS errata
```

---

**Domande? Controllate i commenti nel codice! Ogni sezione è ben documentata.** 📝

