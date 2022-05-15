import { NextFunction, Request, Response } from 'express';

class HealthController {
  public health = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json();
    } catch (error) {
      next(error);
    }
  };

}

export default HealthController;
