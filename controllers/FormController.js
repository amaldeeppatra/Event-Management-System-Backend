const Form = require("../models/Form");
const User = require("../models/user")

async function submitForm(req, res) {
    try {
        console.log(req);
        const {
            name,email, rollNumber, contact, branch, year, date, purpose, specificType, category, groupName, time
        } = req.body;

        let user = await User.findOne({ email });

 


  await Form.create({
            user: user._id,
            name,
            rollNumber, contact, branch, year, date, purpose, specificType, category, groupName, time
        });

    

        res.json({
            name,email, rollNumber, contact, branch, year, date, purpose, specificType, category, groupName, time

        });
    } catch (err) {
        res.json(err);
    }
}

module.exports = {
    submitForm
};
