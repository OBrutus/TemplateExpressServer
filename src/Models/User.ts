import { Document, Schema, model } from "mongoose";
import IModel from "./Model";

export interface IUser extends Document, IModel {
    _id: String
    name: String
}

const UsersSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date,
        default: Date.now
    }
});

export const UserModel = model("Users", UsersSchema);
