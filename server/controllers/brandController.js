const {Brand, Type} = require('../models/models');
const ApiError = require('../error/ApiError');
class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }

    async delete(req, res){
        const {id} = req.body;
        const brandToDelete = await Brand.destroy({ where: {id: id},});

        return res.json({Deleted: id});
    }
}

module.exports = new BrandController();