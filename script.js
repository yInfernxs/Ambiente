// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    initializeChart();
    setupScrollAnimations();
});

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
                    borderRadius: 5
                }
            ]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
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
                        label: function(context) {
                            return context.parsed.y + '% di miglioramento';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentuale di Efficienza (%)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
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
                            size: 11,
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

// ===== SETUP SCROLL ANIMATIONS =====
function setupScrollAnimations() {
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

    // Animate stats numbers
    animateStats();
}

// ===== ANIMATE STATS =====
function animateStats() {
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
}
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
