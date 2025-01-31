import express, { type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);



const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3001;
















app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));