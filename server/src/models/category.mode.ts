import { Schema, model} from 'mongoose';
import { ICategory } from '../interfaces/ICategory';


const CategorySchema = new Schema<ICategory>({
    name:{type: String, required: true, unique: true},
    description: {type: String, required: true},
    challenges: [{
        type: Schema.Types.ObjectId,
        ref: 'Challenge'
    }],
    
});

export const Category = model('Category', CategorySchema);
