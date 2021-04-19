import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Star = new Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true, enum: ["Red Dwarf", "White Supergiant", "Blue Star", "Red Giant"] },
        description: { type: String, required: true },
        galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;