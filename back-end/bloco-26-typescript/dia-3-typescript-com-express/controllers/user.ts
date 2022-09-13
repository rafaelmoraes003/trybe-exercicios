import { Request, Response } from "express";
import { IError, IUser } from "../interfaces/user";
import UserService from "../services/user";


const userService = new UserService();

class UserController {

    async getAll(_req: Request, res: Response): Promise<Response<IUser[]>> {
        const { code, data } = await userService.getAll();
        return res.status(code).json(data);
    }

    async getById(req: Request, res: Response): Promise<Response<IUser | IError>> {
        const { id } = req.params;
        const { code, data, error } = await userService.getById(Number(id));
        if (error) {
            return res.status(error.code).json({ message: error.message });
        }
        return res.status(code).json(data);
    }

    async create(req: Request<unknown, unknown, IUser>, res: Response): Promise<Response<IUser> | IError> {
        const { name, email, password } = req.body;
        const { code, data, error } = await userService.create({ name, email, password });
        if (error) {
            return res.status(error.code).json({ message: error.message });
        }
        return res.status(code).json(data);
    }

    async update(req: Request<any, unknown, IUser>, res: Response): Promise<Response<IError | null>> {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const { code, error } = await userService.update(Number(id), { name, email, password });
        if (error) {
            return res.status(error.code).json({ message: error.message });
        }
        return res.status(code).end();
    }

    async remove(req: Request, res: Response): Promise<Response<IError | null>> {
        const { id } = req.params;
        const { code, error } = await userService.remove(Number(id));
        if (error) {
            return res.status(error.code).json({ message: error.message });
        }
        return res.status(code).end();
    }

}

export default UserController;