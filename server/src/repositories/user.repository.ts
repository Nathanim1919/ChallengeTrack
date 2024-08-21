import {User} from '../models/user.model';
import {IUser} from '../interfaces/IUser';
import {FilterQuery, UpdateQuery} from "mongoose";

export class UserRepository {
    /**
     * Create a new user
     */
    async create(userData: IUser): Promise<IUser> {
        const user = new User(userData);
        return user.save();
    }

    /**
     * Find a user by ID
     */
    async findById(id: string): Promise<IUser | null> {
        return User.findById(id);
    }

    /**
     * Find a user by email or username
     */
    async findByEmailOrUsername(identifier: string): Promise<IUser | null> {
        return User.findOne({
            $or: [
                {email: identifier},
                {username: identifier}
            ]
        }).exec();
    }

    /**
     * Update a user by ID
     */
    async updateById(id: string, updateData: UpdateQuery<IUser>): Promise<IUser | null> {
        return User.findByIdAndUpdate(id, updateData, {new: true}).exec();
    }


    /**
     * Delete a user by ID
     */
    async deleteById(id: string): Promise<IUser | null> {
        return User.findByIdAndDelete(id).exec();
    }


    /**
     * Search users with filters
     */
    async searchUsers(filter: FilterQuery<IUser>): Promise<IUser[]> {
        return User.find(filter).exec();
    }
}
