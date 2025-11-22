// ================= TYPING EFFECT =================
const typingElement = document.getElementById("typing");
const words = ["AI & ML Enthusiast", "Data Analyst", "Full-Stack Developer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (wordIndex >= words.length) wordIndex = 0;

  currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;
    setTimeout(type, 500);
  } else {
    setTimeout(type, 150);
  }
}

document.addEventListener("DOMContentLoaded", type);

// ================= SCROLL TO SECTION =================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
