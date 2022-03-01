import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((error, req, res, next)=> {
    console.error(error);
    res.sendStatus(500);
})
app.listen(8080);