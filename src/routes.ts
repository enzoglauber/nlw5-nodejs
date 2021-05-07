import { Router } from 'express';

import { MessageController } from './controllers/MessageController';
import { SettingController } from './controllers/SettingController';
import { UserController } from './controllers/UserController';

const messageController = new MessageController();
const settingController = new SettingController();
const userController = new UserController();

const routes = Router();

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.list);

routes.post("/settings", settingController.create);

routes.post("/users", userController.create);

export { routes };
