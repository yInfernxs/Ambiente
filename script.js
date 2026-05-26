// ===== QUIZ QUESTIONS =====
const quizQuestions = [
    {
        question: "Quale articolo della Costituzione Italiana tutela l'ambiente?",
        options: [
            { text: "Articolo 9", correct: true },
            { text: "Articolo 12", correct: false },
            { text: "Articolo 15", correct: false },
            { text: "Articolo 18", correct: false }
        ]
    },
    {
        question: "Qual è l'obiettivo di sviluppo sostenibile dell'ONU legato al clima?",
        options: [
            { text: "SDG 12 - Consumo e Produzione Responsabili", correct: false },
            { text: "SDG 13 - Lotta contro il Cambiamento Climatico", correct: true },
            { text: "SDG 7 - Energia Pulita e Accessibile", correct: false },
            { text: "SDG 11 - Città e Comunità Sostenibili", correct: false }
        ]
    },
    {
        question: "Quante tonnellate di plastica finiscono negli oceani ogni anno?",
        options: [
            { text: "2 milioni", correct: false },
            { text: "5 milioni", correct: false },
            { text: "8 milioni", correct: true },
            { text: "12 milioni", correct: false }
        ]
    },
    {
        question: "Di quale percentuale è aumentata la temperatura globale dal 1800?",
        options: [
            { text: "0.5°C", correct: false },
            { text: "1.2°C", correct: true },
            { text: "2.5°C", correct: false },
            { text: "3.0°C", correct: false }
        ]
    },
    {
        question: "Quale tra queste NON è un'applicazione dell'IA per l'ambiente?",
        options: [
            { text: "Monitoraggio climatico tramite satelliti", correct: false },
            { text: "Ottimizzazione della distribuzione di energia rinnovabile", correct: false },
            { text: "Propaganda pubblicitaria senza filtri", correct: true },
            { text: "Agricoltura intelligente con sensori intelligenti", correct: false }
        ]
    },
    {
        question: "Qual è la percentuale di declino della fauna selvatica dal 1970?",
        options: [
            { text: "30%", correct: false },
            { text: "50%", correct: false },
            { text: "68%", correct: true },
            { text: "85%", correct: false }
        ]
    }
];

// ===== INITIALIZE QUIZ =====
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    initializeChart();
});

function initializeQuiz() {
    const quizContent = document.getElementById('quiz-content');
    const submitBtn = document.getElementById('submit-btn');
    
    quizContent.innerHTML = '';
    
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        let optionsHTML = '<div class="quiz-options">';
        question.options.forEach((option, optIndex) => {
            const optionId = `q${index}_opt${optIndex}`;
            optionsHTML += `
                <div class="quiz-option">
                    <input type="radio" id="${optionId}" name="question${index}" value="${optIndex}">
                    <label for="${optionId}">${option.text}</label>
                </div>
            `;
        });
        optionsHTML += '</div>';
        
        questionDiv.innerHTML = `
            <h4>Domanda ${index + 1}: ${question.question}</h4>
            ${optionsHTML}
        `;
        
        quizContent.appendChild(questionDiv);
    });
    
    submitBtn.style.display = 'block';
    submitBtn.addEventListener('click', checkAnswers);
}

function checkAnswers() {
    let correctCount = 0;
    let totalQuestions = quizQuestions.length;
    
    quizQuestions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        
        if (selected) {
            const selectedIndex = parseInt(selected.value);
            if (question.options[selectedIndex].correct) {
                correctCount++;
            }
        }
    });
    
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const resultDiv = document.getElementById('result');
    
    let message = '';
    if (percentage === 100) {
        message = `🎉 Perfetto! Hai risposto correttamente a ${correctCount}/${totalQuestions} domande! Sei un esperto di ambiente e sostenibilità!`;
        resultDiv.className = 'result-box success';
    } else if (percentage >= 80) {
        message = `✅ Ottimo lavoro! Hai risposto correttamente a ${correctCount}/${totalQuestions} domande (${percentage}%). Continua così!`;
        resultDiv.className = 'result-box success';
    } else if (percentage >= 60) {
        message = `👍 Buon inizio! Hai risposto correttamente a ${correctCount}/${totalQuestions} domande (${percentage}%). Approfondisci i tuoi studi!`;
        resultDiv.className = 'result-box success';
    } else {
        message = `📚 Continua a imparare! Hai risposto correttamente a ${correctCount}/${totalQuestions} domande (${percentage}%). Non arrenderti!`;
        resultDiv.className = 'result-box fail';
    }
    
    resultDiv.innerHTML = message;
    resultDiv.style.display = 'block';
    
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// ===== INITIALIZE CHART =====
function initializeChart() {
    const ctx = document.getElementById('impactChart');
    if (!ctx) return;
    
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Agricoltura',
                'Energia',
                'Monitoraggio',
                'Economia Circolare',
                'Biodiversità',
                'Trasporti'
            ],
            datasets: [
                {
                    label: 'Efficienza Migliorata (%)',
                    data: [30, 25, 95, 40, 80, 20],
                    backgroundColor: [
                        '#2ecc71',
                        '#27ae60',
                        '#3498db',
                        '#e74c3c',
                        '#f39c12',
                        '#9b59b6'
                    ],
                    borderColor: [
                        '#27ae60',
                        '#229954',
                        '#2980b9',
                        '#c0392b',
                        '#d68910',
                        '#8e44ad'
                    ],
                    borderWidth: 2,
                    borderRadius: 8,
                    hoverBackgroundColor: '#1a1a1a'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    cornerRadius: 8,
                    callbacks: {
                        afterLabel: function(context) {
                            return 'Miglioramento stimato';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)',
                        drawBorder: true
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInDown 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.civica-card, .crisi-item, .solution-item, .azione-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ===== THEME TOGGLE (optional) =====
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ===== STATS ANIMATION =====
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        stat.textContent = '0';
        
        let current = 0;
        const target = parseFloat(finalValue);
        const increment = target / 50;
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = finalValue;
                clearInterval(counter);
            } else {
                if (Number.isInteger(target)) {
                    stat.textContent = Math.floor(current);
                } else {
                    stat.textContent = current.toFixed(1);
                }
            }
        }, 30);
    });
};

// Trigger stats animation when section comes into view
const crisisObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            crisisObserver.unobserve(entry.target);
        }
    });
});

const crisisSection = document.querySelector('.crisi');
if (crisisSection) {
    crisisObserver.observe(crisisSection);
}

// ===== PRINT-FRIENDLY STYLES =====
@media print {
    .navbar, .footer {
        display: none;
    }
    
    body {
        background: white;
    }
    
    .section {
        page-break-inside: avoid;
    }
}
