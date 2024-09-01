import { ChallengeRepository } from '../repositories/challenge.repository';
import ChallengeService from '../services/challenge.service';
import { IChallenge } from '../interfaces/IChallenge';
import mongoose from 'mongoose';

jest.mock('../repositories/challenge.repository');

describe('ChallengeService', () => {
    let challengeService: ChallengeService;
    let mockChallengeRepository: jest.Mocked<ChallengeRepository>;

    const createMockChallenge = (): IChallenge => ({
        _id: new mongoose.Types.ObjectId(),
        title: 'Challenge 1',
        description: 'This is a challenge',
        createdBy: new mongoose.Types.ObjectId(),
        startDate: new Date(),
        endDate: new Date(),
        participants: [new mongoose.Types.ObjectId().toString()],
        status: 'PENDING',
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
            mockChallengeRepository.createChallenge.mockRejectedValue(new Error('Failed to create challenge'));

            await expect(challengeService.createChallenge(mockChallenge))
                .rejects.toThrow('Failed to create challenge');

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
            mockChallengeRepository.updateChallenge.mockRejectedValue(new Error('Failed to update challenge'));

            await expect(challengeService.updateChallenge(mockChallenge._id.toString(), mockChallenge))
                .rejects.toThrow('Failed to update challenge');

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
            mockChallengeRepository.deleteChallenge.mockRejectedValue(new Error('Failed to delete challenge'));

            await expect(challengeService.deleteChallenge(mockChallenge._id.toString()))
                .rejects.toThrow('Failed to delete challenge');

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
            mockChallengeRepository.findChallengeById.mockRejectedValue(new Error('Failed to find challenge'));

            await expect(challengeService.findChallengeById(mockChallengeId))
                .rejects.toThrow('Failed to find challenge');

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
                .rejects.toThrow('Invalid user ID format');
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
                .rejects.toThrow('Invalid user ID format');
        });
    });
});
