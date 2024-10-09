import {ILogs} from "../interfaces/ILogs";
import {model, Schema} from "mongoose";

const logSchema = new Schema<ILogs>({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    challenge: {type: Schema.Types.ObjectId, ref: 'Challenge', required: true},
    // action: {type: String, required: true},
    // timestamp: {type: Date, required: true},
    details: {
        type: String,
        required: true
    },
    // images: [{type: String}],
    days: {type: Number, required: true},
}, {timestamps: true});

export const Log = model('Log', logSchema);
