import { StatusCode } from "../helpers/statusCode";
import UserModel from "../models/user";
import { IUser } from "../interfaces/user";

const userModel = new UserModel();

class UserService {

    async getAll() {
        const users: IUser[] = await userModel.getAll();
        return { code: StatusCode.OK, data: users } 
    }

    async getById(id: number) {
        const user: IUser = await userModel.getById(id);
        
        if (!user) {
            return { error: { code: StatusCode.NOT_FOUND, message: 'User not found.' } };
        }

        return { code: StatusCode.OK, data: user };
    }

    async create(user: IUser) {
        const { name, email, password } = user;
        const emailExists = await userModel.emailCheck(email);

        if (emailExists) {
            return { error: { code: StatusCode.BAD_REQUEST, message: 'User already exists.' } };
        }

        const newUser = await userModel.create({ name, email, password });
        return { code: StatusCode.CREATED, data: newUser };
    }

    async update(id: number, user: IUser) {
        const { name, email, password } = user;
        const userExists = await userModel.getById(id);

        if (!userExists) {
            return { error: { code: StatusCode.NOT_FOUND, message: 'User not found.' } };
        }

        await userModel.update(id, { name, email, password });

        return { code: StatusCode.NO_RESPONSE };
    }

    async remove(id: number) {
        const user = await userModel.getById(id);

        if (!user) {
            return { error: { code: StatusCode.NOT_FOUND, message: 'User not found.' } };
        }

        await userModel.remove(id);

        return { code: StatusCode.NO_RESPONSE };
    }

}

export default UserService;