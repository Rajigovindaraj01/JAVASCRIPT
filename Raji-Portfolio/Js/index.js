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

//this not work-waste
document.getElementById("downloadBtn").addEventListener("click", function () {
  const sound = document.getElementById("clickSound");
  sound.play(); 

  const link = document.createElement("a");
  link.href = "../Assets/Public/RajeshwariGovindaraj--Resume.97326ed6b7e562f60aa7 (2).pdf";
  link.download = "Rajeshwari_CV.pdf";
  document.body.appendChild(link); 
  link.click();
  document.body.removeChild(link); 
});


//this is for tooltip
  document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

//this is for skill section
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


//this is for contact-form
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = {
      name,
      email,
      message,
      time: new Date().toLocaleString()
    };

    localStorage.setItem("contactData", JSON.stringify(formData));

    document.getElementById("successMsg").textContent =
      "Your details stored in local storage. Get u back soon.";

    document.getElementById("contactForm").reset();
  });
