import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Planet = new Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true, enum: ["Giant Planet", "Mini-Neptune", "Super-Earth", "Sub-Earth", "Earth"] },
        description: { type: String, required: true },
        galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
        star: { type: ObjectId, ref: "Star", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;