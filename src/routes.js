import { Router } from 'express';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
/*
// Rota de teste para inserção de usuário quando a rota '/' é chamada
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Thiago Carvalho',
    email: 'thiago@teste.com',
    password_hash: '123456789'
  });
  return res.json(user);
});
routes.get('/', (req, res) => res.json({ message: 'Hello Thiago' }));
*/
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Rotas após o middleware terão obrigatoriedade de token para navegação
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
