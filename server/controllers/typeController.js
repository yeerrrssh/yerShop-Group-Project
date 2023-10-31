const {Type, Brand} = require('../models/models');
const ApiError = require('../error/ApiError');
class TypeController {
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async delete(req, res){
        const {id} = req.body;
        const typeToDelete = await Type.destroy({ where: {id: id},});

        return res.json({Deleted: id});
    }
}

module.exports = new TypeController();