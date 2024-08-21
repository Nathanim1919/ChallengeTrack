import {Schema, model} from 'mongoose';


const ProgressSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    challengeId: {type: Schema.Types.ObjectId, ref: 'Challenge', required: true},
    progress: {type: Number, default:0},
    updatedAt: {type: Date, default: Date.now()}
})

export const Progress = model('Progress', ProgressSchema);
