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
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        return this.userRepository.create({
            ...userData,
            password: hashedPassword
        });
    }

    /**
     * Login a user
     */
    async loginUser(identifier: string, password: string): Promise<IUser | null> {
        // TODO: save user session in redis or something like that
        const user = await this.userRepository.findByEmailOrUsername(identifier);
        if (!user) {
            return null;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // reward user points for login
            return await this.userRepository.updateById(user._id.toString(), {
                points: RewardService.rewardUserForDailyLogin(user.points)
            });
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
        return this.userRepository.searchUsers(filter);
    }

    /**
     * Get user by ID
     */
    async getUserById(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id);
    }
}
