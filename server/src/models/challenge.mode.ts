import {Schema, model} from 'mongoose';
import {challengeStatus} from "../utils/enum.utils";
import {IChallenge} from "../interfaces/IChallenge";

const challengeSchema = new Schema<IChallenge>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner',
        required: true
    },
    duration: {type: Number, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
    leaderboard: {type: Schema.Types.ObjectId, ref: 'Leaderboard'},
    categorie: {type: Schema.Types.ObjectId, ref: 'Category'},
    totalParticipants: {type: Number, default: 0},
    participantsOnTrack: {type: Number, default: 0},
    participantsBehind: {type: Number, default: 0},
    participantsLeft: {type: Number, default: 0},
    status: {
        type: String,
        enum: ['PENDING','READY', 'ONGOING', 'COMPLETED', 'CANCELED'],
        default: 'PENDING'
    },
    visibility: {
        type: Boolean,
        default: false,
        required: true
    },
    rules:
        {
            minParticipants: {type: Number, required: true},
            maxParticipants: {type: Number, required: true},
            verificationMethod: {type: String, enum: ['self-report', 'third-party', 'automated'], default: 'self-report'},
        },
    progress: {type: Number, default: 0},
    logs: [{type: Schema.Types.ObjectId, ref: 'Log'}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

export const Challenge = model('Challenge', challengeSchema);
