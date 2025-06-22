import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { booksRouter, authorsRouter, usersRouter, authRouter, genresRouter } from './routes';

import { sleep } from './sleep.js';

const server = express();

server.listen(4000, () => {
  console.log('Server started on port 4000');
});

server.use(json(), cookieParser(), cors(), sleep([400, 1500]));

server.use('/books', booksRouter);

server.use('/authors', authorsRouter);

server.use('/genres', genresRouter);

server.use('/notes', usersRouter);

server.use('/', authRouter);
