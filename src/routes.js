import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// import User from './app/models/User';
import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import fileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);
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

routes.get('/providers', ProviderController.index);

routes.post('/files', upload.single('file'), fileController.store);

export default routes;
