const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

const API = "https://websiteproject-jcbr.onrender.com/api/contact";

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
      statusText.innerText = "Message sent!";
      form.reset();
    } else {
      statusText.innerText = data.error || "Error";
    }
  } catch {
    statusText.innerText = "Server not reachable";
  }
});
