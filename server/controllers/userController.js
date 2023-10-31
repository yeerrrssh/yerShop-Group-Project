const ApiError = require('../error/ApiError');
const {User} = require("../models/models");
class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next){
        const {id} = req.query;
        if (!id) {
            return next(ApiError.badRequest('ID not defined'));
        }
        res.json(id);
    }

    async delete(req, res){
        const {id} = req.body;
        const userToDelete = await User.destroy({ where: {id: id},});

        return res.json({Deleted: id});
    }
}

module.exports = new UserController();