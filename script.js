const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

const API = "https://websiteproject-jcbr.onrender.com/api/contact";

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// CONTACT FORM
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusText.innerText = "Sending...";

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();

    if (res.ok) {
      statusText.innerText = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusText.innerText = data.error || "❌ Something went wrong.";
    }
  } catch {
    statusText.innerText = "⚠️ Server not reachable";
  }
});