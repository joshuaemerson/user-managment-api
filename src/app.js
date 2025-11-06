// Set up express application with the correct middleware
import express from 'express';
import logger from '#config/logger.js';
import helmet from "helmet";
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

// 'app.use' adds middleware to the express app
app.use(cors())
app.use(cookieParser())
app.use(express.json()) // Middleware that parses JSON request bodies
app.use(express.urlencoded({extended: true})) // req.body now contains a JS object of the form submission
app.use(helmet()); // middleware to secure express app by using various HTTP headers
app.use(morgan('combined', {stream: {write: (message) => logger.info(message.trim())}})) // HTTP request logger middleware

app.get('/', (req, res) => {
  logger.info('Hello From the Acquisitions API')
  res.status(200).send('Hello From the Acquisitions API');
});

export default app;
