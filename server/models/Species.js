import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Species = new Schema(
    {
        race: { type: String, required: true },
        description: { type: String, required: true },
        language: { type: String, required: true },
        endangerd: { type: Boolean, required: true }
        //TODO probably need a GalaxyId, PlanetId, 
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;