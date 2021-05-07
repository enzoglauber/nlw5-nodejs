import { Request, Response } from 'express';

import { MessageService } from '../services/MessageService';

class MessageController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body;
    const messageService = new MessageService();

    try {
      const message = await messageService.create({
        admin_id,
        text,
        user_id
      });

      return response.json(message);
    } catch (error) {

      return response.status(400).json({
        message: error.message
      });
    }
  }

  async list(request: Request, response: Response) {
    const { id } = request.params;
    const messageService = new MessageService();

    const list = await messageService.list(id);

    return response.json(list);
  }
}

export { MessageController }
