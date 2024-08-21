import {UserRepository} from "../repositories/user.repository";
import {IUser} from "../interfaces/IUser";

export class UserService {

    constructor(private userRepository: UserRepository) {
    }

    /**
     * Create a new user
     */
    async registerUser(userData: IUser): Promise<IUser> {
        // TODO: Validate user data
        // TODO: Hash user password
        // TODO: Generate user points
        return this.userRepository.create(userData);
    }

    /**
     * Login a user
     */
    async loginUser(identifier: string, password: string): Promise<IUser | null> {
        // TODO: Validate user data
        // TODO: Hash user password
        // TODO: compare hashed password
        // TODO: save user session in redis or something like that
        // TODO: return user data
        // TODO: reward user points for login
        const user = await this.userRepository.findByEmailOrUsername(identifier);
        // if (user && user.isValidPassword(password)) {
        //     return null;
        // }
        return user;
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
