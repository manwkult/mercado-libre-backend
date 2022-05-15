import { Router } from 'express';
import ItemsController from '@/controllers/items.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class ItemsRoute implements Routes {
  public path = '/items';
  public router = Router();
  public itemsController = new ItemsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, validationMiddleware(String, 'query', false), this.itemsController.getItems);
    this.router.get(`${this.path}/:id`, validationMiddleware(String, 'params', false), this.itemsController.getItemById);
  }
}

export default ItemsRoute;
