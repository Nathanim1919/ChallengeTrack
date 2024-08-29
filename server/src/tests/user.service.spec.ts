import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { RewardService } from "../services/reward.service";
import { IUser } from "../interfaces/IUser";
import bcrypt from "bcrypt";
import { ObjectId } from "bson";

jest.mock('../repositories/user.repository');
jest.mock('../services/reward.service');

describe('UserService', () => {
    let userService: UserService;
    let mockUserRepository: jest.Mocked<UserRepository>;
    let mockRewardService: jest.Mocked<typeof RewardService>;

    const mockUser: IUser = {
        _id: new ObjectId("60f7b3b3b3b3b3b3b3b3b3b3"),
        name: "John Doe",
        username: "nathanim",
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

    beforeEach(() => {
        mockUserRepository = new UserRepository() as jest.Mocked<UserRepository>;
        mockRewardService = RewardService as jest.Mocked<typeof RewardService>;
        userService = new UserService(mockUserRepository);

        // @ts-ignore
        jest.spyOn(bcrypt, 'hash').mockResolvedValue("$2b$10$TF94D0KNu8C88akvD5P8eOXVeuxRN83NoNy1QKZmQnKBMr/WFTMum");
        // @ts-ignore
        jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);
        mockRewardService.rewardUserForDailyLogin.mockReturnValue(10);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('registerUser', () => {
        it('should create a new user successfully', async () => {
            mockUserRepository.create.mockResolvedValue({ ...mockUser, password: "$2b$10$TF94D0KNu8C88akvD5P8eOXVeuxRN83NoNy1QKZmQnKBMr/WFTMum" });

            const result = await userService.registerUser(mockUser);

            expect(mockUserRepository.create).toHaveBeenCalledWith(expect.objectContaining({ password: expect.any(String) }));
            expect(result.password).toEqual("$2b$10$TF94D0KNu8C88akvD5P8eOXVeuxRN83NoNy1QKZmQnKBMr/WFTMum");
        });

        it('should throw an error if user creation fails', async () => {
            mockUserRepository.create.mockRejectedValue(new Error('User creation failed'));

            await expect(userService.registerUser(mockUser)).rejects.toThrow('User creation failed');
        });
    });

    describe('loginUser', () => {
        it('should login a user successfully and reward daily login points', async () => {
            mockUserRepository.findByEmailOrUsername.mockResolvedValue(mockUser);
            mockUserRepository.updateById.mockResolvedValue({ ...mockUser, points: 10 });

            const result = await userService.loginUser(mockUser.username, "securePassword");

            expect(mockUserRepository.findByEmailOrUsername).toHaveBeenCalledWith(mockUser.username);
            expect(bcrypt.compare).toHaveBeenCalledWith("securePassword", mockUser.password);
            expect(mockRewardService.rewardUserForDailyLogin).toHaveBeenCalledWith(mockUser.points);
            expect(mockUserRepository.updateById).toHaveBeenCalledWith(mockUser._id.toString(), { points: 10 });
            expect(result).toEqual({ ...mockUser, points: 10 });
        });

        it('should return null if user does not exist', async () => {
            mockUserRepository.findByEmailOrUsername.mockResolvedValue(null);

            const result = await userService.loginUser(mockUser.username, "securePassword");

            expect(result).toBeNull();
        });

        it('should return null if password does not match', async () => {
            mockUserRepository.findByEmailOrUsername.mockResolvedValue(mockUser);
            // @ts-ignore
            jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

            const result = await userService.loginUser(mockUser.username, "securePassword");

            expect(result).toBeNull();
        });
    });

    describe('updateUser', () => {
        it('should update a user successfully', async () => {
            mockUserRepository.updateById.mockResolvedValue({...mockUser, name: "Nathanim Tadele"});

            const result = await userService.updateUser(mockUser._id.toString(), { name: "Nathanim Tadele" });

            expect(result).toEqual({...mockUser, name: "Nathanim Tadele"});
        });

        it('should return null if user does not exist when a request is sent for user update',  async () => {
            mockUserRepository.updateById.mockResolvedValue(null);

            const result = await userService.updateUser(mockUser._id.toString(), { name: "Nathanim Tadele" });

            expect(result).toEqual(null);
        });

        it('should throw an error if user update fails', async () => {
            mockUserRepository.updateById.mockRejectedValue(new Error('User update failed'));

            await expect(userService.updateUser(mockUser._id.toString(), { name: "Nathanim Tadele" }))
                .rejects.toThrow('User update failed');
        });
    })

    describe('deleteUser', () => {
        it('should delete a user successfully', async () => {
            mockUserRepository.deleteById.mockResolvedValue(mockUser);

            const result = await userService.deleteUser(mockUser._id.toString());

            expect(result).toEqual(mockUser);
        });

        it('should return null if user does not exist when a request is sent for user deletion', async () => {
            mockUserRepository.deleteById.mockResolvedValue(null);

            const result = await userService.deleteUser(mockUser._id.toString());

            expect(result).toBeNull();
        });

        it('should throw an error if user deletion fails', async () => {
            mockUserRepository.deleteById.mockRejectedValue(new Error('User deletion failed'));

            await expect(userService.deleteUser(mockUser._id.toString())).rejects.toThrow('User deletion failed');
        });
    });

    describe('searchUsers', () => {
        it('should return a list of users successfully', async () => {
            mockUserRepository.searchUsers.mockResolvedValue([mockUser]);

            const result = await userService.searchUsers({});

            expect(result).toEqual([mockUser]);
        });

        it('should return an empty list if no users are found', async () => {
            mockUserRepository.searchUsers.mockResolvedValue([]);

            const result = await userService.searchUsers({});

            expect(result).toEqual([]);
        });

        it('should throw an error if user search fails', async () => {
            mockUserRepository.searchUsers.mockRejectedValue(new Error('User search failed'));

            await expect(userService.searchUsers({})).rejects.toThrow('User search failed');
        });

        it('should return all users if no filter is provided', async () => {
            mockUserRepository.searchUsers.mockResolvedValue([mockUser]);

            const result = await userService.searchUsers({});

            expect(result).toEqual([mockUser]);
        });
    })

    describe('getUserById', () => {
        it('should return a user successfully', async () => {
            mockUserRepository.findById.mockResolvedValue(mockUser);

            const result = await userService.getUserById(mockUser._id.toString());

            expect(result).toEqual(mockUser);
        });

        it('should return null if user does not exist', async () => {
            mockUserRepository.findById.mockResolvedValue(null);

            const result = await userService.getUserById(mockUser._id.toString());

            expect(result).toBeNull();
        });

        it('should throw an error if user retrieval fails', async () => {
            mockUserRepository.findById.mockRejectedValue(new Error('User retrieval failed'));

            await expect(userService.getUserById(mockUser._id.toString())).rejects.toThrow('User retrieval failed');
        });
    });
});
