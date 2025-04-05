console.log("Server is starting...");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Allow JSON body parsing

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
let db;
async function connectDB() {
    try {
        await client.connect();
        db = client.db("your-database-name"); // Change this to your actual database name
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
}
connectDB();

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "amalendukumar55@gmail.com",
        pass: process.env.EMAIL_PASS, // Set this in .env file
    },
});

// Feedback submission API
app.post("/send-feedback", async (req, res) => {
    const { email, feedback } = req.body;

    if (!email || !feedback) {
        return res.status(400).json({ error: "Email and message are required." });
    }

    console.log("Sending feedback to:", email); // ADD THIS LINE

    try {
        // Store in MongoDB
        const feedbackCollection = db.collection("feedback");
        await feedbackCollection.insertOne({ email, feedback, createdAt: new Date() });

        try {
            // Send confirmation email with user's actual message
            let info = await transporter.sendMail({
                from: "amalendukumar55@gmail.com",
                to: email,
                subject: "Feedback Received",
                text: `Hello,\n\nWe received your feedback:\n"${feedback}"\n\nThank you!\n\nBest Regards,\nAkshay Agritech Team`,
            });

            console.log("Email sent:", info.response);
        } catch (emailError) {
            console.error("Email sending failed:", emailError);
        }

        res.status(200).json({ success: "Feedback sent successfully!" });
    } catch (error) {
        console.error("Error storing feedback:", error);
        res.status(500).json({ error: "Failed to send feedback." });
    }
}); 

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


