const express = require('express');
const checklistRouter = require('./src/routes.js/checklist')
require('./src/config/database')

const app = express();

app.use(express.json());

app.use('/checklists',checklistRouter)

app.listen(3000, () => {
    console.log("Server listening on port 3000")
});