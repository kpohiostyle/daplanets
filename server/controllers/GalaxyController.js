import BaseController from "../utils/BaseController";
import { galaxyService } from "../services/GalaxyService";

export class StarsController extends BaseController {
    constructor() {
        super("api/galaxy");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }

    /**
     * Sends found values to a client by request
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async getAll(req, res, next) {
        try {
            const data = await galaxyService.find()
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const data = await galaxyService.findOne({ _id: req.params.id })
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    /**
     * Creates a value from request body and returns it
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @param {import("express").NextFunction} next 
     */
    async create(req, res, next) {
        try {
            const data = await galaxyService.create(req.body)
            res.send(data);
        } catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await galaxyService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            let data = await galaxyService.delete(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}