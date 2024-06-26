// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import tourRoute from './routes/tours.js';
// import userRoute from './routes/users.js';
// import authRoute from './routes/auth.js';
// import reviewRoute from './routes/reviews.js';
// import bookingRoute from './routes/bookings.js';
// import galleryRoute from './routes/gallery.js';
// import bodyParser from 'body-parser';

// dotenv.config()
// const app =express()
// const port = process.env.PORT || 8000 
// const corsOptions = {
//     origin:true,
//     credentials:true
// }

// //database connection
// mongoose.set("strictQuery",false);
// const connect = async()=>{
//     try {
//         await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         })
//         console.log('Mongo db connected')
//     } catch (err) {
//         console.log('Connection Failed',err)
//     }
// }


// app.use(bodyParser.json({ limit: '50mb' }));

// app.use(express.json())
// app.use(cors(corsOptions))
// app.use(cookieParser())
// app.use('/api/v1/tours',tourRoute)
// app.use('/api/v1/users',userRoute)
// app.use('/api/v1/auth',authRoute)
// app.use('/api/v1/review',reviewRoute)
// app.use('/api/v1/booking',bookingRoute)
// app.use('/api/v1/gallery',galleryRoute)




// app.listen(port,()=>{
//     connect()
//     console.log('Server listening on port ',port)
// })



import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';
import galleryRoute from './routes/gallery.js';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url'; // Import fileURLToPath function
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename); // Get the directory name of the current module

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
};

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection Failed', err);
    }
};

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routes
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);
app.use('/api/v1/gallery', galleryRoute);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Serve React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Start the server
app.listen(port, () => {
    connect();
    console.log('Server listening on port ', port);
});
