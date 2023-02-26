import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT: number | string = process.env['PORT'] || 5000;

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`)
})