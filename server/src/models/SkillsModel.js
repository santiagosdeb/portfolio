const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema(
    {
        name:  {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        smallImage: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Skill', skillsSchema);