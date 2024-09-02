import {UserRepository} from "../repositories/user.repository";
import {IUser} from "../interfaces/IUser";
import bcrypt from "bcrypt";
import {RewardService} from "./reward.service";

export class UserService {

    constructor(private userRepository: UserRepository) {
    }

    /**
     * Create a new user
     */
    async registerUser(userData: IUser): Promise<IUser> {
        // hash user password
        try {
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            return this.userRepository.create({
                ...userData,
                password: hashedPassword
            });
        } catch (error) {
            throw new Error("Registration failed");
        }
    }

    /**
     * Login a user
     */
    async loginUser(identifier: string, password: string): Promise<IUser | null> {
        const user = await this.userRepository.findByEmailOrUsername(identifier);
        if (!user) {
            return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // reward user points for login
            const updatedUser =  await this.userRepository.updateById(user._id.toString(), {
                points: RewardService.rewardUserForDailyLogin(user.points)
            });
            return updatedUser;
        }
        return null;
    }

    /**
     * Update user data
     */
    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        return this.userRepository.updateById(id, updateData);
    }

    /**
     * Delete a user
     */
    async deleteUser(id: string): Promise<IUser | null> {
        return this.userRepository.deleteById(id);
    }

    /**
     * Search users with filters
     */
    async searchUsers(filter: Partial<IUser>): Promise<IUser[]> {
        return this.userRepository.searchUsers(filter? filter : {});
    }

    /**
     * Get user by ID
     */
    async getUserById(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id);
    }

    /**
     * Get user by email or username
     */
    async getUserByEmailOrUsername(identifier: string): Promise<IUser | null> {
        return this.userRepository.findByEmailOrUsername(identifier);
    }

    /**
     * reward a user for completing a daily challenge
     */
    async rewardUserForDailyChallenge(userId: string): Promise<IUser | null> {
        return this.userRepository.findById(userId)
            .then(user => {
                if (!user) {
                    throw new Error('User not found');
                }
                return this.userRepository.rewardPoint(userId, RewardService.rewardDailyChallenge(user.points));
            });
    }
}
