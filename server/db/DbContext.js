import GalaxySchema from "../models/Galaxy";
import PlanetSchema from "../models/Planet";
import StarSchema from "../models/Star";
import MoonSchema from "../models/Moon";
import GalaxySpeciesSchema from "../models/GalaxySpecies"
import mongoose from "mongoose";

class DbContext {
  Galaxy = mongoose.model("Galaxy", GalaxySchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Stars = mongoose.model("Star", StarSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  GalaxySpecies = mongoose.model("GalaxySpecies", GalaxySpeciesSchema);

}

export const dbContext = new DbContext();
