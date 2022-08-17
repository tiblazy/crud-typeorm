import { Response } from "express";

class SuccessController {
  static default = (
    res: Response,
    object: object,
    statusCode: number = 200
  ) => {
    return res.status(statusCode).send(object);
  };

  static message = (res: Response, message: string, object?: object) => {
    return res.status(200).send({
      message,
      object,
    });
  };
}
export default SuccessController;
