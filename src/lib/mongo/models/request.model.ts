import mongoose, { Schema, Document } from "mongoose";

export interface IRequest extends Document {
    requestorName: string,
    itemRequested: string,
    createdDate: Date,
    lastEditedDate?: Date,
    status: "pending" | "completed" | "approved" | "rejected",
};

const schema = new Schema<IRequest>({
    requestorName: { type: String, required: true, minLength: 3, maxLength: 30 },
    itemRequested: { type: String, required: true, minLength: 2, maxLength: 100 },
    createdDate: { type: Date, required: true, default: Date.now },
    lastEditedDate: { type: Date, required: false },
    status: { type: String, required: true, enum: ["pending", "completed", "approved", "rejected"], default: "pending" },
});

export default mongoose.models.Request || mongoose.model<IRequest>("Request", schema);
