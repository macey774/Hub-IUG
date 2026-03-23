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

// ===== GESTION DU THÈME GLOBAL =====
const themeToggles = document.querySelectorAll("#themeToggle, #mobileThemeToggle");
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
    showToast("Changement de langue (simulé) - Passage en anglais");
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
  showToast("Connexion simulée !");
  loginModal.classList.add("hidden");
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
    showToast(`Merci ! Vous utilisez surtout ${e.target.innerText}`);
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
    document.body.classList.add("contrast-high");
  } else {
    document.body.classList.remove("contrast-high");
  }
});

// ===== GESTION DE LA FAQ / BOUTON D'AIDE =====
const helpButton = document.getElementById("helpButton");
helpButton.addEventListener("click", () => {
  showToast("Redirection vers la page FAQ (simulée)");
});

// ===== GESTION DES LIENS DU FOOTER =====
document.getElementById("aboutLink").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Page À propos (simulée)");
});
document.getElementById("faqLink").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Page FAQ (simulée)");
});
document.getElementById("contactLink").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Page Contact (simulée)");
});

// ===== GESTION DES TUTORIELS VIDÉO =====
document.querySelectorAll(".video-tutoriel").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const videoUrl = btn.dataset.video || "https://www.youtube.com/watch?v=...";
    showToast(`Lecture de la vidéo : ${videoUrl} (simulé)`);
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
      showToast("Lien non configuré pour le moment.");
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
      showToast("Lien non configuré pour le moment.");
    }
  });
});

// ===== GESTION DE LA NAVIGATION ENTRE LES SECTIONS =====
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
const hubActions = document.getElementById("hub-actions");
const chatActions = document.getElementById("chat-actions");
const inscriptionSection = document.getElementById("inscription-section");

function enterOrientIUG() {
  window.scrollTo(0, 0);
  hubSection.classList.add("hidden");
  orientiugSection.classList.remove("hidden");
  presentationDiv.classList.remove("hidden");
  chatFullscreen.classList.add("hidden");
  inscriptionSection.classList.add("hidden");
  headerIcon.className = "fas fa-compass";
  headerTitle.textContent = "OrientIUG";
  backButton.classList.remove("hidden");
  hubActions.classList.add("hidden");
  chatActions.classList.remove("hidden");
  document.body.classList.remove("chat-active");
}

function returnToHub() {
  window.scrollTo(0, 0);
  hubSection.classList.remove("hidden");
  orientiugSection.classList.add("hidden");
  inscriptionSection.classList.add("hidden");
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
  document.body.classList.add("chat-active");
  loadChatMessages();
  loadChatTheme();
  // Précharger le modèle intelligent
  loadModel();
}

// Variables pour la page d'inscription
const inscriptionActions = document.getElementById("inscription-actions");
const clearFormBtn = document.getElementById("clear-form-btn");
const downloadFormBtn = document.getElementById("download-form-btn");
let previousChatState = null; // store whether we were in presentation or chat

// ===== DATE AUTOMATIQUE =====
function setCurrentDate() {
  const dateInput = document.getElementById("current-date-input");
  if (dateInput) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    dateInput.value = `${day}/${month}/${year}`;
  }
}

// ===== ANNÉE ACADEMIQUE AUTOMATIQUE =====
function getAcademicYear() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0 = janvier, 8 = septembre
  const startYear = currentMonth >= 8 ? currentYear : currentYear - 1;
  return `${startYear}-${startYear + 1}`;
}

function setAcademicYear() {
  const span = document.getElementById("academic-year");
  if (span) {
    span.textContent = getAcademicYear();
  }
}

function enterInscriptionPage() {
  window.scrollTo(0, 0);

  // Save current chat state (if we are in orientiug section)
  if (!orientiugSection.classList.contains("hidden")) {
    previousChatState = {
      presentationVisible: !presentationDiv.classList.contains("hidden"),
      chatVisible: !chatFullscreen.classList.contains("hidden")
    };
  } else {
    previousChatState = null;
  }

  hubSection.classList.add("hidden");
  orientiugSection.classList.add("hidden");
  inscriptionSection.classList.remove("hidden");
  headerIcon.className = "fas fa-pen-alt";
  headerTitle.textContent = "Fiche d'inscription";
  backButton.classList.remove("hidden");
  document.body.classList.remove("chat-active");
  hubActions.classList.add("hidden");
  chatActions.classList.add("hidden");
  inscriptionActions.classList.remove("hidden");

  // Remplir la date automatiquement
  setCurrentDate();
  setAcademicYear();
}

function exitInscriptionPage() {
  inscriptionSection.classList.add("hidden");
  inscriptionActions.classList.add("hidden");

  if (previousChatState) {
    // Restore previous chat state
    orientiugSection.classList.remove("hidden");
    if (previousChatState.presentationVisible) {
      presentationDiv.classList.remove("hidden");
      chatFullscreen.classList.add("hidden");
    } else if (previousChatState.chatVisible) {
      presentationDiv.classList.add("hidden");
      chatFullscreen.classList.remove("hidden");
      document.body.classList.add("chat-active");
    }
    headerIcon.className = "fas fa-compass";
    headerTitle.textContent = "OrientIUG";
    backButton.classList.remove("hidden");
    hubActions.classList.add("hidden");
    chatActions.classList.remove("hidden");
  } else {
    // Fallback to hub
    hubSection.classList.remove("hidden");
    headerIcon.className = "fas fa-cubes";
    headerTitle.textContent = "Hub IUG";
    backButton.classList.add("hidden");
    hubActions.classList.remove("hidden");
    chatActions.classList.add("hidden");
  }

  // Do NOT reset the form (keep filled data)
  const feedback = document.getElementById("inscription-feedback");
  if (feedback) feedback.textContent = "";
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

// Gestion du bouton retour (unique)
function handleBackButton() {
  if (!inscriptionSection.classList.contains("hidden")) {
    exitInscriptionPage();
  } else if (!chatFullscreen.classList.contains("hidden")) {
    returnToHub();
  } else if (!presentationDiv.classList.contains("hidden")) {
    returnToHub();
  } else if (!orientiugSection.classList.contains("hidden")) {
    returnToHub();
  } else {
    returnToHub();
  }
}
backButton.addEventListener("click", handleBackButton);

logoArea.addEventListener("click", (e) => {
  if (e.target.closest(".back-button")) return;
  if (!hubSection.classList.contains("hidden")) return;
  returnToHub();
});

// ===== GESTION DU CHAT FULLSCREEN =====
const chatMessages = document.getElementById("chat-fullscreen-messages");
const chatInput = document.getElementById("chat-fullscreen-input");
const emojiStickerBtn = document.getElementById("emoji-sticker-btn");
const attachDocBtn = document.getElementById("attach-doc-btn");
const cameraBtn = document.getElementById("camera-btn");
const sendVoiceBtn = document.getElementById("send-voice-btn");
const toolbar = document.getElementById("chat-toolbar");
const voiceCallBtn = document.getElementById("voice-call-btn");
const threeDotsBtn = document.getElementById("three-dots-btn");

let messages = [];
let messageCount = parseInt(localStorage.getItem("messageCount")) || 0;

function autoResizeTextarea() {
  chatInput.style.height = "auto";
  chatInput.style.height = chatInput.scrollHeight + "px";
}
chatInput.addEventListener("input", autoResizeTextarea);
autoResizeTextarea();

function getDateLabel(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const msgDate = new Date(date);
  msgDate.setHours(0, 0, 0, 0);

  if (msgDate.getTime() === today.getTime()) return "Aujourd'hui";
  if (msgDate.getTime() === yesterday.getTime()) return "Hier";
  const diffDays = Math.round((today - msgDate) / (1000 * 60 * 60 * 24));
  if (diffDays < 7 && diffDays > 0) {
    return new Date(date).toLocaleDateString("fr-FR", { weekday: "long" });
  }
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function addDateSeparator(date) {
  const lastMessage = chatMessages.querySelector(".message-wrapper:last-child");
  let lastDate = null;
  if (lastMessage && lastMessage.dataset.date) {
    lastDate = new Date(lastMessage.dataset.date);
    lastDate.setHours(0, 0, 0, 0);
  }
  const currentDate = new Date(date);
  currentDate.setHours(0, 0, 0, 0);
  if (!lastDate || lastDate.getTime() !== currentDate.getTime()) {
    const separator = document.createElement("div");
    separator.classList.add("date-separator");
    separator.innerText = getDateLabel(date);
    chatMessages.appendChild(separator);
  }
}

// ===== INDICATEUR DE FRAPPE =====
const typingIndicator = document.createElement("div");
typingIndicator.className = "typing-indicator hidden";
typingIndicator.innerHTML = '<span></span><span></span><span></span>';
chatMessages.parentNode.insertBefore(typingIndicator, chatMessages.nextSibling);

function showTypingIndicator() {
  typingIndicator.classList.remove("hidden");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  typingIndicator.classList.add("hidden");
}

// ===== MODÈLE INTELLIGENT (Transformers.js) =====
let model = null;
let modelLoading = false;

async function loadModel() {
  if (model) return model;
  if (modelLoading) return;

  modelLoading = true;
  showToast("Chargement du modèle d'IA... (premier lancement un peu long)");

  try {
    // Vérifier que transformers est disponible
    if (typeof transformers === 'undefined') {
      throw new Error("Bibliothèque transformers.js non chargée");
    }
    const { pipeline } = transformers;
    model = await pipeline('text-generation', 'Xenova/distilgpt2');
    showToast("Modèle prêt ! Vous pouvez discuter.");
    return model;
  } catch (error) {
    console.error("Erreur chargement modèle", error);
    showToast("Impossible de charger le modèle. Utilisation du mode secours.");
    model = null;
  } finally {
    modelLoading = false;
  }
  return null;
}

async function getBotResponseFromModel(userMessage, history) {
  const m = await loadModel();
  if (!m) return fallbackResponse(userMessage);

  // Construire le prompt avec le contexte
  let prompt = `Contexte : Vous êtes OrientIUG, un assistant d'orientation de l'Institut Universitaire du Golfe de Guinée (IUG).\n`;
  prompt += `Vous connaissez les filières ESG (Gestion), ISTA (Informatique) et ISA (Agronomie), ainsi que les conditions d'admission, les pièces à fournir et la procédure d'inscription.\n`;
  prompt += `Répondez de manière concise et utile en français.\n\n`;

  // Ajouter l'historique des 6 derniers messages
  const recentHistory = history.slice(-6);
  for (let msg of recentHistory) {
    prompt += `${msg.isUser ? "Étudiant" : "Assistant"} : ${msg.text}\n`;
  }
  prompt += `Étudiant : ${userMessage}\nAssistant :`;

  try {
    const output = await m(prompt, {
      max_new_tokens: 100,
      temperature: 0.7,
      do_sample: true,
      pad_token_id: 50256
    });
    let reply = output[0].generated_text;
    // Extraire la partie après "Assistant :"
    const parts = reply.split("Assistant :");
    reply = parts[parts.length - 1].trim();
    if (!reply) return fallbackResponse(userMessage);
    return reply;
  } catch (error) {
    console.error("Erreur génération", error);
    return fallbackResponse(userMessage);
  }
}

function fallbackResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  if (msg.match(/^(bonjour|salut|coucou|hello|hey|yo)/i)) {
    return "Bonjour ! Je suis OrientIUG, votre assistant d'orientation. Je peux vous aider à découvrir les filières de l'IUG, les débouchés, et même vous guider pour votre inscription. Que souhaitez‑vous savoir ?";
  }
  if (msg.includes("qui es-tu") || msg.includes("qui êtes-vous") || msg.includes("c'est quoi orientiug")) {
    return "Je suis OrientIUG, un assistant virtuel conçu pour vous accompagner dans votre choix d'orientation à l'Institut Universitaire du Golfe de Guinée. Je connais toutes les filières, les débouchés et les conditions d'admission. N'hésitez pas à me poser des questions !";
  }
  if (msg.includes("présente iug") || msg.includes("qu'est-ce que l'iug") || msg.includes("c'est quoi l'iug") || msg.includes("parle moi de l'iug")) {
    return "L'Institut Universitaire du Golfe de Guinée (IUG) est un établissement d'enseignement supérieur réputé. Il propose trois grandes filières :\n• ESG – Gestion et commerce\n• ISTA – Informatique et technologies\n• ISA – Agronomie et environnement\nNos formations sont conçues pour répondre aux besoins du marché et former des professionnels compétents.";
  }
  if (msg.includes("inscription") || msg.includes("s'inscrire") || msg.includes("comment s'inscrire") || msg.includes("fiche d'inscription")) {
    return "Pour vous inscrire, vous devez remplir notre fiche d'inscription en ligne. Vous y trouverez tous les champs nécessaires (identité, coordonnées, parcours souhaité). <a href='#' onclick='enterInscriptionPage(); return false;' style='color: #3a7ca5; text-decoration: underline; cursor: pointer;'>Cliquez ici pour accéder à la fiche d'inscription</a>. Une fois remplie, vous pourrez la télécharger en PDF.";
  }
  if (msg.includes("merci") || msg.includes("c'est tout") || msg.includes("super")) {
    return "Avec plaisir ! Si vous souhaitez rejoindre l'IUG, n'hésitez pas à remplir notre fiche d'inscription : <a href='#' onclick='enterInscriptionPage(); return false;' style='color: #3a7ca5; text-decoration: underline; cursor: pointer;'>cliquez ici</a>. Bonne continuation !";
  }
  if (msg.includes("esg") || msg.includes("débouchés")) {
    return "La filière ESG prépare aux métiers de la gestion, du commerce et du management. Les débouchés incluent responsable RH, chargé de marketing, ou encore contrôleur de gestion.";
  }
  if (msg.includes("ista") || msg.includes("informatique")) {
    return "ISTA forme aux métiers de l'informatique et du numérique. Vous pouvez devenir développeur, administrateur réseau, ou data analyst.";
  }
  if (msg.includes("isa") || msg.includes("agronomie")) {
    return "ISA est spécialisé dans les sciences agronomiques et l'environnement. Les diplômés travaillent dans l'agroalimentaire, la gestion des ressources naturelles, ou la recherche.";
  }
  if (msg.includes("admission") || msg.includes("condition")) {
    return "Les conditions d'admission varient selon les filières. En général, il faut un baccalauréat (séries selon la filière) et passer une étude de dossier. Consultez le site de l'IUG pour plus de détails.";
  }
  if (msg.includes("contact") || msg.includes("téléphone") || msg.includes("email")) {
    return "Vous pouvez contacter l'IUG par téléphone au +237 6XX XX XX XX ou par email à contact@univ-iug.com. Pour toute question administrative, le secrétariat est ouvert du lundi au vendredi.";
  }
  return "Je n'ai pas encore appris à répondre à cette question. Pouvez-vous reformuler ou me poser une question sur les filières (ESG, ISTA, ISA), les débouchés, les conditions d'admission ou l'inscription ?";
}

function addMessage(text, isUser = false, timestamp = null) {
  const messageDate = timestamp ? new Date(timestamp) : new Date();
  addDateSeparator(messageDate);

  const wrapper = document.createElement("div");
  wrapper.classList.add("message-wrapper");
  wrapper.classList.add(isUser ? "user" : "bot");
  wrapper.dataset.date = messageDate.toISOString();

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

  messages.push({ text, isUser, timestamp: messageDate.toISOString() });
  localStorage.setItem("orientiugChatMessages", JSON.stringify(messages));

  if (isUser) {
    messageCount++;
    localStorage.setItem("messageCount", messageCount);

    // Afficher l'indicateur de frappe
    showTypingIndicator();

    // Appel au modèle intelligent
    getBotResponseFromModel(text, messages)
      .then(botResponse => {
        hideTypingIndicator();
        addMessage(botResponse, false);
      })
      .catch(error => {
        console.error(error);
        hideTypingIndicator();
        const fallback = fallbackResponse(text);
        addMessage(fallback, false);
      });
  }
}

function loadChatMessages() {
  const saved = localStorage.getItem("orientiugChatMessages");
  if (saved) {
    try {
      messages = JSON.parse(saved);
      chatMessages.innerHTML = "";
      let lastDate = null;
      messages.forEach((msg) => {
        const msgDate = new Date(msg.timestamp);
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

function updateSendButton() {
  if (chatInput.value.trim() === "") {
    sendVoiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    sendVoiceBtn.onclick = startVoiceRecording;
  } else {
    sendVoiceBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
    sendVoiceBtn.onclick = sendTextMessage;
  }
}

function sendTextMessage() {
  const text = chatInput.value.trim();
  if (text === "") return;
  addMessage(text, true);
  chatInput.value = "";
  autoResizeTextarea();
  updateSendButton();
}

function startVoiceRecording() {
  showToast("Enregistrement vocal (simulé)");
}

chatInput.addEventListener("input", () => {
  updateSendButton();
});
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (chatInput.value.trim() !== "") {
      sendTextMessage();
    } else {
      startVoiceRecording();
    }
  }
});

updateSendButton();

// ===== GESTION DES BOUTONS SANS TOAST =====
emojiStickerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (searchActive) closeSearchPanel();
  if (emojiPickerVisible) {
    closeEmojiPicker();
  } else {
    openEmojiPicker();
  }
});

attachDocBtn.addEventListener("click", () => {
  toolbar.classList.toggle("hidden");
  if (searchActive) closeSearchPanel();
});

cameraBtn.addEventListener("click", () => {
  showToast("Prise de photo (simulée)");
  if (searchActive) closeSearchPanel();
});

voiceCallBtn.addEventListener("click", () => {
  showToast("Appel vocal (simulé)");
  if (searchActive) closeSearchPanel();
});

threeDotsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (searchActive) closeSearchPanel();
  if (menuVisible) {
    threeDotsMenu.classList.add("hidden");
    menuVisible = false;
  } else {
    threeDotsMenu.classList.remove("hidden");
    menuVisible = true;
  }
});

document.addEventListener("click", (e) => {
  if (!attachDocBtn.contains(e.target) && !toolbar.contains(e.target)) {
    toolbar.classList.add("hidden");
  }
});

document.querySelectorAll(".chat-toolbar button").forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast(`Action : ${btn.innerText} (simulée)`);
    toolbar.classList.add("hidden");
  });
});

// ===== TOAST NOTIFICATION =====
let activeToast = null;
let hideTimeout = null;

function showToast(message, duration = 2000) {
  const container = document.getElementById("toast-container");

  if (activeToast) {
    if (hideTimeout) clearTimeout(hideTimeout);
    activeToast.remove();
    activeToast = null;
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.classList.remove("hidden");
  container.appendChild(toast);
  activeToast = toast;
  toast.offsetHeight;

  hideTimeout = setTimeout(() => {
    if (activeToast === toast) {
      toast.classList.add("hide");
      setTimeout(() => {
        if (activeToast === toast) {
          toast.remove();
          activeToast = null;
          if (container.children.length === 0) {
            container.classList.add("hidden");
          }
        }
      }, 300);
      hideTimeout = null;
    }
  }, duration);
}

// ===== GESTION DU SÉLECTEUR D'ÉMOJIS =====
const emojiPicker = document.getElementById("emoji-picker");
const recentCategory = document.getElementById("recent-category");
const recentGrid = document.getElementById("recent-grid");
let emojiPickerVisible = false;
let recentEmojis = JSON.parse(localStorage.getItem("recentEmojis")) || [];

function updateRecentSection() {
  if (recentEmojis.length === 0) {
    recentCategory.style.display = "none";
    return;
  }
  recentCategory.style.display = "block";
  recentGrid.innerHTML = "";
  recentEmojis.forEach((emoji) => {
    const span = document.createElement("span");
    span.className = "emoji-option";
    span.textContent = emoji;
    span.addEventListener("click", (e) => {
      e.stopPropagation();
      insertEmoji(emoji);
    });
    recentGrid.appendChild(span);
  });
}

function addToRecent(emoji) {
  const index = recentEmojis.indexOf(emoji);
  if (index !== -1) recentEmojis.splice(index, 1);
  recentEmojis.unshift(emoji);
  if (recentEmojis.length > 12) recentEmojis.pop();
  localStorage.setItem("recentEmojis", JSON.stringify(recentEmojis));
  updateRecentSection();
}

function insertEmoji(emoji) {
  const cursorPos = chatInput.selectionStart;
  const text = chatInput.value;
  const newText = text.slice(0, cursorPos) + emoji + text.slice(cursorPos);
  chatInput.value = newText;
  chatInput.focus();
  chatInput.setSelectionRange(
    cursorPos + emoji.length,
    cursorPos + emoji.length
  );
  autoResizeTextarea();
  updateSendButton();
  addToRecent(emoji);
  closeEmojiPicker();
}

function closeEmojiPicker() {
  if (emojiPickerVisible) {
    emojiPicker.classList.add("hidden");
    emojiPickerVisible = false;
  }
}

function openEmojiPicker() {
  if (!emojiPickerVisible) {
    emojiPicker.classList.remove("hidden");
    emojiPickerVisible = true;
  }
}

document.querySelectorAll(".emoji-option").forEach((emojiSpan) => {
  emojiSpan.addEventListener("click", (e) => {
    e.stopPropagation();
    const emoji = emojiSpan.textContent;
    insertEmoji(emoji);
  });
});

document.addEventListener("click", (e) => {
  if (
    emojiPickerVisible &&
    !emojiStickerBtn.contains(e.target) &&
    !emojiPicker.contains(e.target)
  ) {
    closeEmojiPicker();
  }
});

updateRecentSection();

// ===== GESTION DU MENU TROIS POINTS =====
const threeDotsMenu = document.getElementById("three-dots-menu");
let menuVisible = false;

document.addEventListener("click", (e) => {
  if (
    menuVisible &&
    !threeDotsBtn.contains(e.target) &&
    !threeDotsMenu.contains(e.target)
  ) {
    threeDotsMenu.classList.add("hidden");
    menuVisible = false;
  }
});

const menuRegister = document.getElementById("menu-register");
const menuMedia = document.getElementById("menu-media");
const menuSearch = document.getElementById("menu-search");
const menuTheme = document.getElementById("menu-theme");
const menuClear = document.getElementById("menu-clear");
const menuReport = document.getElementById("menu-report");

// 1. Fiche d'inscription
menuRegister.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  if (searchActive) closeSearchPanel();
  enterInscriptionPage();
});

// 2. Médias, liens et documents
menuMedia.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  if (searchActive) closeSearchPanel();
  showToast("Fonctionnalité à venir : partage de médias et documents.");
});

// 3. Recherche (panneau flottant)
const searchPanel = document.getElementById("search-panel");
const searchInput = document.getElementById("search-input");
const searchClose = document.getElementById("search-close");
const searchResultsCount = document.getElementById("search-results-count");
let searchActive = false;

function clearSearchHighlights() {
  document.querySelectorAll(".search-highlight").forEach((el) => {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
}

function highlightSearch(term) {
  if (!term) return 0;
  const messages = document.querySelectorAll(
    "#chat-fullscreen-messages .message-bubble"
  );
  let count = 0;
  messages.forEach((bubble) => {
    const originalText = bubble.childNodes[0]?.nodeValue || bubble.innerText;
    if (originalText.toLowerCase().includes(term.toLowerCase())) {
      const regex = new RegExp(
        `(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      const newHtml = originalText.replace(
        regex,
        '<span class="search-highlight">$1</span>'
      );
      bubble.innerHTML = newHtml;
      count++;
    }
  });
  return count;
}

function openSearchPanel() {
  if (emojiPickerVisible) closeEmojiPicker();
  if (themePanelVisible) closeThemePanel();
  searchPanel.classList.remove("hidden");
  searchInput.value = "";
  searchResultsCount.textContent = "";
  clearSearchHighlights();
  searchInput.focus();
  searchActive = true;
}

function closeSearchPanel() {
  searchPanel.classList.add("hidden");
  clearSearchHighlights();
  searchActive = false;
}

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim();
  clearSearchHighlights();
  if (term === "") {
    searchResultsCount.textContent = "";
    return;
  }
  const count = highlightSearch(term);
  searchResultsCount.textContent = `${count} résultat(s)`;
});

searchClose.addEventListener("click", closeSearchPanel);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchActive) {
    closeSearchPanel();
  }
});

menuSearch.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  openSearchPanel();
});

// 4. Thème de la conversation
const themePanel = document.getElementById("theme-panel");
let themePanelVisible = false;

function closeThemePanel() {
  if (themePanelVisible) {
    themePanel.classList.add("hidden");
    themePanelVisible = false;
  }
}

function openThemePanel() {
  if (searchActive) closeSearchPanel();
  if (emojiPickerVisible) closeEmojiPicker();
  themePanel.classList.remove("hidden");
  themePanelVisible = true;
}

menuTheme.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  if (themePanelVisible) {
    closeThemePanel();
  } else {
    openThemePanel();
  }
});

document.addEventListener("click", (e) => {
  if (
    themePanelVisible &&
    !menuTheme.contains(e.target) &&
    !themePanel.contains(e.target)
  ) {
    closeThemePanel();
  }
});

const themeOptions = document.querySelectorAll(".color-option");
const themeReset = document.getElementById("theme-reset");
const themeClose = document.getElementById("theme-close");

function applyTheme(bgColor, bubbleColor, userBubbleColor) {
  const chatContainer = document.querySelector(".orientiug-chat-fullscreen");
  const botBubbles = document.querySelectorAll(
    ".message-wrapper.bot .message-bubble"
  );
  const userBubbles = document.querySelectorAll(
    ".message-wrapper.user .message-bubble"
  );

  chatContainer.style.background = bgColor;
  botBubbles.forEach((b) => (b.style.background = bubbleColor));
  userBubbles.forEach((b) => (b.style.background = userBubbleColor));
  localStorage.setItem(
    "chatTheme",
    JSON.stringify({ bgColor, bubbleColor, userBubbleColor })
  );
}

function loadChatTheme() {
  const saved = localStorage.getItem("chatTheme");
  if (saved) {
    const theme = JSON.parse(saved);
    applyTheme(theme.bgColor, theme.bubbleColor, theme.userBubbleColor);
  }
}

themeOptions.forEach((opt) => {
  opt.addEventListener("click", () => {
    const bg = opt.dataset.bg;
    const bubble = opt.dataset.bubble;
    const userBubble = opt.dataset.userBubble;
    applyTheme(bg, bubble, userBubble);
    closeThemePanel();
  });
});

themeReset.addEventListener("click", () => {
  document.querySelector(".orientiug-chat-fullscreen").style.background = "";
  document
    .querySelectorAll(".message-bubble")
    .forEach((b) => (b.style.background = ""));
  localStorage.removeItem("chatTheme");
  closeThemePanel();
});

themeClose.addEventListener("click", closeThemePanel);

// 5. Effacer le contenu
menuClear.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  if (searchActive) closeSearchPanel();
  if (
    confirm(
      "Voulez-vous vraiment effacer tous les messages de cette conversation ?"
    )
  ) {
    chatMessages.innerHTML = "";
    localStorage.removeItem("orientiugChatMessages");
    messages = [];
    initDefaultMessage();
    showToast("Conversation effacée.");
  }
});

// 6. Signaler
menuReport.addEventListener("click", () => {
  threeDotsMenu.classList.add("hidden");
  menuVisible = false;
  if (searchActive) closeSearchPanel();
  showToast("Merci de votre signalement. Nous traiterons votre demande.");
});

// ===== PAGE INSCRIPTION (formulaire) =====
const inscriptionForm = document.getElementById("inscription-form");
const inscriptionFeedback = document.getElementById("inscription-feedback");

if (clearFormBtn) {
  clearFormBtn.addEventListener("click", () => {
    const form = document.getElementById("inscription-form");
    if (form) form.reset();
    setCurrentDate(); // remet la date du jour après réinitialisation
    showToast("Tous les champs ont été vidés.");
  });
}

if (downloadFormBtn) {
  downloadFormBtn.addEventListener("click", async () => {
    // Validation des champs obligatoires
    const requiredFields = document.querySelectorAll(
      "#inscription-form input[required], #inscription-form select[required]"
    );
    let missing = [];
    requiredFields.forEach((field) => {
      if (field.type === "radio") {
        const name = field.getAttribute("name");
        const radioGroup = document.querySelectorAll(`input[name="${name}"]`);
        const checked = Array.from(radioGroup).some((r) => r.checked);
        if (!checked)
          missing.push(
            field
              .closest(".field-group")
              ?.querySelector("label")
              ?.innerText.trim() || "Jour/Soir"
          );
      } else if (field.value.trim() === "") {
        const label = field.closest(".field-group")?.querySelector("label");
        const fieldName = label
          ? label.innerText.replace("*", "").trim()
          : "champ";
        missing.push(fieldName);
      }
    });

    if (missing.length > 0) {
      showToast("Veuillez remplir tous les champs obligatoires (*).");
      return;
    }

    // Validation des numéros de téléphone (9 chiffres)
    const studentPhone = document.getElementById("student-phone");
    if (studentPhone && !/^\d{9}$/.test(studentPhone.value.trim())) {
      showToast("Le numéro de téléphone étudiant doit comporter 9 chiffres.");
      return;
    }
    const parentPhone = document.getElementById("parent-phone");
    if (parentPhone && !/^\d{9}$/.test(parentPhone.value.trim())) {
      showToast(
        "Le numéro de téléphone du père/tuteur doit comporter 9 chiffres."
      );
      return;
    }
    const motherPhone = document.getElementById("mother-phone");
    if (
      motherPhone &&
      motherPhone.value.trim() !== "" &&
      !/^\d{9}$/.test(motherPhone.value.trim())
    ) {
      showToast("Le numéro de téléphone de la mère doit comporter 9 chiffres.");
      return;
    }

    // Validation de l'année d'obtention (4 chiffres)
    const gradYear = document.getElementById("graduation-year");
    if (
      gradYear &&
      gradYear.value.trim() !== "" &&
      !/^\d{4}$/.test(gradYear.value.trim())
    ) {
      showToast("L'année d'obtention doit comporter 4 chiffres.");
      return;
    }

    // Nom du fichier
    let nom = "";
    const nomInput = document.querySelector(
      "#inscription-form input[placeholder='Nom du candidat']"
    );
    if (nomInput && nomInput.value.trim()) {
      nom = nomInput.value.trim().replace(/\s+/g, "_");
    } else {
      nom = "candidat";
    }

    // Clone avec conteneur temporaire visible (opacity 0)
    const originalElement = document.getElementById("inscription-section");
    const clone = originalElement.cloneNode(true);
    const paper = clone.querySelector(".inscription-paper");
    if (paper) paper.classList.add("pdf-light-mode", "pdf-compact");

    const tempContainer = document.createElement("div");
    tempContainer.style.position = "fixed";
    tempContainer.style.top = "0";
    tempContainer.style.left = "0";
    tempContainer.style.width = "100%";
    tempContainer.style.opacity = "0";
    tempContainer.style.pointerEvents = "none";
    tempContainer.style.zIndex = "-1";
    tempContainer.appendChild(clone);
    document.body.appendChild(tempContainer);

    // Attendre un peu pour que le rendu se fasse
    await new Promise((resolve) => setTimeout(resolve, 200));

    const opt = {
      margin: [0.3, 0.3, 0.3, 0.3],
      filename: `${nom}_fiche_inscription.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, letterRendering: true, useCORS: false },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    try {
      showToast("Génération du PDF en cours...");
      await html2pdf().set(opt).from(clone).save();
      showToast("PDF généré avec succès !");
    } catch (err) {
      console.error(err);
      showToast("Erreur lors de la génération du PDF.");
    } finally {
      document.body.removeChild(tempContainer);
    }
  });
}

// ===== SPLASH SCREEN (cubes formant l'icône) =====
const splash = document.getElementById("splash-screen");
const cubes = document.querySelectorAll(".cube");
const cubeGroup = document.querySelector(".cube-group");
const splashText = document.querySelector(".splash-text");

let cubesArrived = 0;
let animationCompleted = false;

function onCubeAnimationEnd() {
  if (animationCompleted) return;
  cubesArrived++;
  if (cubesArrived === cubes.length) {
    animationCompleted = true;
    cubeGroup.classList.add("assembled");
    setTimeout(() => {
      cubeGroup.classList.add("slide-left");
      splashText.classList.remove("hidden");
      splashText.classList.add("show");
      setTimeout(() => {
        splash.classList.add("hide");
        setTimeout(() => {
          splash.remove();
        }, 400);
      }, 500);
    }, 200);
  }
}

cubes.forEach((cube) => {
  cube.addEventListener("animationend", onCubeAnimationEnd);
});

setTimeout(() => {
  if (!animationCompleted) {
    cubeGroup.classList.add("slide-left");
    splashText.classList.remove("hidden");
    splashText.classList.add("show");
    setTimeout(() => {
      splash.classList.add("hide");
      setTimeout(() => {
        splash.remove();
      }, 400);
    }, 500);
  }
}, 2500);

// ===== FERMETURE DES MODALES AU CLIC SUR LE FOND =====
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});
