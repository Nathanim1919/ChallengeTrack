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

    /**
     * Add a challenge to the user's created challenges
     */
    async addCreatedChallenge(userId: string, challengeId: string): Promise<IUser | null> {
        return User.findByIdAndUpdate(userId, {
            $addToSet: {createdChallenges: challengeId}
        }, {new: true}).exec();
    }

    /**
     * Add a challenge to the user's participated challenges
     */
    async addParticipatedChallenge(userId: string, challengeId: string): Promise<IUser | null> {
        return User.findByIdAndUpdate(userId, {
            $addToSet: {participatedChallenges: challengeId}
        }, {new: true}).exec();
    }

    /**
     * reward a point to the user for completing a daily challenge
     */
    async rewardPoint(userId: string, points: number): Promise<IUser | null> {
        return User.findByIdAndUpdate(userId, {
            $set: {points: points}
        }, {new: true}).exec();
    }
}
