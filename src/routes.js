import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';

const routes = new Router();

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Thiago Carvalho',
//     email: 'thiago@teste.com',
//     password_hash: '123456789'
//   });

//   return res.json(user);
// });

// routes.get('/', (req, res) => res.json({ message: 'Hello Thiago' }));

routes.post('/users', UserController.store);

export default routes;
