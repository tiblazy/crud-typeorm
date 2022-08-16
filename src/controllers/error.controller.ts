import { Response } from "express";

class ErrorController {
  static default = (error: any, res: Response, statusCode?: number) => {
    if (error instanceof Error) {
      return res.status(statusCode || 404).send({
        error: error.name,
        message: error.message,
      });
    }
  };
}

export default ErrorController;
