import mongoose from "mongoose";
export const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
});
export default mongoose.model('Author', AuthorSchema);
