const { User } = require("../../models/index.js")
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt")

const usersController = {
    create: (req, res) => {
        const errors = validationResult(req);
        // Validate errors
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        else {
            // Check if user exists
            User.findAll()
                .then(users => {
                    let userToRegister = users.find(i => i.email == req.body.email)
                    if (userToRegister) {
                        return res.status(400).send("User already exist")
                    } else {
                        User.create({
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            image: req.body.image,
                            roleId: req.body.roleId,
                        })
                            .then((result) => {
                                res.status(200).json(
                                    {
                                        id: result.id,
                                        firstName: result.firstName,
                                        lastName: result.lastName,
                                        email: result.email,
                                    });
                            })
                            .catch((error) => {
                                return res.status(500).send(error)
                            });

                    }
                })
        }
    },
    delete: function (req, res) {
        let userId = req.params.id;
        User.destroy({
            where: {
                id: userId
            }
        })
            .then((deletedRecord) => {
                if (deletedRecord === 1) {
                    return res.status(200).json({ message: "Deleted successfully" });
                }
                else {
                    return res.status(404).json({ message: "record not found" })
                }
            })
            .catch((error) => {
                res.status(500).json(error);
            })
    }
}
module.exports = usersController