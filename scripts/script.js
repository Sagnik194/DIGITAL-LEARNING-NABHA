// Responsive Navbar Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when link is clicked
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Unique Feature: Community Unlock Progress Simulation
let communityProblemsSolved = 0;
const goal = 5000;

function updateCommunityProgress(count) {
  communityProblemsSolved += count;
  if (communityProblemsSolved >= goal) {
    alert(
      "🎉 Congratulations! The community has solved 5000 math problems. A new science module is unlocked for everyone!"
    );
    communityProblemsSolved = 0; // reset for demo purposes
  }
}

// Example usage: simulate problems being solved
setInterval(() => {
  updateCommunityProgress(100); // simulate 100 problems solved every 5 sec
}, 5000);

// Unique Feature: Adaptive Content Delivery
function detectInternetSpeed() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  if (connection) {
    let speed = connection.downlink;
    if (speed > 2) {
      console.log("High-speed internet detected → Serve video content.");
    } else if (speed > 0.5) {
      console.log("Medium-speed internet detected → Serve text + images.");
    } else {
      console.log(
        "Low-speed internet detected → Serve offline cached lessons."
      );
    }
  } else {
    console.log(
      "Network Information API not supported. Defaulting to offline-first mode."
    );
  }
}

window.addEventListener("load", detectInternetSpeed);

// Unique Feature: Parent Voice Message Simulation
function sendParentUpdate(studentName, progress) {
  const message = `ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ${studentName} ਨੇ ਇਸ ਹਫਤੇ ${progress}% ਪਾਠ ਪੂਰੇ ਕੀਤੇ ਹਨ। ਵਧਾਈਆਂ!`;
  console.log("Generated Punjabi voice message:", message);
  // In real app → integrate TTS + WhatsApp/SMS API here
}

// Example usage:
setTimeout(() => {
  sendParentUpdate("Rajdeep", 80);
}, 7000);
