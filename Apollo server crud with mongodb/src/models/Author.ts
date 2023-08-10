import mongoose, { Document } from "mongoose";

export interface AuthorDocument extends Document {
    name: string,
    age?: number,
    books: Array<any>
}

export const AuthorSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    age: Number,    
});

export default mongoose.model<AuthorDocument>( 'Author', AuthorSchema );
