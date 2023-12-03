const { Router } = require("express");
const Project = require('../models/ProjectsModel.js')

const router = Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.send(projects);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id);
        res.send(project);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
});

router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body)
        res.send(project);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndUpdate(id, req.body);
        if(!project) {
            return res.status(404).json({message: `Cannot find a project with ID ${id}`})
        };
        const updatedProject = await Project.findById(id)
        res.send(updatedProject);
    } catch (error) {
        res.status(500).json({message: error.message});
    };
})

// delete
router.get('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.send(`${id} project was deleted`)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
