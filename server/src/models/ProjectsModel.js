const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        skills: {
            type: Array,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Project', projectsSchema)