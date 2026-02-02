
const textArray = ["Quick Solutions", "Smart IT Services", "Digital Growth"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeText() {
  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(eraseText, 1500);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typingElement.textContent =
      textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 60);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(typeText, 400);
  }
}

document.addEventListener("DOMContentLoaded", typeText);



  function handleSubscribe() {
    const email = document.getElementById("subscribeEmail").value.trim();
    const error = document.getElementById("emailError");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailPattern.test(email)) {
      error.textContent = "Fill correct mail id";
      return;
    }

    error.textContent = "";

    // Redirect to 404 page
    window.location.href = "404.html";
  }


