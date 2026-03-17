// ===== GESTION DU MENU BURGER =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// ===== GESTION DU THÈME AVEC ANIMATION =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const circle = document.createElement('div');
    circle.classList.add('theme-transition');
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    document.body.appendChild(circle);

    circle.offsetHeight; // force reflow
    circle.classList.add('active');

    setTimeout(() => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
        circle.remove();
    }, 600);
});

// ===== GESTION DE LA LANGUE =====
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
    alert('Changement de langue (simulé) - Passage en anglais');
    // Ici vous pourriez changer le contenu textuel du site
});

// ===== GESTION DE LA CONNEXION =====
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const loginClose = document.getElementById('loginClose');
const loginSubmit = document.getElementById('loginSubmit');

loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

loginClose.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});

loginSubmit.addEventListener('click', () => {
    alert('Connexion simulée !');
    loginModal.classList.add('hidden');
    // Changer le bouton en message de bienvenue
    loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> Bonjour, Étudiant';
    loginBtn.classList.add('text-btn');
});

// Gestion des liens du menu mobile pour la connexion
document.getElementById('mobileLogin').addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
});

// ===== GESTION DU SONDAGE =====
const surveyPopup = document.getElementById('surveyPopup');
const closeSurvey = document.getElementById('closeSurvey');

setTimeout(() => {
    surveyPopup.classList.remove('hidden');
}, 3000);

closeSurvey.addEventListener('click', () => {
    surveyPopup.classList.add('hidden');
});

document.querySelectorAll('.survey-options button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        alert(`Merci ! Vous utilisez surtout ${e.target.innerText}`);
        surveyPopup.classList.add('hidden');
    });
});

// ===== GESTION DU PANNEAU D'ACCESSIBILITÉ =====
const accessibilityLink = document.getElementById('accessibilityLink');
const accessibilityPanel = document.getElementById('accessibilityPanel');
const closeAccessibility = document.getElementById('closeAccessibility');

accessibilityLink.addEventListener('click', (e) => {
    e.preventDefault();
    accessibilityPanel.classList.toggle('hidden');
});

closeAccessibility.addEventListener('click', () => {
    accessibilityPanel.classList.add('hidden');
});

const fontSizeSelect = document.getElementById('fontSize');
fontSizeSelect.addEventListener('change', (e) => {
    const size = e.target.value;
    if (size === 'large') {
        document.body.style.fontSize = '1.2rem';
    } else if (size === 'xlarge') {
        document.body.style.fontSize = '1.4rem';
    } else {
        document.body.style.fontSize = '1rem';
    }
});

const contrastSelect = document.getElementById('contrast');
contrastSelect.addEventListener('change', (e) => {
    if (e.target.value === 'high') {
        document.body.style.filter = 'contrast(1.5)';
    } else {
        document.body.style.filter = 'none';
    }
});

// ===== GESTION DE LA FAQ / BOUTON D'AIDE =====
const helpButton = document.getElementById('helpButton');
helpButton.addEventListener('click', () => {
    alert('Redirection vers la page FAQ (simulée)');
});

// ===== GESTION DES LIENS DU FOOTER =====
document.getElementById('aboutLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Page À propos (simulée)');
});

document.getElementById('faqLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Page FAQ (simulée)');
});

document.getElementById('contactLink').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Page Contact (simulée)');
});

// ===== GESTION DES TUTORIELS VIDÉO =====
document.querySelectorAll('.video-tutoriel').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const videoUrl = btn.dataset.video || 'https://www.youtube.com/watch?v=...';
        alert(`Lecture de la vidéo : ${videoUrl} (simulé)`);
    });
});

// ===== REDIRECTION DES CARTES =====
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.closest('.btn') || e.target.closest('.video-tutoriel')) return;
        const url = this.dataset.url;
        if (url && url !== '#') {
            window.location.href = url;
        } else {
            alert('Lien non configuré pour le moment.');
        }
    });
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.card');
        const url = card.dataset.url;
        if (url && url !== '#') {
            window.location.href = url;
        } else {
            alert('Lien non configuré pour le moment.');
        }
    });
});

// ===== GESTION DU SÉLECTEUR DE LANGUE DANS LE MENU MOBILE =====
document.getElementById('mobileLang').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Version anglaise (simulée)');
    mobileMenu.classList.add('hidden');
});

// ===== FERMETURE DES MODALES AU CLIC SUR LE FOND =====
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.add('hidden');
    }
});
