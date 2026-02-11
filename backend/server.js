app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    await Contact.create({ name, email, message });

    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
}); 