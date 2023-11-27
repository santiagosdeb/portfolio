const express = require('express');
const morgan = require("morgan");
const projectsRoutes = require('./routes/ProjectsRoutes.js')
const skillsRoutes = require('./routes/SkillsRoutes.js')

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

// Routes
app.use('/projects', projectsRoutes);
app.use('/skills', skillsRoutes);
 

module.exports = app