import { ChallengeRepository } from '../repositories/challenge.repository';
import ChallengeService from '../services/challenge.service';
import { IChallenge } from '../interfaces/IChallenge';
import mongoose from 'mongoose';
import { IUser } from "../interfaces/IUser";

jest.mock('../repositories/challenge.repository');

describe('ChallengeService', () => {
    let challengeService: ChallengeService;
    let mockChallengeRepository: jest.Mocked<ChallengeRepository>;

    const ERROR_MESSAGES = {
        FAILED_TO_CREATE_CHALLENGE: 'Failed to create challenge',
        FAILED_TO_UPDATE_CHALLENGE: 'Failed to update challenge',
        FAILED_TO_DELETE_CHALLENGE: 'Failed to delete challenge',
        FAILED_TO_FIND_CHALLENGE: 'Failed to find challenge',
        INVALID_USER_ID: 'Invalid user ID format',
        INVALID_CHALLENGE_ID: 'Invalid challenge ID',
    };

    const createMockUser = (): IUser => ({
        _id: new mongoose.Types.ObjectId(),
        username: 'user1',
        name: 'User 1',
        email: 'user1@gmail.com',
        password: 'password',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: 'user',
        achievements: [],
        createdChallenges: [],
        participatedChallenges: [],
        wonChallenges: [],
        profilePicture: 'https://via.placeholder.com/150'
    });

    const createMockChallenge = (): IChallenge => ({
        _id: new mongoose.Types.ObjectId(),
        title: 'Challenge 1',
        description: 'This is a challenge',
        createdBy: new mongoose.Types.ObjectId(),
        startDate: new Date(),
        endDate: new Date(),
        participants: [new mongoose.Types.ObjectId().toString()],
        status: 'PENDING',
        visibility: 'public',
        createdAt: new Date(),
        updatedAt: new Date(),
        progress: 0,
        rules: [{
            minParticipants: 1,
            maxParticipants: 10,
            verificationMethod: 'self-report'
        }],
        rewards: [{
            description: 'Reward 1',
            points: 100,
            badges: ['Badge 1']
        }],
        leaderboard: new mongoose.Types.ObjectId()
    });

    beforeEach(() => {
        mockChallengeRepository = {
            createChallenge: jest.fn(),
            updateChallenge: jest.fn(),
            deleteChallenge: jest.fn(),
            searchChallenges: jest.fn(),
            findChallengeById: jest.fn(),
            addParticipant: jest.fn(),
            removeParticipant: jest.fn(),
            markChallengeAsCompleted: jest.fn(),
            getChallengeParticipants: jest.fn()
        } as jest.Mocked<ChallengeRepository>;

        challengeService = new ChallengeService(mockChallengeRepository);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('createChallenge', () => {
        it('should create a new challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.createChallenge.mockResolvedValue(mockChallenge);

            const result = await challengeService.createChallenge(mockChallenge);

            expect(mockChallengeRepository.createChallenge).toHaveBeenCalledWith(mockChallenge);
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if challenge creation fails', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.createChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_CREATE_CHALLENGE));

            await expect(challengeService.createChallenge(mockChallenge))
                .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_CREATE_CHALLENGE);

            expect(mockChallengeRepository.createChallenge).toHaveBeenCalledWith(mockChallenge);
        });
    });

    describe('updateChallenge', () => {
        it('should update a challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.updateChallenge.mockResolvedValue(mockChallenge);

            const result = await challengeService.updateChallenge(mockChallenge._id.toString(), mockChallenge);

            expect(mockChallengeRepository.updateChallenge).toHaveBeenCalledWith(mockChallenge._id.toString(), mockChallenge);
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if challenge update fails', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.updateChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_UPDATE_CHALLENGE));

            await expect(challengeService.updateChallenge(mockChallenge._id.toString(), mockChallenge))
                .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_UPDATE_CHALLENGE);

            expect(mockChallengeRepository.updateChallenge).toHaveBeenCalledWith(mockChallenge._id.toString(), mockChallenge);
        });
    });

    describe('deleteChallenge', () => {
        it('should delete a challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.deleteChallenge.mockResolvedValue(mockChallenge);

            const result = await challengeService.deleteChallenge(mockChallenge._id.toString());

            expect(mockChallengeRepository.deleteChallenge).toHaveBeenCalledWith(mockChallenge._id.toString());
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if challenge deletion fails', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.deleteChallenge.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_DELETE_CHALLENGE));

            await expect(challengeService.deleteChallenge(mockChallenge._id.toString()))
                .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_DELETE_CHALLENGE);

            expect(mockChallengeRepository.deleteChallenge).toHaveBeenCalledWith(mockChallenge._id.toString());
        });
    });

    describe('searchChallenges', () => {
        it('should return a list of challenges successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.searchChallenges.mockResolvedValue([mockChallenge]);

            const result = await challengeService.searchChallenges({});

            expect(mockChallengeRepository.searchChallenges).toHaveBeenCalledWith({});
            expect(result).toEqual([mockChallenge]);
        });

        it('should return an empty array if no challenges are found', async () => {
            mockChallengeRepository.searchChallenges.mockResolvedValue([]);

            const result = await challengeService.searchChallenges({});

            expect(mockChallengeRepository.searchChallenges).toHaveBeenCalledWith({});
            expect(result).toEqual([]);
        });
    });

    describe('findChallengeById', () => {
        it('should return a challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.findChallengeById.mockResolvedValue(mockChallenge);

            const result = await challengeService.findChallengeById(mockChallenge._id.toString());

            expect(mockChallengeRepository.findChallengeById).toHaveBeenCalledWith(mockChallenge._id.toString());
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if challenge search fails', async () => {
            const mockChallengeId = new mongoose.Types.ObjectId().toString();
            mockChallengeRepository.findChallengeById.mockRejectedValue(new Error(ERROR_MESSAGES.FAILED_TO_FIND_CHALLENGE));

            await expect(challengeService.findChallengeById(mockChallengeId))
                .rejects.toThrow(ERROR_MESSAGES.FAILED_TO_FIND_CHALLENGE);

            expect(mockChallengeRepository.findChallengeById).toHaveBeenCalledWith(mockChallengeId);
        });
    });

    describe('challenge participants', () => {
        it('should add a participant to the challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            const validUserId = new mongoose.Types.ObjectId().toString();
            mockChallengeRepository.addParticipant.mockResolvedValue(mockChallenge);

            const result = await challengeService.addParticipant(mockChallenge._id.toString(), validUserId);

            expect(mockChallengeRepository.addParticipant).toHaveBeenCalledWith(mockChallenge._id.toString(), validUserId);
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if user ID is invalid when adding participant', async () => {
            const invalidUserId = 'invalidUserId';

            await expect(challengeService.addParticipant(new mongoose.Types.ObjectId().toString(), invalidUserId))
                .rejects.toThrow(ERROR_MESSAGES.INVALID_USER_ID);
        });

        it('should remove a participant from the challenge successfully', async () => {
            const mockChallenge = createMockChallenge();
            const validUserId = new mongoose.Types.ObjectId().toString();
            mockChallengeRepository.removeParticipant.mockResolvedValue(mockChallenge);

            const result = await challengeService.removeParticipant(mockChallenge._id.toString(), validUserId);

            expect(mockChallengeRepository.removeParticipant).toHaveBeenCalledWith(mockChallenge._id.toString(), validUserId);
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if user ID is invalid when removing participant', async () => {
            const invalidUserId = 'invalidUserId';

            await expect(challengeService.removeParticipant(new mongoose.Types.ObjectId().toString(), invalidUserId))
                .rejects.toThrow(ERROR_MESSAGES.INVALID_USER_ID);
        });

        it('should mark a challenge as completed successfully', async () => {
            const mockChallenge = createMockChallenge();
            mockChallengeRepository.markChallengeAsCompleted.mockResolvedValue(mockChallenge);

            const result = await challengeService.markChallengeAsCompleted(mockChallenge._id.toString());

            expect(mockChallengeRepository.markChallengeAsCompleted).toHaveBeenCalledWith(mockChallenge._id.toString());
            expect(result).toEqual(mockChallenge);
        });

        it('should throw an error if challenge ID is invalid when marking challenge as completed', async () => {
            const invalidChallengeId = 'invalidChallengeId';

            await expect(challengeService.markChallengeAsCompleted(invalidChallengeId))
                .rejects.toThrow(ERROR_MESSAGES.INVALID_CHALLENGE_ID);
        });
    });
});
