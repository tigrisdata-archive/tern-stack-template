import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateInput =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    if (result.success === false) {
      return res.status(400).json(result.error.format());
    }

    return next();
  };

export default validateInput;
