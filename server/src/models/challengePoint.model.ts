import {IChallengePoints} from "../interfaces/IUser";
import {model, Schema} from "mongoose";

const challengePointsSchema = new Schema<IChallengePoints>({
    challengeId: { type: Schema.Types.ObjectId, ref: 'Challenge', required: true },
    points: { type: Number, default: 0 },
});

export const ChallengePoint = model('ChallengePoint', challengePointsSchema);
