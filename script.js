const API = "https://websiteproject-jcbr.onrender.com/api/contact";
const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  statusText.innerText = "Sending...";

  const data = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      statusText.innerText = "Message Sent!";
      form.reset();
    } else {
      statusText.innerText = "Server Error";
    }
  } catch {
    statusText.innerText = "Backend Offline";
  }
});
