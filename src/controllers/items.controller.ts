import { NextFunction, Request, Response } from 'express';
import { Item } from '@/interfaces/item.interface';
import { Items } from '@/interfaces/items.interface';
import itemsService from '@/services/items.service';

class ItemsController {
  public itemsService = new itemsService();

  public getItems = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const query = req.query.q.toString();
      const items: Items = await this.itemsService.getItems(query);

      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  };

  public getItemById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const item: Item = await this.itemsService.getItemById(id);

      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  };
}

export default ItemsController;
