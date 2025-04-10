import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const mongoURI = process.env.DB_URI || 'mongodb://localhost:27017/swineguard_db';

// Check if DB_URI is set
if (!mongoURI) {
    console.error('❌ Error: DB_URI is not defined in .env file.');
    process.exit(1); // Stop server execution
}

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Connected to the database'))
    .catch(err => {
        console.error('❌ Connection failed:', err);
        process.exit(1); // Stop execution on failure
    });

export default mongoose;