import { UserRepository } from "../repositories/user.repository";
import { IUser } from "../interfaces/IUser";
import bcrypt from "bcrypt";
import { RewardService } from "./reward.service";
import { RewardType } from "../utils/enum.utils";
import LeaderBoardService from "./leaderBoard.service";

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private leaderboardService: LeaderBoardService
  ) {}

  /**
   * Create a new user
   */
  async registerUser(userData: IUser): Promise<IUser> {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const newUser = await this.userRepository.create({
        ...userData,
        password: hashedPassword,
      });

      await this.leaderboardService.createGlobalLeaderboard({
        userId: newUser._id,
        totalPoints: 0,
      });

      return newUser;
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
      return await this.userRepository.updateById(user._id.toString(), {
        points: RewardService.reward(RewardType.DAILY_LOGIN, user.points),
      });
    }
    return null;
  }

  /**
   * Update user data
   */
  async updateUser(
    id: string,
    updateData: Partial<IUser>
  ): Promise<IUser | null> {
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
    return this.userRepository.searchUsers(filter ? filter : {});
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
    return this.userRepository.findById(userId).then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return this.userRepository.rewardPoint(
        userId,
        RewardService.reward(RewardType.DAILY_CHALLENGE, user.points)
      );
    });
  }

  /**
   * reward a user for completing  challenge
   */
  async rewardUserForCompletingChallenge(
    userId: string
  ): Promise<IUser | null> {
    return this.userRepository.findById(userId).then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return this.userRepository.rewardPoint(
        userId,
        RewardService.reward(RewardType.CHALLENGE_COMPLETION, user.points)
      );
    });
  }

  async rewardUserForHalfWayChallengeCompletion(
    userId: string
  ): Promise<IUser | null> {
    return this.userRepository.findById(userId).then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return this.userRepository.rewardPoint(
        userId,
        RewardService.reward(RewardType.HALF_WAY, user.points)
      );
    });
  }

  async rewardUserForAchievementUnlock(userId: string): Promise<IUser | null> {
    return this.userRepository.findById(userId).then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return this.userRepository.rewardPoint(
        userId,
        RewardService.reward(RewardType.ACHIEVEMENT_UNLOCK, user.points)
      );
    });
  }

  async rewardUserForTopPlacement(
    userId: string,
    rewardType: string
  ): Promise<IUser | null> {
    return this.userRepository.findById(userId).then((user) => {
      if (!user) {
        throw new Error("User not found");
      }
      return this.userRepository.rewardPoint(
        userId,
        RewardService.reward(rewardType, user.points)
      );
    });
  }

  async addCreatedChallenge(
    userId: string,
    challengeId: string
  ): Promise<IUser | null> {
    return this.userRepository.addCreatedChallenge(userId, challengeId);
  }
}
