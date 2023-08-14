const Express = require('express');

// Middlewares:
const rootPath = require('../middleware/root_path.middleware');
const errors = require('../middleware/error_handler.middleware');
const profileRoutes = require('./profile.routes');
const userRoutes = require('./user.routes');
const experienceRoutes = require('./experience.routes');
const referencesRoutes = require('./references.routes');
const skillsRoutes = require('./skills.routes');

const app = Express();

// Rutas

app.use('/profile', profileRoutes);
app.use('/user', userRoutes);
app.use('/experiences', experienceRoutes);
app.use('/references', referencesRoutes);
app.use('/skills', skillsRoutes);
app.use('/', rootPath.handler);
app.use(rootPath.setHeaders);
app.use(errors.handler);

module.exports = app;
