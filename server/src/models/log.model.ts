import {model, Schema} from "mongoose";
import {ILog} from "../interfaces/ILogs";

const logSchema = new Schema<ILog>({
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
