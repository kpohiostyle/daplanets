import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxySpeciesService {
    async findSpecies(query) {
        let data = await dbContext.GalaxySpecies.find(query).populate('Species')
        // @ts-ignore
        return data.map(d => d.species)
    }
    async findGalaxy(query) {
        let data = await dbContext.GalaxySpecies.find(query).populate('Galaxy')
        return data
    }
    async create(body) {
        return await dbContext.GalaxySpecies.create(body)
    }
    async edit(body) {
        let data = await dbContext.GalaxySpecies.findOneAndUpdate({ _id: body.id }, body, { new: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.GalaxySpecies.findOneAndDelete({ _id: id })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return "Successfully Deleted"
    }

}

export const galaxySpeciesService = new GalaxySpeciesService();