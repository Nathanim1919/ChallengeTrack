import {Schema, model} from 'mongoose';
import {challengeStatus} from "../utils/enum.utils";
import {IChallenge} from "../interfaces/IChallenge";

const challengeSchema = new Schema<IChallenge>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
    leaderboard: [{type: Schema.Types.ObjectId, ref: 'Leaderboard'}],
    status: {
        type: String,
        enum: ['PENDING', 'ONGOING', 'COMPLETED', 'CANCELED'],
        default: 'PENDING'
    },
    rules:[
        {
            minParticipants: {type: Number, required: true},
            maxParticipants: {type: Number},
            verificationMethod: {type: String, enum: ['self-report', 'third-party', 'automated'], required: true}
        }
    ],
    progress: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export const Challenge = model('Challenge', challengeSchema);
