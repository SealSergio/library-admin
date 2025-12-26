import express, { json } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import {
          booksRouter,
          authorsRouter,
          genresRouter,
          cyclesRouter,
          authRouter,
          adminsRouter
        }  from './routes/index.js';

const server = express();

server.listen(4000, () => {
  console.log('Server started on port 4000');
});

server.use(json(), cookieParser(), cors());

server.use('/', authRouter);
server.use('/admins', adminsRouter);
server.use('/register', authRouter);
server.use('/books', booksRouter);
server.use('/authors', authorsRouter);
server.use('/genres', genresRouter);
server.use('/cycles', cyclesRouter);
