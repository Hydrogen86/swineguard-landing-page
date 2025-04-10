import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import appointmentModel from "./models/appointment.js";

const app = express();
app.use(express.json());
app.use(cors());

// Connection
mongoose.connect("mongodb://localhost:27017/swineguard_db", { useNewUrlParser: true, useUnifiedTopology: true });

// Appointment route
app.post('/appointment', (req, res) => {
    appointmentModel.create(req.body)
        .then(appointmentRequest => res.json(appointmentRequest))
        .catch(err => res.json(err));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});