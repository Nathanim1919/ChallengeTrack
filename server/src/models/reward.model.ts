import {Schema, model} from 'mongoose';

const RewardSchema = new Schema({
    challengeId: {
        type: Schema.Types.ObjectId,
        ref: 'Challenge',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    createdAt: {type: Date, default: Date.now}
});


export const Reward = model('Reward', RewardSchema);
