import {Schema, model} from 'mongoose';


const LeaderboardSchema = new Schema({
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
