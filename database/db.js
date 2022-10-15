import mongoose from "mongoose";
import dontenv from 'dotenv';

dontenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

export const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bqjqm.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Database MongoDB Successfully Connected');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Disconnected');
    });

    mongoose.connection.on('error', () => {
        console.log('Error While Connecting With MongoDB', error.message);
    })
    
}

export default Connection;