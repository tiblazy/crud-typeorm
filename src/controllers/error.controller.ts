import { Response } from "express";

class ErrorController {
  static default = (error: any, res: Response) => {
    if (error instanceof Error) {
      return res.status(400).send({
        error: error.name,
        message: error.message,
      });
    }
  };
}

export default ErrorController;
