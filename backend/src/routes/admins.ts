import { Router } from 'express';

import { authorizeRequest } from '../auth.js';
import { Admins } from '../database/admins/Admins.js';

export const adminsRouter = Router();

adminsRouter.get('/me', (req, res) => {
  const adminId = authorizeRequest(req);

  if (!adminId) {
    return res.status(401).send('Unauthorized');
  }

  const admin = Admins.getOne(adminId);

  if (!admin) {
    return res.status(404).send('Пользователь не найден');
  }

  res.status(200).json(admin);
});

// adminsRouter.get('/:id', (req, res) => {
//   const admin = Admins.getOne(req.params.id);

//   if (!admin) {
//     return res.status(404).send('Пользователь не найден');
//   }

//   res.status(200).json(admin);
// });
