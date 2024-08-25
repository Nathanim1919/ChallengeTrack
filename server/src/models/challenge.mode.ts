import {Schema, model} from 'mongoose';
import {challengeStatus} from "../utils/enum.utils";


const challengeSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
    rewards: [{type: Schema.Types.ObjectId, ref: 'Reward'}],
    status: {
        type: String,
        enum: Object.values(challengeStatus),
        default: 'PENDING'
    },
    rules:[{
        type: String,
        required: true
    }],
    progress: [{
        userId: Schema.Types.ObjectId,
        progress: Number
    }],
    createdAt: {type: Date, default: Date.now}
})


export const Challenge = model('Challenge', challengeSchema);
