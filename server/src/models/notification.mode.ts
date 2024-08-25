import {Schema, model} from 'mongoose';
import {NotificationType} from "../utils/enum.utils";

const NotificationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: Object.values(NotificationType)
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Notification = model('Notification', NotificationSchema);
