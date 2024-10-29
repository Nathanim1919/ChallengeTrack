import {Schema, model} from 'mongoose';
import {IUser, UserRole} from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: 'user'
    },
    achievements: [{
        type: Schema.Types.ObjectId,
        ref: 'Achievement'
    }],
    logs: [{type: Schema.Types.ObjectId, ref: 'Log'}],
    createdChallenges: [{
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    }],
    participatedChallenges: [{
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    }],
    wonChallenges: [{
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    }],
    points: {
        type: Number,
        default: 0
    },
    isNewUser: {
        type: Boolean,
        default: true
    },
    challengePoints: [{
       type: Schema.Types.ObjectId,
        ref: 'ChallengePoint'
    }],

}, {timestamps: true});


export const User = model('User', userSchema);
