import { Response } from "express";

class ErrorController {
  static default = (res: Response, error: any, statusCode: number = 404) => {
    if (error instanceof Error) {
      const { name, message } = error;

      return res.status(statusCode).send({
        error: name,
        message,
      });
    }
  };
}

export default ErrorController;
