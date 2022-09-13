import { NextFunction, Request, Response } from "express";
import { IUser } from "../interfaces/user";
import { userSchema } from "../schemas/user";

export const userValidation = (
    req: Request<unknown, unknown, IUser>,
    res: Response,
    next: NextFunction) => {
    const { name, email, password } = req.body
    const { error } = userSchema.validate({ name, email, password });

    if (error) {
        next({ code: 400, message: error.details[0].message })
    }

    next();
};