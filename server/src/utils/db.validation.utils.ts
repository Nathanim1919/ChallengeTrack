import mongoose from "mongoose";

export const validateMongoIds = (ids: string[]): boolean => {
    return ids.every(id => mongoose.Types.ObjectId.isValid(id));
}
