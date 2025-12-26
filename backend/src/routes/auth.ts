import { Router } from 'express';
import { z } from 'zod';

import { authorizeResponse, unauthorizeResponse } from '../auth.js';
import { IAdmin, Admins } from '../database/admins/Admins.js';
import { Passwords } from '../database/admins/Passwords.js';

export const authRouter = Router();

const AuthSchema = z.object({
  login: z.string().min(4),
  password: z.string().min(8),
});

const AdminSchema = z.object({
  login: z.string().min(4),
  surname: z.string().min(4),
  name: z.string().min(4),
  accessLevel: z.string().min(4),
  password: z.string().min(8)
});

authRouter.post('/register', async (req, res) => {
  const bodyParseResult = AdminSchema.safeParse(req.body);

  if (!bodyParseResult.success) {
    return res.status(400).send(bodyParseResult.error.message);
  }

  const { login, surname, name, accessLevel, password } = bodyParseResult.data;

  let admin: IAdmin;

  try {
    admin = await Admins.create({
      login,
      surname,
      name,
      accessLevel
    });
  } catch (error) {
    
    // return res.status(409).send(`Это имя пользователя уже занято`);
    return res.status(409).send(`Ошибка: ${error}`);
  }

  await Passwords.create(admin.login, password);

  authorizeResponse(res, admin.login).status(201).json({ login: admin.login });
});

authRouter.post('/login', (req, res) => {
  const bodyParseResult = AuthSchema.safeParse(req.body);

  if (!bodyParseResult.success) {
    return res.status(400).send(bodyParseResult.error.message);
  }

  const { login, password } = bodyParseResult.data;

  const admin = Admins.findOne((admin) => admin.login === login);

  if (!admin || !Passwords.verify(admin.login, password)) {
    return res.status(401).send('Неверное имя пользователя или пароль');
  }

  authorizeResponse(res, admin.login).status(200).send();
});

authRouter.post('/logout', (req, res) => {
  unauthorizeResponse(res).status(200).send();
});
