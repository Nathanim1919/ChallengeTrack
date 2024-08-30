import {UserService} from "../services/user.service";
import {IUser} from "../interfaces/IUser";
import {UserController} from "../controllers/user.controller";
import {ObjectId} from "bson";
import {UserRepository} from "../repositories/user.repository";
import request from 'supertest';
import express from "express";

const app = express();
app.use(express.json());

describe('UserController', () => {
    let mockUserService: jest.Mocked<UserService>;
    let userController: UserController;

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
    }

    beforeEach(() => {
        const mockUserRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            findByEmailOrUsername: jest.fn(),
            updateById: jest.fn(),
            deleteById: jest.fn(),
            searchUsers: jest.fn()
        } as jest.Mocked<UserRepository>;

        mockUserService = new UserService(mockUserRepository) as jest.Mocked<UserService>;
        jest.spyOn(mockUserService, 'registerUser').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'loginUser').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'getUserById').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'updateUser').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'deleteUser').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'searchUsers').mockImplementation(jest.fn());
        jest.spyOn(mockUserService, 'getUserByEmailOrUsername').mockImplementation(jest.fn());

        userController = new UserController(mockUserService);
        app.post('/register', userController.register.bind(userController));
        app.post('/login', userController.login.bind(userController));
    });

    afterEach(async () => {
        jest.clearAllMocks();
        // await app.close(); // Close the server after each test
    });

    describe("register", () => {
        it('should register a new user', async () => {
            mockUserService.registerUser.mockResolvedValue(mockUser);

            const res = await request(app)
                .post('/register')
                .send(mockUser);

            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);
            expect(res.body.data).toEqual({
                ...mockUser,
                _id: mockUser._id.toString(),
                createdAt: mockUser.createdAt ? mockUser.createdAt.toISOString() : undefined,
                updatedAt: mockUser.updatedAt ? mockUser.updatedAt.toISOString() : undefined
            });
        });

        it('should return 400 if user registration fails', async () => {
            // Simulate an error during user registration
            mockUserService.registerUser.mockRejectedValue(new Error('Registration failed'));

            const res = await request(app)
                .post('/register')
                .send(mockUser);

            expect(res.status).toBe(400);
            expect(res.body.success).toBe(false);
            expect(res.body.message).toBe('Registration failed');
        });
    });

    describe("login", () => {
        it('should login a user successfully', async () => {
            mockUserService.loginUser.mockResolvedValue(mockUser);

            const res = await request(app)
                .post('/login')
                .send({ identifier: mockUser.email, password: mockUser.password });

            expect(res.status).toBe(200);
            expect(res.body.success).toBe(true);
            expect(res.body.data.user).toEqual({
                ...mockUser,
                _id: mockUser._id.toString(),
                createdAt: mockUser.createdAt ? mockUser.createdAt.toISOString() : undefined,
                updatedAt: mockUser.updatedAt ? mockUser.updatedAt.toISOString() : undefined
            });
        });
    });
});
