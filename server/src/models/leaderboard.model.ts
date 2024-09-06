import {Schema, model} from 'mongoose';
import {ILeaderboard} from "../interfaces/ILeaderBoard";


const LeaderboardSchema = new Schema<ILeaderboard>({
    challengeId: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
    },
    rankings: [{
        userId: {type: Schema.Types.ObjectId, ref:'User', required: true},
        score: {type: Number, required: true}
    }],
    updatedAt: {type: Date, default: Date.now},
});


export const Leaderboard = model('Leaderboard', LeaderboardSchema);
