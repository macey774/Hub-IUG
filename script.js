// ===== GESTION DU MENU BURGER =====
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});

// ===== GESTION DU THÈME =====
const themeToggles = document.querySelectorAll(
  "#themeToggle, #mobileThemeToggle"
);
const themeIcons = {
  desktop: document.querySelector("#themeToggle i"),
  mobile: document.querySelector("#mobileThemeToggle i")
};

function setThemeIcon(isDark) {
  if (themeIcons.desktop) {
    themeIcons.desktop.className = isDark ? "fas fa-moon" : "fas fa-sun";
  }
  if (themeIcons.mobile) {
    themeIcons.mobile.className = isDark ? "fas fa-moon" : "fas fa-sun";
  }
  const mobileThemeText = document.querySelector("#mobileThemeToggle");
  if (mobileThemeText) {
    mobileThemeText.innerHTML = `<i class="fas ${
      isDark ? "fa-moon" : "fa-sun"
    }"></i> ${isDark ? "Mode clair" : "Mode sombre"}`;
  }
}

themeToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    setThemeIcon(isDark);
    mobileMenu.classList.add("hidden");
  });
});

if (document.body.classList.contains("dark-theme")) {
  setThemeIcon(true);
}

// ===== GESTION DE LA LANGUE =====
const langToggles = document.querySelectorAll("#langToggle, #mobileLangToggle");
langToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Changement de langue (simulé) - Passage en anglais");
    mobileMenu.classList.add("hidden");
  });
});

// ===== GESTION DE LA CONNEXION =====
const loginBtn = document.getElementById("loginBtn");
const mobileLogin = document.getElementById("mobileLogin");
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");
const loginSubmit = document.getElementById("loginSubmit");

function openLoginModal() {
  loginModal.classList.remove("hidden");
}

loginBtn.addEventListener("click", openLoginModal);
mobileLogin.addEventListener("click", (e) => {
  e.preventDefault();
  openLoginModal();
  mobileMenu.classList.add("hidden");
});

loginClose.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

loginSubmit.addEventListener("click", () => {
  alert("Connexion simulée !");
  loginModal.classList.add("hidden");
  loginBtn.innerHTML = '<i class="fas fa-user-circle"></i> Bonjour, Étudiant';
  loginBtn.classList.add("text-btn");
});

// ===== GESTION DU SONDAGE =====
const surveyPopup = document.getElementById("surveyPopup");
const closeSurvey = document.getElementById("closeSurvey");

setTimeout(() => {
  surveyPopup.classList.remove("hidden");
}, 3000);

closeSurvey.addEventListener("click", () => {
  surveyPopup.classList.add("hidden");
});

document.querySelectorAll(".survey-options button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    alert(`Merci ! Vous utilisez surtout ${e.target.innerText}`);
    surveyPopup.classList.add("hidden");
  });
});

// ===== GESTION DU PANNEAU D'ACCESSIBILITÉ =====
const accessibilityLink = document.getElementById("accessibilityLink");
const accessibilityPanel = document.getElementById("accessibilityPanel");
const closeAccessibility = document.getElementById("closeAccessibility");

accessibilityLink.addEventListener("click", (e) => {
  e.preventDefault();
  accessibilityPanel.classList.toggle("hidden");
});

closeAccessibility.addEventListener("click", () => {
  accessibilityPanel.classList.add("hidden");
});

const fontSizeSelect = document.getElementById("fontSize");
fontSizeSelect.addEventListener("change", (e) => {
  const size = e.target.value;
  if (size === "large") {
    document.body.style.fontSize = "1.2rem";
  } else if (size === "xlarge") {
    document.body.style.fontSize = "1.4rem";
  } else {
    document.body.style.fontSize = "1rem";
  }
});

const contrastSelect = document.getElementById("contrast");
contrastSelect.addEventListener("change", (e) => {
  if (e.target.value === "high") {
    document.body.style.filter = "contrast(1.5)";
  } else {
    document.body.style.filter = "none";
  }
});

// ===== GESTION DE LA FAQ / BOUTON D'AIDE =====
const helpButton = document.getElementById("helpButton");
helpButton.addEventListener("click", () => {
  alert("Redirection vers la page FAQ (simulée)");
});

// ===== GESTION DES LIENS DU FOOTER =====
document.getElementById("aboutLink").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Page À propos (simulée)");
});

document.getElementById("faqLink").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Page FAQ (simulée)");
});

document.getElementById("contactLink").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Page Contact (simulée)");
});

// ===== GESTION DES TUTORIELS VIDÉO =====
document.querySelectorAll(".video-tutoriel").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const videoUrl = btn.dataset.video || "https://www.youtube.com/watch?v=...";
    alert(`Lecture de la vidéo : ${videoUrl} (simulé)`);
  });
});

// ===== GESTION DES AUTRES CARTES (sauf OrientIUG) =====
document.querySelectorAll(".card:not(#orientiug-card)").forEach((card) => {
  card.addEventListener("click", function (e) {
    if (e.target.closest(".btn") || e.target.closest(".video-tutoriel")) return;
    const url = this.dataset.url;
    if (url && url !== "#") {
      window.location.href = url;
    } else {
      alert("Lien non configuré pour le moment.");
    }
  });
});

document.querySelectorAll(".card:not(#orientiug-card) .btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const card = this.closest(".card");
    const url = card.dataset.url;
    if (url && url !== "#") {
      window.location.href = url;
    } else {
      alert("Lien non configuré pour le moment.");
    }
  });
});

// ===== GESTION DE LA NAVIGATION ORIENTIUG =====
const orientiugCard = document.getElementById("orientiug-card");
const orientiugAccessBtn = document.getElementById("orientiug-access");
const hubSection = document.getElementById("hub-section");
const orientiugSection = document.getElementById("orientiug-section");
const presentationDiv = document.getElementById("orientiug-presentation");
const chatDiv = document.getElementById("orientiug-interface");
const goToChatBtn = document.getElementById("go-to-chat");
const backButton = document.getElementById("back-button");
const headerIcon = document.getElementById("header-icon");
const headerTitle = document.getElementById("header-title");
const logoArea = document.querySelector(".logo-area");

function enterOrientIUG() {
  hubSection.classList.add("hidden");
  orientiugSection.classList.remove("hidden");
  presentationDiv.classList.remove("hidden");
  chatDiv.classList.add("hidden");
  headerIcon.className = "fas fa-compass";
  headerTitle.textContent = "OrientIUG";
  backButton.classList.remove("hidden");
}

function returnToHub() {
  hubSection.classList.remove("hidden");
  orientiugSection.classList.add("hidden");
  headerIcon.className = "fas fa-cubes";
  headerTitle.textContent = "Hub IUG";
  backButton.classList.add("hidden");
}

orientiugAccessBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  enterOrientIUG();
});

orientiugCard.addEventListener("click", (e) => {
  if (e.target.closest(".btn") || e.target.closest(".video-tutoriel")) return;
  enterOrientIUG();
});

goToChatBtn.addEventListener("click", () => {
  presentationDiv.classList.add("hidden");
  chatDiv.classList.remove("hidden");
  // Charger l'historique quand on ouvre le chat
  loadChatHistory();
});

backButton.addEventListener("click", returnToHub);

logoArea.addEventListener("click", (e) => {
  if (e.target.closest(".back-button")) return;
  if (!hubSection.classList.contains("hidden")) return;
  returnToHub();
});

// ===== FONCTIONNALITÉS DU CHAT =====
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendButton = document.getElementById("send-message");
const suggestionBtns = document.querySelectorAll(
  ".suggestion-btn:not(#start-quiz)"
);
const startQuizBtn = document.getElementById("start-quiz");
const typingIndicator = document.getElementById("typing-indicator");
const scrollDownBtn = document.getElementById("scroll-down-btn");

// Variables pour le quiz
let quizActive = false;
let quizStep = 0;
const quizQuestions = [
  {
    question: "Quel domaine vous attire le plus ?",
    options: [
      "Gestion / Commerce",
      "Informatique / Tech",
      "Sciences / Environnement",
      "Je ne sais pas encore"
    ]
  },
  {
    question: "Préférez-vous travailler plutôt en équipe ou en autonomie ?",
    options: ["En équipe", "En autonomie", "Les deux"]
  },
  {
    question: "Aimez-vous les chiffres et l'analyse ?",
    options: ["Oui, beaucoup", "Un peu", "Pas du tout"]
  }
];
const quizRecommendations = {
  "Gestion / Commerce": "La filière ESG est faite pour vous !",
  "Informatique / Tech":
    "Rejoignez l'ISTA pour une carrière dans le numérique.",
  "Sciences / Environnement":
    "L'ISA vous ouvrira les portes de l'agronomie et du développement durable.",
  "Je ne sais pas encore":
    "Pas d'inquiétude ! Venez échanger avec nos conseillers."
};

// Badges
let messageCount = parseInt(localStorage.getItem("messageCount")) || 0;
const badgeThresholds = [5, 20, 50];
const badgeMessages = {
  5: "🎉 Félicitations ! Vous avez posé 5 questions. Badge 'Curieux' débloqué !",
  20: "🏆 Incroyable ! 20 questions ! Vous êtes un 'Explorateur' !",
  50: "🌟 50 questions ! Vous méritez le badge 'Légende' !"
};

// Mise en évidence des mots-clés
function highlightKeywords(text) {
  const keywords = [
    "débouchés",
    "admission",
    "esg",
    "ista",
    "isa",
    "informatique",
    "gestion",
    "agronomie"
  ];
  let newText = text;
  keywords.forEach((keyword) => {
    const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
    newText = newText.replace(
      regex,
      `<span class="highlight-keyword" title="En savoir plus sur ${keyword}">$1</span>`
    );
  });
  return newText;
}

// Ajouter un message avec horodatage et évaluation
function addMessage(text, isUser = false, timestamp = null, save = true) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(isUser ? "user-message" : "bot-message");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("message-content");
  // Mise en évidence des mots-clés pour les réponses du bot
  if (!isUser) {
    text = highlightKeywords(text);
  }
  contentDiv.innerHTML = text;
  messageDiv.appendChild(contentDiv);

  const footerDiv = document.createElement("div");
  footerDiv.classList.add("message-footer");

  const time = timestamp || new Date().toLocaleTimeString();
  const timeSpan = document.createElement("span");
  timeSpan.classList.add("message-timestamp");
  timeSpan.innerText = time;
  footerDiv.appendChild(timeSpan);

  if (!isUser) {
    // Boutons d'évaluation
    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("rating-buttons");
    ratingDiv.innerHTML = `
            <button class="rating-btn up" title="Utile"><i class="fas fa-thumbs-up"></i></button>
            <button class="rating-btn down" title="Pas utile"><i class="fas fa-thumbs-down"></i></button>
        `;
    ratingDiv.querySelectorAll(".rating-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const value = btn.classList.contains("up") ? "up" : "down";
        const ratings =
          JSON.parse(localStorage.getItem("orientiugRatings")) || {};
        const msgId = Date.now() + "-" + Math.random();
        ratings[msgId] = { text, value };
        localStorage.setItem("orientiugRatings", JSON.stringify(ratings));
        btn.parentElement
          .querySelectorAll(".rating-btn")
          .forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
    footerDiv.appendChild(ratingDiv);
  }

  messageDiv.appendChild(footerDiv);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  if (save) {
    saveChatHistory();
  }

  if (isUser) {
    messageCount++;
    localStorage.setItem("messageCount", messageCount);
    checkBadges();
  }
}

// Sauvegarder l'historique
function saveChatHistory() {
  const messages = [];
  document.querySelectorAll("#chat-messages .message").forEach((msgEl) => {
    const isUser = msgEl.classList.contains("user-message");
    const textEl = msgEl.querySelector(".message-content");
    const text = textEl ? textEl.innerText : "";
    const timestamp =
      msgEl.querySelector(".message-timestamp")?.innerText ||
      new Date().toLocaleTimeString();
    messages.push({ text, isUser, timestamp });
  });
  localStorage.setItem("orientiugChatHistory", JSON.stringify(messages));
}

// Charger l'historique
function loadChatHistory() {
  const saved = localStorage.getItem("orientiugChatHistory");
  if (saved) {
    try {
      const messages = JSON.parse(saved);
      chatMessages.innerHTML = ""; // vider les messages par défaut
      messages.forEach((msg) => {
        addMessage(msg.text, msg.isUser, msg.timestamp, false);
      });
    } catch (e) {
      console.error("Erreur de chargement de l'historique");
    }
  } else {
    // Message de bienvenue par défaut
    chatMessages.innerHTML = ""; // vider
    addMessage(
      "Bonjour ! Je suis votre assistant d'orientation. Posez-moi une question sur les filières, les débouchés, ou laissez-moi vous guider.",
      false,
      null,
      false
    );
  }
}

// Indicateur de frappe
function showTypingIndicator() {
  typingIndicator.classList.remove("hidden");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  typingIndicator.classList.add("hidden");
}

// Réponse du bot (simulée)
function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  if (msg.includes("esg") || msg.includes("débouchés")) {
    return "La filière ESG prépare aux métiers de la gestion, du commerce et du management. Les débouchés incluent responsable RH, chargé de marketing, ou encore contrôleur de gestion.";
  } else if (msg.includes("ista") || msg.includes("informatique")) {
    return "ISTA forme aux métiers de l'informatique et du numérique. Vous pouvez devenir développeur, administrateur réseau, ou data analyst.";
  } else if (msg.includes("isa") || msg.includes("agronomie")) {
    return "ISA est spécialisé dans les sciences agronomiques et l'environnement. Les diplômés travaillent dans l'agroalimentaire, la gestion des ressources naturelles, ou la recherche.";
  } else if (msg.includes("admission") || msg.includes("condition")) {
    return "Les conditions d'admission varient selon les filières. En général, il faut un baccalauréat (séries selon la filière) et passer une étude de dossier. Consultez le site de l'IUG pour plus de détails.";
  } else if (msg.includes("merci")) {
    return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
  } else {
    return "Je n'ai pas encore appris à répondre à cette question. Pouvez-vous reformuler ou contacter un conseiller ?";
  }
}

// Envoi d'un message
function sendMessage() {
  const text = chatInput.value.trim();
  if (text === "") return;

  // Si un quiz est actif, traiter la réponse
  if (quizActive) {
    handleQuizAnswer(text);
    chatInput.value = "";
    adjustTextareaHeight();
    return;
  }

  addMessage(text, true);
  chatInput.value = "";
  adjustTextareaHeight();

  // Montrer l'indicateur de frappe
  showTypingIndicator();

  // Simuler un délai de réponse
  setTimeout(() => {
    hideTypingIndicator();
    const response = getBotResponse(text);
    addMessage(response, false);
  }, 1500);
}

// Raccourcis clavier
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.ctrlKey) {
    e.preventDefault();
    sendMessage();
  } else if (e.key === "Escape") {
    chatInput.value = "";
    adjustTextareaHeight();
  }
});

// Zone de saisie extensible
function adjustTextareaHeight() {
  chatInput.style.height = "auto";
  chatInput.style.height = chatInput.scrollHeight + "px";
}

chatInput.addEventListener("input", adjustTextareaHeight);

// Bouton de défilement rapide
chatMessages.addEventListener("scroll", () => {
  const isScrolled =
    chatMessages.scrollTop <
    chatMessages.scrollHeight - chatMessages.clientHeight - 50;
  scrollDownBtn.classList.toggle("hidden", !isScrolled);
});

scrollDownBtn.addEventListener("click", () => {
  chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: "smooth" });
});

// Suggestions de questions (inchangé)
suggestionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const question = btn.textContent;
    chatInput.value = question;
    sendMessage();
  });
});

// ===== GESTION DU QUIZ =====
startQuizBtn.addEventListener("click", () => {
  quizActive = true;
  quizStep = 0;
  addMessage(
    "🎯 Commençons le quiz d'orientation ! Répondez aux questions.",
    false
  );
  setTimeout(() => {
    askNextQuizQuestion();
  }, 500);
});

function askNextQuizQuestion() {
  if (quizStep < quizQuestions.length) {
    const q = quizQuestions[quizStep];
    let optionsText = q.options.map((opt) => `• ${opt}`).join("\n");
    addMessage(q.question + "\n" + optionsText, false);
  } else {
    // Fin du quiz, donner une recommandation
    quizActive = false;
    // Pour l'exemple, on prend la dernière réponse stockée
    const lastAnswer =
      localStorage.getItem("lastQuizAnswer") || "Gestion / Commerce";
    let recommendation =
      quizRecommendations[lastAnswer] ||
      "Contactez un conseiller pour plus d'aide.";
    addMessage(recommendation, false);
  }
}

function handleQuizAnswer(answer) {
  // Sauvegarder la réponse (pour la démo, on garde la dernière)
  localStorage.setItem("lastQuizAnswer", answer);
  quizStep++;
  setTimeout(() => {
    askNextQuizQuestion();
  }, 500);
}

// ===== GESTION DES BADGES =====
function checkBadges() {
  badgeThresholds.forEach((threshold) => {
    if (messageCount === threshold) {
      showBadgeNotification(badgeMessages[threshold]);
    }
  });
}

function showBadgeNotification(message) {
  const notif = document.createElement("div");
  notif.classList.add("badge-notification");
  notif.innerText = message;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// ===== FERMETURE DES MODALES AU CLIC SUR LE FOND =====
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});

// ===== GESTION DE LA NAVIGATION ORIENTIUG =====
// ... (les constantes existantes)

function enterOrientIUG() {
  window.scrollTo(0, 0); // scroll en haut
  hubSection.classList.add("hidden");
  orientiugSection.classList.remove("hidden");
  presentationDiv.classList.remove("hidden");
  chatDiv.classList.add("hidden");
  headerIcon.className = "fas fa-compass";
  headerTitle.textContent = "OrientIUG";
  backButton.classList.remove("hidden");
}

function returnToHub() {
  window.scrollTo(0, 0);
  hubSection.classList.remove("hidden");
  orientiugSection.classList.add("hidden");
  headerIcon.className = "fas fa-cubes";
  headerTitle.textContent = "Hub IUG";
  backButton.classList.add("hidden");
}

// Lors du passage de la présentation au chat
goToChatBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
  presentationDiv.classList.add("hidden");
  chatDiv.classList.remove("hidden");
  loadChatHistory();
});

// Si on ajoute un bouton pour revenir du chat à la présentation (optionnel)
// Dans notre cas, on a déjà un back-button global qui ramène au hub.
// Mais si on voulait revenir à la présentation depuis le chat, on pourrait ajouter un bouton dédié.
