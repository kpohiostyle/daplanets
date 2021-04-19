import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const GalaxySpecies = new Schema(
    {
        galaxy: { type: ObjectId, ref: 'Galaxy', required: true },
        species: { type: ObjectId, ref: 'Species', required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default GalaxySpecies;