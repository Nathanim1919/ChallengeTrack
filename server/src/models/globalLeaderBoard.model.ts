import { Schema, model } from 'mongoose';
import {IGlobalLeaderboard} from "../interfaces/ILeaderBoard";


const globalLeaderboardSchema = new Schema<IGlobalLeaderboard>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    totalPoints: { type: Number, default: 0 }, // Cumulative points across all challenges
    rank: { type: Number } // Optional: You can calculate this dynamically or store it
});

export const GlobalLeaderboard = model('GlobalLeaderboard', globalLeaderboardSchema);
