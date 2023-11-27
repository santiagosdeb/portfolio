const { Router } = require("express");
const Skill = require("../models/SkillsModel.js");

const router = Router();

router.get('/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.send(skills);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await Skill.findById(id);
        res.send(skill);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

router.post('/', async (req, res) => {
    try {
        const newSkill = await Skill.create(req.body);
        res.send(newSkill);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    };
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const skill = await Skill.findByIdAndUpdate(id, req.body);
        if (!skill) {
            return res.status(404).json({message: `Cannot find a skill with ID ${id}`});
        };
        const updatedSkill = await Skill.findById(id);
        res.send(updatedSkill); 
    } catch (error) {
        res.status(500).json({message: error.message});   
    };
});

module.exports = router;