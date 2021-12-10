import {config} from 'dotenv';
import express from "express";
import bodyParser from 'body-parser';
import searchRoutes from './routes/search';
import cors from 'cors'
import { createServer, Server as serve } from "http";


config()
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(searchRoutes);

const httpServer = createServer(app)

httpServer.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port 5000');
});
