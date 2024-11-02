import { IGlobalLeaderboard, ILeaderboard } from "../interfaces/ILeaderBoard";
import { Leaderboard } from "../models/leaderboard.model";
import { GlobalLeaderboard } from "../models/globalLeaderBoard.model";
import mongoose, { ClientSession } from "mongoose";

class LeaderboardRepository {
  async createLeaderboard(
    leaderboardData: ILeaderboard,
    session?: ClientSession
  ): Promise<ILeaderboard> {
    if (session) {
      return await new Leaderboard(leaderboardData).save({ session });
    }

    return await new Leaderboard(leaderboardData).save();
  }

  async createGlobalLeaderboard(
    globalLeaderBoardDate: IGlobalLeaderboard
  ): Promise<IGlobalLeaderboard> {
    return await GlobalLeaderboard.create(globalLeaderBoardDate);
  }

  async addParticipantToLeaderboard(
    challengeId: string,
    userId: string
  ): Promise<ILeaderboard | null> {
    const leaderBoard = await Leaderboard.findOne({challengeId });
    if (!leaderBoard) {
      throw new Error("Leaderboard not found");
    }
    const updatedLeaderboard = await Leaderboard.findByIdAndUpdate(
      leaderBoard._id,
      {
        $addToSet: {
          rankings: {
            userId: new mongoose.Types.ObjectId(userId),
            score: 0,
          },
        },
      },
      { new: true, upsert: true } // Use upsert to create if not exists
    ).exec();

    if (!updatedLeaderboard) {
      throw new Error("Failed to add participant to leaderboard");
    }

    return updatedLeaderboard;
  }
  async deleteLeaderBoardByChallengeId(challengeId: string): Promise<boolean> {
    try {
      const leaderboard = await Leaderboard.findOneAndDelete({
        challengeId,
      }).exec();

      if (!leaderboard) {
        throw new Error("Leaderboard not found");
      }

      console.log("Leaderboard deleted successfully");
      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error deleting leaderboard:", error.message);
      } else {
        console.error("Error deleting leaderboard: Unknown error");
      }
      return false;
    }
  }

  async removeParticipantFromLeaderboard(
    challengeId: string,
    userId: string
  ): Promise<ILeaderboard | null> {
    try {
      // Convert userId to ObjectId to ensure correct comparison
      const userObjectId = new mongoose.Types.ObjectId(userId);

      const leaderboard = await Leaderboard.findOne({
        challengeId,
      })

      const updatedLeaderboard = await Leaderboard.findByIdAndUpdate(
        leaderboard,
        {
          $pull: {
            rankings: {
              userId: userObjectId, // Use ObjectId for correct comparison
            },
          },
        },
        { new: true } // Return the updated document
      ).exec();

      if (!updatedLeaderboard) {
        throw new Error("Failed to remove participant from leaderboard");
      }

      console.log("Participant successfully removed from leaderboard");
      return updatedLeaderboard;
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          "Error removing participant from leaderboard:",
          error.message
        );
      } else {
        console.error(
          "Error removing participant from leaderboard: Unknown error"
        );
      }
      return null;
    }
  }

  async getLeaderboardById(
    leaderboardId: string
  ): Promise<ILeaderboard | null> {
    return await Leaderboard.findById(leaderboardId).exec();
  }

  async getGlobalLeaderboard(): Promise<IGlobalLeaderboard[] | null> {
    const leaderboardEntries = await GlobalLeaderboard.find({})
      .populate("userId")
      .sort({ totalPoints: -1 })
      .exec();

    return leaderboardEntries.map((entry, index) => ({
      userId: entry.userId,
      totalPoints: entry.totalPoints,
      rank: index + 1,
    }));
  }

  async getLeaderBoardByChallengeId(
    challengeId: string
  ): Promise<ILeaderboard | null> {
    return await Leaderboard.findOne({ challengeId })
      .sort({ score: -1 })
      .populate({
        path: "rankings.userId",
        model: "User",
        select: "username email",
      })
      .exec();
  }
}

export default LeaderboardRepository;
