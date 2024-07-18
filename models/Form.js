const { Schema, model } = require("mongoose");

const formSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {
        type: String,
        required: true,
    },
    rollNumber: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    purpose: {
        type: String,
    },
    specificType: {
        type: String,
    },
    category: {
        type: String,
    },
    groupName: {
        type: String,
    },
    time: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Form = model("Form", formSchema);

module.exports = Form;
