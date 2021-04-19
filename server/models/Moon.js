import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
    {
        title: { type: String, required: true },
        shape: { type: String, required: true },
        description: { type: String, required: true },
        mass: { type: Number, required: true },
        planet: { type: ObjectId, ref: 'Planet', required: true },

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;