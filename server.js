import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serve static files

// POST route
app.post("/send-email", async (req, res) => {
  const { fullName, phone, email, serviceSelect, appointmentDate, moreDetails } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "emadidou@gmail.com",
        pass: "rotf shhw tnxo tpcr",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "emadidou@gmail.com",
      subject: "Nouveau rendez-vous CL GLASS AUTO",
      text: `
Nom: ${fullName}
Téléphone: ${phone}
Email: ${email}
Service: ${serviceSelect}
Date: ${appointmentDate}
Message: ${moreDetails}
      `,
    });

    res.json({ message: "✅ Rendez-vous envoyé avec succès !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Erreur lors de l'envoi." });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
