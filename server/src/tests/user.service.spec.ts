import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../services/user.service";
import { RewardService } from "../services/reward.service";
import { IUser } from "../interfaces/IUser";
import bcrypt from "bcrypt";
import { ObjectId } from "bson";
import {RewardType} from "../utils/enum.utils";

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
        logs: [],
        challengePoints: [],
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
        mockRewardService.reward.mockReturnValue(10);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        jest.clearAllTimers();
        jest.clearAllMocks();
        jest.useRealTimers();
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
            expect(mockRewardService.reward).toHaveBeenCalledWith(RewardType.DAILY_LOGIN,mockUser.points);
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





//
//
//
//
//
// import { ChallengeRepository } from '../repositories/challenge.repository';
// import ChallengeService from '../services/challenge.service';
// import { IChallenge } from '../interfaces/IChallenge';
// import mongoose from 'mongoose';
// import { IUser } from "../interfaces/IUser";
// import { UserService } from "../services/user.service";
// import LeaderBoardService from "../services/leaderBoard.service";
// import { UserRepository } from "../repositories/user.repository";
// import LeaderboardRepository from "../repositories/leaderboard.repository';
//
// // Mocking external dependencies
// jest.mock('../repositories/challenge.repository');
// jest.mock('../services/user.service');
// jest.mock('../repositories/user.repository');
// jest.mock('../services/leaderBoard.service');
// jest.mock('../repositories/leaderboard.repository');
//
// describe('ChallengeService', () => {
//     // Define necessary service instances and mock objects
//     let challengeService: ChallengeService;
//     let mockChallengeRepository: jest.Mocked<ChallengeRepository>;
//     let mockUserService: jest.Mocked<UserService>;
//     let mockLeaderBoardService: jest.Mocked<LeaderBoardService>;
//
//     // Error messages for clarity and reusability
//     const ERROR_MESSAGES = {
//         FAILED_TO_CREATE_CHALLENGE: 'Failed to create challenge',
//         FAILED_TO_UPDATE_CHALLENGE: 'Failed to update challenge',
//         FAILED_TO_DELETE_CHALLENGE: 'Failed to delete challenge',
//         FAILED_TO_FIND_CHALLENGE: 'Failed to find challenge',
//         INVALID_USER_ID: 'Invalid user ID format',
//         INVALID_CHALLENGE_ID: 'Invalid challenge ID',
//     };
//
//     // Helper function to create a mock user
//     const createMockUser = (): IUser => ({
//         _id: new mongoose.Types.ObjectId(),
//         username: 'user1',
//         name: 'User 1',
//         email: 'user1@gmail.com',
//         password: 'password',
//         points: 0,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         role: 'user',
//         logs: [],
//         challengePoints: [],
//         achievements: [],
//         createdChallenges: [],
//         participatedChallenges: [],
//         wonChallenges: [],
//         profilePicture: 'https://via.placeholder.com/150'
//     });
//
//     // Helper function to create a mock challenge
//     const createMockChallenge = (): IChallenge => ({
//         _id: new mongoose.Types.ObjectId(),
//         title: 'Challenge 1',
//         description: 'This is a challenge',
//         createdBy: new mongoose.Types.ObjectId(),
//         startDate: new Date(),
//         endDate: new Date(),
//         participants: [new mongoose.Types.ObjectId().toString()],
//         status: 'PENDING',
//         visibility: 'public',
//         logs: [],
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         progress: 0,
//         rules: [{
//             minParticipants: 1,
//             maxParticipants: 10,
//             verificationMethod: 'self-report'
//         }],
//         rewards: [{
//             description: 'Reward 1',
//             points: 100,
//             badges: ['Badge 1']
//         }],
//         leaderboard: new mongoose.Types.ObjectId()
//     });
//
//     beforeEach(() => {
//         // Initialize mock repositories and services
//         mockChallengeRepository = {
//             createChallenge: jest.fn(),
//             updateChallenge: jest.fn(),
//             deleteChallenge: jest.fn(),
//             searchChallenges: jest.fn(),
//             findChallengeById: jest.fn(),
//             addParticipant: jest.fn(),
//             removeParticipant: jest.fn(),
//             markChallengeAsCompleted: jest.fn(),
//             getChallengeParticipants: jest.fn(),
//             saveLogChallengeProgress: jest.fn(),
//         } as jest.Mocked<ChallengeRepository>;
//
//         mockUserService = new UserService(new UserRepository()) as jest.Mocked<UserService>;
//         mockLeaderBoardService = new LeaderBoardService(new LeaderboardRepository()) as jest.Mocked<LeaderBoardService>;
//
//         // Create the ChallengeService with mocked dependencies
//         challengeService = new ChallengeService(mockChallengeRepository, mockUserService, mockLeaderBoardService);
//     });
//
//     afterEach(() => {
//         // Clean up after each test case
//         jest.clearAllMocks();
//     });
//
//     // Test case for creating a challenge
//     describe('createChallenge', () => {
//         it('should create a new challenge successfully', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge creation
//             mockChallengeRepository.createChallenge.mockResolvedValue(mockChallenge);
//
//             // Mock leaderboard creation
//             mockLeaderBoardService.createChallengeSpecificLeaderboard.mockResolvedValue({
//                 _id: new mongoose.Types.ObjectId(),
//                 challengeId: mockChallenge._id,
//                 rankings: []
//             });
//
//             // Execute service method
//             const result = await challengeService.createChallenge(mockChallenge);
//
//             // Assertions
//             expect(mockChallengeRepository.createChallenge).toHaveBeenCalledWith(mockChallenge);
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if challenge creation fails', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge creation failure
//             mockChallengeRepository.createChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_CREATE_CHALLENGE));
//
//             // Expect error to be thrown
//             await expect(challengeService.createChallenge(mockChallenge))
//                 .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_CREATE_CHALLENGE);
//
//             // Ensure repository was called
//             expect(mockChallengeRepository.createChallenge).toHaveBeenCalledWith(mockChallenge);
//         });
//     });
//
//     // Test case for updating a challenge
//     describe('updateChallenge', () => {
//         it('should update a challenge successfully', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge update
//             mockChallengeRepository.updateChallenge.mockResolvedValue(mockChallenge);
//
//             // Execute service method
//             const result = await challengeService.updateChallenge(mockChallenge._id.toString(), mockChallenge);
//
//             // Assertions
//             expect(mockChallengeRepository.updateChallenge).toHaveBeenCalledWith(mockChallenge._id.toString(), mockChallenge);
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if challenge update fails', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge update failure
//             mockChallengeRepository.updateChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_UPDATE_CHALLENGE));
//
//             // Expect error to be thrown
//             await expect(challengeService.updateChallenge(mockChallenge._id.toString(), mockChallenge))
//                 .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_UPDATE_CHALLENGE);
//
//             // Ensure repository was called
//             expect(mockChallengeRepository.updateChallenge).toHaveBeenCalledWith(mockChallenge._id.toString(), mockChallenge);
//         });
//     });
//
//     // Test case for deleting a challenge
//     describe('deleteChallenge', () => {
//         it('should delete a challenge successfully', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge deletion
//             mockChallengeRepository.deleteChallenge.mockResolvedValue(mockChallenge);
//
//             // Execute service method
//             const result = await challengeService.deleteChallenge(mockChallenge._id.toString());
//
//             // Assertions
//             expect(mockChallengeRepository.deleteChallenge).toHaveBeenCalledWith(mockChallenge._id.toString());
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if challenge deletion fails', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge deletion failure
//             mockChallengeRepository.deleteChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_DELETE_CHALLENGE));
//
//             // Expect error to be thrown
//             await expect(challengeService.deleteChallenge(mockChallenge._id.toString()))
//                 .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_DELETE_CHALLENGE);
//
//             // Ensure repository was called
//             expect(mockChallengeRepository.deleteChallenge).toHaveBeenCalledWith(mockChallenge._id.toString());
//         });
//     });
//
//     // Test case for finding a challenge by ID
//     describe('findChallengeById', () => {
//         it('should return a challenge by ID', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock challenge retrieval by ID
//             mockChallengeRepository.findChallengeById.mockResolvedValue(mockChallenge);
//
//             // Execute service method
//             const result = await challengeService.findChallengeById(mockChallenge._id.toString());
//
//             // Assertions
//             expect(mockChallengeRepository.findChallengeById).toHaveBeenCalledWith(mockChallenge._id.toString());
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if challenge is not found', async () => {
//             const mockChallengeId = new mongoose.Types.ObjectId().toString();
//
//             // Mock challenge retrieval failure
//             mockChallengeRepository.findChallengeById.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_FIND_CHALLENGE));
//
//             // Expect error to be thrown
//             await expect(challengeService.findChallengeById(mockChallengeId))
//                 .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_FIND_CHALLENGE);
//
//             // Ensure repository was called
//             expect(mockChallengeRepository.findChallengeById).toHaveBeenCalledWith(mockChallengeId);
//         });
//     });
//
//     // Test cases for managing challenge participants
//     describe('challenge participants', () => {
//         it('should add a participant to the challenge successfully', async () => {
//             const mockChallenge = createMockChallenge();
//             const validUserId = new mongoose.Types.ObjectId().toString();
//
//             // Mock adding participant
//             mockChallengeRepository.addParticipant.mockResolvedValue(mockChallenge);
//
//             // Execute service method
//             const result = await challengeService.addParticipant(mockChallenge._id.toString(), validUserId);
//
//             // Assertions
//             expect(mockChallengeRepository.addParticipant).toHaveBeenCalledWith(mockChallenge._id.toString(), validUserId);
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if the user ID is invalid when adding participant', async () => {
//             const invalidUserId = 'invalidUserId';
//             const mockChallenge = createMockChallenge();
//
//             // Expect error to be thrown
//             await expect(challengeService.addParticipant(mockChallenge._id.toString(), invalidUserId))
//                 .rejects.toThrow(ERROR_MESSAGES.INVALID_USER_ID);
//         });
//     });
//
//     describe('markChallengeAsCompleted', () => {
//         it('should mark the challenge as completed successfully', async () => {
//             const mockChallenge = createMockChallenge();
//
//             // Mock finding challenge
//             mockChallengeRepository.findChallengeById.mockResolvedValue(mockChallenge);
//
//             // Mock marking challenge as completed
//             mockChallengeRepository.markChallengeAsCompleted.mockResolvedValue(mockChallenge);
//
//             // Mock reward services
//             mockUserService.rewardUserForCompletingChallenge = jest.fn();
//             mockLeaderBoardService.getLeaderBoardByChallengeId = jest.fn().mockResolvedValue({
//                 rankings: [
//                     { userId: mockChallenge.participants[0], points: 100 },
//                     { userId: new mongoose.Types.ObjectId().toString(), points: 50 },
//                     { userId: new mongoose.Types.ObjectId().toString(), points: 25 },
//                 ]
//             });
//             mockUserService.rewardUserForTopPlacement = jest.fn();
//
//             // Execute service method
//             const result = await challengeService.markChallengeAsCompleted(mockChallenge._id.toString());
//
//             // Assertions
//             expect(mockChallengeRepository.findChallengeById).toHaveBeenCalledWith(mockChallenge._id.toString());
//             expect(mockUserService.rewardUserForCompletingChallenge).toHaveBeenCalledWith(mockChallenge.participants[0]);
//             expect(mockLeaderBoardService.getLeaderBoardByChallengeId).toHaveBeenCalledWith(mockChallenge._id.toString());
//             expect(mockUserService.rewardUserForTopPlacement).toHaveBeenCalledTimes(3);  // Once per ranking entry
//             expect(mockChallengeRepository.markChallengeAsCompleted).toHaveBeenCalledWith(mockChallenge._id.toString());
//             expect(mockChallenge.status).toBe('COMPLETED');
//             expect(result).toEqual(mockChallenge);
//         });
//
//         it('should throw an error if challenge ID is invalid when marking challenge as completed', async () => {
//             const invalidChallengeId = 'invalidChallengeId';
//
//             // Expect error to be thrown
//             await expect(challengeService.markChallengeAsCompleted(invalidChallengeId))
//                 .rejects.toThrow(ERROR_MESSAGES.INVALID_CHALLENGE_ID);
//         });
//     });
// });
