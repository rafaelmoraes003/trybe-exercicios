import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser } from '../interfaces/user';
import { connection } from './connection';

class UserModel {

    async getAll(): Promise<IUser[]> {
        const [users] = await connection.execute<RowDataPacket[]>('SELECT * FROM Users');
        return users as IUser[];
    }

    async getById(id: number): Promise<IUser> {
        const [[user]] = await connection.execute<RowDataPacket[]>('SELECT * FROM Users WHERE id = ?', [id]);
        return user as IUser;
    }

    async create(user: IUser): Promise<IUser> {
        const { name, email, password } = user;
        const [{ insertId }] = await connection.execute<ResultSetHeader>(
            'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password],
        );
        return { id: insertId, ...user };
    }

    async update(id: number, user: IUser): Promise<void> {
        const { name, email, password } = user;
        await connection.execute(
            'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?',
            [name, email, password, id],
        );
    }

    async remove(id: number): Promise<void> {
        await connection.execute('DELETE FROM Users WHERE id = ?', [id]);
    }

    async emailCheck(email: string): Promise<boolean> {
        const [[result]] = await connection.execute<RowDataPacket[]>('SELECT * FROM Users WHERE email = ?', [email]);
        return result ? true : false;
    }
}

export default UserModel;