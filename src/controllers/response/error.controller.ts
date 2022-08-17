import { Response } from "express";

class ErrorController {
  static default = (res: Response, error: any, statusCode?: number) => {
    if (error instanceof Error) {
      const { name, message } = error;

      return res.status(statusCode || 404).send({
        error: name,
        message,
      });
    }
  };
}

export default ErrorController;
