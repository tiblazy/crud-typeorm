import { Response } from "express";

class SuccessController {
  static default = (res: Response, object: object, statusCode?: number) => {
    return res.status(statusCode || 200).send(object);
  };

  static message = (res: Response, message: string, object?: object) => {
    return res.status(200).send({
      message,
      object,
    });
  };
}
export default SuccessController;
