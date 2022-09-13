import { Router } from 'express';
import UserController from '../controllers/user';
import { userValidation } from '../middlewares/userValidation';

const user = Router();

const userController = new UserController();

user.get('/', userController.getAll);
user.get('/:id', userController.getById);
user.delete('/:id', userController.remove);

user.use(userValidation);

user.post('/', userController.create);
user.put('/:id', userController.update);

export default user;