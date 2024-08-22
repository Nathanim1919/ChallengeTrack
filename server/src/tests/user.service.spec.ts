import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { IUser } from "../interfaces/IUser";

jest.mock('../repositories/user.repository');

describe('UserService', () => {
    let userService: UserService;
    let mockUserRepository: jest.Mocked<UserRepository>;

    beforeEach(() => {
        mockUserRepository = new UserRepository() as jest.Mocked<UserRepository>;
        userService = new UserService(mockUserRepository);
    });

    describe('createUser', () => {
        it('should create a new user successfully', async () => {
            const newUser: IUser = {
                name: "John Doe",
                username: "john_doe",
                email: "johndoe@example.com",
                password: "securePassword123!",
                profilePicture: "https://example.com/images/john_doe.jpg",
                role: "user",
                achievements: [],
                createdChallenges: [],
                participatedChallenges: [],
                wonChallenges: [],
                points: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            mockUserRepository.create.mockResolvedValue(newUser);

            const result = await userService.registerUser(newUser);

            expect(mockUserRepository.create).toHaveBeenCalledWith(newUser);
            expect(result).toEqual(newUser);
        });

        it('should throw an error if user creation fails', async () => {
            const newUser: IUser = {
                name: "John Doe",
                username: "john_doe",
                email: "johndoe@example.com",
                password: "securePassword123!",
                profilePicture: "https://example.com/images/john_doe.jpg",
                role: "user",
                achievements: [],
                createdChallenges: [],
                participatedChallenges: [],
                wonChallenges: [],
                points: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            mockUserRepository.create.mockRejectedValue(new Error('User creation failed'));
            await expect(userService.registerUser(newUser)).rejects.toThrow('User creation failed');
        });
    });
});
