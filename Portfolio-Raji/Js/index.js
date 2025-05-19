const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navlinks');
    const playsound = document.getElementById('soundplay');
    

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      playsound.play()
    });
// -----------------------------------------------------------------------------------------------------------------------------
const texts = ["MERN STACK DEVELOPER", "FRONT-END", "BACK-END"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typewriter");

  if (i >= texts.length) i = 0;
  currentText = texts[i];

  if (isDeleting) {
    element.textContent = currentText.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i++;``
    }
  } else {
    element.textContent = currentText.substring(0, j++);
    if (j > currentText.length) {
      isDeleting = true;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
// ----------------------------downloadcv-----------------------------------------------------------------------
document.getElementById("downloadBtn").addEventListener("click", function () {
  const sound = document.getElementById("clickSound");
  sound.play(); // Play the sound effect

  const link = document.createElement("a");
  link.href = "../Assets/public/RajeshwariGovindaraj--Resume.97326ed6b7e562f60aa7 (2).pdf";  // PDF path
  link.download = "Rajeshwari_CV.pdf"; // File name
  link.click();
});
// ------------------------------------------------------------------------------------------------------About-me-section----------------------------------------
const button = document.getElementById("showDetailsBtn");
  const details = document.getElementById("details");
  const playyy = document.getElementById("clickaudio")

  button.addEventListener("click", () => {
    details.classList.toggle("show");
    playyy.play();
  })


  const particleField = document.getElementById('particleField');
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
            particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particleField.appendChild(particle);
        }

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function fillProgress(button) {
  const card = button.closest('.holographic-card');
  const progress = card.querySelector('.progress-fill');
  const label = card.querySelector('.progress-label');
  const targetWidth = card.getAttribute('data-progress');
  progress.style.width = targetWidth + '%';
  label.textContent = targetWidth + '%';
  const playing = document.getElementById('clicking');
  playing.play()
}


// -----------------------------------------------------------------------toggle------------------------------------------------------------

  const toggles = document.getElementById("modeToggle");

  toggles.addEventListener("change", function () {
    document.body.classList.toggle("light-mode");
  });

