// ===== GESTION DU MENU BURGER =====
const menuToggle = document.getElementById("menuToggle");
const menuToggleChat = document.getElementById("menuToggleChat");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

menuToggle.addEventListener("click", toggleMobileMenu);
menuToggleChat.addEventListener("click", toggleMobileMenu);

document.addEventListener("click", (e) => {
  if (
    !menuToggle.contains(e.target) &&
    !menuToggleChat.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
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
const loginBtns = document.querySelectorAll(
  "#loginBtn, #loginBtnChat, #mobileLogin"
);
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");
const loginSubmit = document.getElementById("loginSubmit");

function openLoginModal() {
  loginModal.classList.remove("hidden");
}

loginBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openLoginModal();
    mobileMenu.classList.add("hidden");
  });
});

loginClose.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

loginSubmit.addEventListener("click", () => {
  alert("Connexion simulée !");
  loginModal.classList.add("hidden");
  // Mettre à jour les boutons de connexion
  loginBtns.forEach((btn) => {
    btn.innerHTML = '<i class="fas fa-user-circle"></i> Bonjour, Étudiant';
    btn.classList.add("text-btn");
  });
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
const chatFullscreen = document.getElementById("orientiug-chat-fullscreen");
const goToChatBtn = document.getElementById("go-to-chat");
const backButton = document.getElementById("back-button");
const headerIcon = document.getElementById("header-icon");
const headerTitle = document.getElementById("header-title");
const logoArea = document.querySelector(".logo-area");
const footer = document.getElementById("main-footer");
const hubActions = document.getElementById("hub-actions");
const chatActions = document.getElementById("chat-actions");

function enterOrientIUG() {
  window.scrollTo(0, 0);
  hubSection.classList.add("hidden");
  orientiugSection.classList.remove("hidden");
  presentationDiv.classList.remove("hidden");
  chatFullscreen.classList.add("hidden");
  // Mise à jour de la Hubar
  headerIcon.className = "fas fa-compass";
  headerTitle.textContent = "OrientIUG";
  backButton.classList.remove("hidden");
  hubActions.classList.add("hidden");
  chatActions.classList.remove("hidden");
  document.body.classList.remove("chat-active"); // pas encore en chat
}

function returnToHub() {
  window.scrollTo(0, 0);
  hubSection.classList.remove("hidden");
  orientiugSection.classList.add("hidden");
  headerIcon.className = "fas fa-cubes";
  headerTitle.textContent = "Hub IUG";
  backButton.classList.add("hidden");
  hubActions.classList.remove("hidden");
  chatActions.classList.add("hidden");
  document.body.classList.remove("chat-active");
}

function showChatFullscreen() {
  window.scrollTo(0, 0);
  presentationDiv.classList.add("hidden");
  chatFullscreen.classList.remove("hidden");
  document.body.classList.add("chat-active"); // pour masquer le footer et le bouton aide
  // Charger l'historique des messages
  loadChatMessages();
}

orientiugAccessBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  enterOrientIUG();
});

orientiugCard.addEventListener("click", (e) => {
  if (e.target.closest(".btn") || e.target.closest(".video-tutoriel")) return;
  enterOrientIUG();
});

goToChatBtn.addEventListener("click", showChatFullscreen);

// Le bouton retour dans la Hubar (flèche) : en chat, retour direct au hub
backButton.addEventListener("click", () => {
  if (!chatFullscreen.classList.contains("hidden")) {
    // Si on est dans le chat, retour au hub directement
    returnToHub();
  } else if (!presentationDiv.classList.contains("hidden")) {
    // Si on est dans la présentation, retour au hub aussi (cohérent)
    returnToHub();
  } else {
    // Sinon, retour au hub par défaut
    returnToHub();
  }
});

// Le logo permet aussi de revenir au hub
logoArea.addEventListener("click", (e) => {
  if (e.target.closest(".back-button")) return;
  if (!hubSection.classList.contains("hidden")) return; // déjà dans le hub
  returnToHub();
});

// ===== GESTION DU CHAT FULLSCREEN =====
const chatMessages = document.getElementById("chat-fullscreen-messages");
const chatInput = document.getElementById("chat-fullscreen-input");
const sendBtn = document.getElementById("send-fullscreen-btn");
const attachBtn = document.getElementById("attach-btn");
const emojiBtn = document.getElementById("emoji-btn");
const voiceBtn = document.getElementById("voice-btn");
const toolbar = document.getElementById("chat-toolbar");
const voiceCallBtn = document.getElementById("voice-call-btn");
const threeDotsBtn = document.getElementById("three-dots-btn");

// Variables pour les messages et dates
let messages = [];
let messageCount = parseInt(localStorage.getItem("messageCount")) || 0;

// Fonction pour formater une date en label (Aujourd'hui, Hier, etc.)
function getDateLabel(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const msgDate = new Date(date);
  msgDate.setHours(0, 0, 0, 0);

  if (msgDate.getTime() === today.getTime()) {
    return "Aujourd'hui";
  } else if (msgDate.getTime() === yesterday.getTime()) {
    return "Hier";
  } else {
    const diffDays = Math.round((today - msgDate) / (1000 * 60 * 60 * 24));
    if (diffDays < 7 && diffDays > 0) {
      // Nom du jour
      return new Date(date).toLocaleDateString("fr-FR", { weekday: "long" });
    } else {
      // Date complète
      return new Date(date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
    }
  }
}

// Ajouter un séparateur de date si nécessaire (comparaison avec le dernier message)
function addDateSeparator(date, force = false) {
  const lastSeparator = chatMessages.querySelector(
    ".date-separator:last-child"
  );
  const lastMessage = chatMessages.querySelector(".message-wrapper:last-child");
  let lastDate = null;
  if (lastMessage) {
    // Récupérer la date depuis l'attribut data-date du dernier message
    const lastMsgDate = lastMessage.dataset.date;
    if (lastMsgDate) {
      lastDate = new Date(lastMsgDate);
      lastDate.setHours(0, 0, 0, 0);
    }
  }
  const currentDate = new Date(date);
  currentDate.setHours(0, 0, 0, 0);

  if (!lastDate || lastDate.getTime() !== currentDate.getTime() || force) {
    const separator = document.createElement("div");
    separator.classList.add("date-separator");
    separator.innerText = getDateLabel(date);
    chatMessages.appendChild(separator);
  }
}

function addMessage(text, isUser = false, timestamp = null) {
  const messageDate = timestamp ? new Date(timestamp) : new Date();
  addDateSeparator(messageDate);

  const wrapper = document.createElement("div");
  wrapper.classList.add("message-wrapper");
  wrapper.classList.add(isUser ? "user" : "bot");
  wrapper.dataset.date = messageDate.toISOString(); // stocker la date pour les séparateurs futurs

  const bubble = document.createElement("div");
  bubble.classList.add("message-bubble");
  bubble.innerText = text;

  const time = document.createElement("div");
  time.classList.add("message-time");
  time.innerText = messageDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  bubble.appendChild(time);
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Sauvegarder le message dans le localStorage
  messages.push({ text, isUser, timestamp: messageDate.toISOString() });
  localStorage.setItem("orientiugChatMessages", JSON.stringify(messages));

  if (isUser) {
    messageCount++;
    localStorage.setItem("messageCount", messageCount);
    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      addMessage(botResponse, false);
    }, 1000);
  }
}

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

// Charger l'historique depuis localStorage
function loadChatMessages() {
  const saved = localStorage.getItem("orientiugChatMessages");
  if (saved) {
    try {
      messages = JSON.parse(saved);
      chatMessages.innerHTML = "";
      let lastDate = null;
      messages.forEach((msg) => {
        const msgDate = new Date(msg.timestamp);
        // Ajouter séparateur si changement de jour
        const currentDate = new Date(msgDate);
        currentDate.setHours(0, 0, 0, 0);
        if (!lastDate || lastDate.getTime() !== currentDate.getTime()) {
          const separator = document.createElement("div");
          separator.classList.add("date-separator");
          separator.innerText = getDateLabel(msgDate);
          chatMessages.appendChild(separator);
          lastDate = currentDate;
        }
        const wrapper = document.createElement("div");
        wrapper.classList.add("message-wrapper");
        wrapper.classList.add(msg.isUser ? "user" : "bot");
        wrapper.dataset.date = msg.timestamp;
        const bubble = document.createElement("div");
        bubble.classList.add("message-bubble");
        bubble.innerText = msg.text;
        const time = document.createElement("div");
        time.classList.add("message-time");
        time.innerText = msgDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        });
        bubble.appendChild(time);
        wrapper.appendChild(bubble);
        chatMessages.appendChild(wrapper);
      });
      chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (e) {
      console.error("Erreur de chargement de l'historique", e);
      initDefaultMessage();
    }
  } else {
    initDefaultMessage();
  }
}

function initDefaultMessage() {
  messages = [];
  addMessage(
    "Bonjour ! Je suis votre assistant d'orientation. Posez-moi une question sur les filières, les débouchés, ou laissez-moi vous guider.",
    false
  );
}

// Envoi de message
sendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (text === "") return;
  addMessage(text, true);
  chatInput.value = "";
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendBtn.click();
  }
});

// Bouton pièce jointe : afficher/masquer la barre d'outils
attachBtn.addEventListener("click", () => {
  toolbar.classList.toggle("hidden");
});

// Simuler les actions des boutons
emojiBtn.addEventListener("click", () => {
  alert("Sélecteur d’émojis (simulé)");
});

voiceBtn.addEventListener("click", () => {
  alert("Enregistrement vocal (simulé)");
});

voiceCallBtn.addEventListener("click", () => {
  alert("Appel vocal (simulé)");
});

threeDotsBtn.addEventListener("click", () => {
  alert("Menu à trois points (simulé)");
});

// Cacher la barre d'outils si on clique ailleurs
document.addEventListener("click", (e) => {
  if (!attachBtn.contains(e.target) && !toolbar.contains(e.target)) {
    toolbar.classList.add("hidden");
  }
});

// Actions de la barre d'outils
document.querySelectorAll(".chat-toolbar button").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`Action : ${btn.innerText} (simulée)`);
    toolbar.classList.add("hidden");
  });
});

// ===== FERMETURE DES MODALES AU CLIC SUR LE FOND =====
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});
