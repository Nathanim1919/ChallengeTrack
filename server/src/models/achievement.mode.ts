import {Schema, model} from 'mongoose';


const AchievementSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    criteria: {
        type: {
            type: String,
            enum: ['participation', 'completion', 'winning'],
            required: true
        },
        threshold: {type: Number, required: true}
    },
    points: {type: Number, required: true},
    badgeUrl: {type: String},
    createdAt: {type: Date, default: Date.now}
})


export const Achievement = model('Achievement', AchievementSchema);
