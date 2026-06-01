import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, "messages.json");

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read database
const readDatabase = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Database read error:", error);
    return [];
  }
};

// Helper function to write database
const writeDatabase = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Database write error:", error);
  }
};

// Route: Get all stored messages
app.get("/api/messages", (req, res) => {
  const messages = readDatabase();
  res.json(messages);
});

// Route: Purge all stored messages
app.delete("/api/messages", (req, res) => {
  writeDatabase([]);
  res.json({ success: true, message: "Local database purged successfully." });
});

// Route: Submit a new contact form message
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  // 1. Store message in local database
  const messages = readDatabase();
  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    timestamp: new Date().toLocaleString(),
  };
  messages.unshift(newMessage); // Add to the top of the array
  writeDatabase(messages);

  console.log(`[Database] Stored new packet from ${name} (${email})`);

  // 2. Dispatch email notification via Nodemailer
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  // Bypass email if credentials are using defaults
  if (!smtpPass || smtpPass.includes("your-google") || smtpPass === "") {
    console.warn("[Email Warning] SMTP credentials not set. Message saved locally but email was not sent.");
    return res.status(200).json({
      success: true,
      message: "Message stored locally. (Email skipped: SMTP credentials not configured).",
      storedLocally: true,
      emailSent: false
    });
  }

  try {
    // Configure transporter
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const transporterConfig = {
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    if (host.includes("gmail")) {
      transporterConfig.service = "gmail";
    } else {
      transporterConfig.host = host;
      transporterConfig.port = parseInt(process.env.SMTP_PORT || "465");
      transporterConfig.secure = process.env.SMTP_SECURE === "true"; // true for 465, false for 587
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    const receiverEmail = process.env.RECEIVER_EMAIL || smtpUser;

    // Email content
    const mailOptions = {
      from: `"${name} (Portfolio)" <${smtpUser}>`, // Must send from auth user or smtp.gmail will fail/rewrite
      to: receiverEmail,
      replyTo: email, // Set visitor email as Reply-To
      subject: `📧 Portfolio Message from ${name}`,
      text: `New Portfolio Message Submitted!\n\n--- SENDER DETAILS ---\nName: ${name}\nEmail: ${email}\nDate: ${newMessage.timestamp}\n\n--- MESSAGE BODY ---\n${message}\n\n-----------------\nStored locally in server/messages.json database.`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 6px;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 8px; margin-top: 0; font-size: 18px;">📧 New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 120px; vertical-align: top;">Sender Name:</td>
              <td style="padding: 6px 0; vertical-align: top;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Sender Email:</td>
              <td style="padding: 6px 0; vertical-align: top;"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Timestamp:</td>
              <td style="padding: 6px 0; vertical-align: top;">${newMessage.timestamp}</td>
            </tr>
          </table>
          <div style="border-top: 1px solid #eee; padding-top: 15px;">
            <p style="font-weight: bold; margin-bottom: 10px;">Message:</p>
            <div style="background-color: #f9f9f9; border-left: 4px solid #4f46e5; padding: 15px; font-style: italic; white-space: pre-wrap; border-radius: 4px; color: #444; line-height: 1.5;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="margin-top: 25px; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            This packet was sent from your portfolio website and has been stored in your server's local database.
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[Email Success] Notification sent: ${info.messageId}`);

    res.json({
      success: true,
      message: "Message stored locally & notification dispatched successfully.",
      storedLocally: true,
      emailSent: true
    });
  } catch (error) {
    console.error("[Email Error] Failed to send email:", error);
    res.status(500).json({
      success: false,
      message: "Message stored locally, but email notification failed to send.",
      storedLocally: true,
      emailSent: false,
      error: error.message
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 Portfolio API server active on port ${PORT}`);
  console.log(`📂 Database: ${DB_FILE}`);
  console.log(`=============================================`);
});
