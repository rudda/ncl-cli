const shell = require('shelljs');
const fs = require('fs');
const templates = require('../templates/templates');


module.exports = {
    /**
     *
     * @param {set a project name } project_name project name
     * when init a new project then are created some default dirs 
     */
    new: function newProject(project_name) {

        if (project_name !== null && project_name != undefined ) {
            
            console.info(`creating new project`);

            shell.mkdir('-p', process.cwd() + `/${project_name}/app`);
            shell.mkdir('-p', process.cwd() + `/${project_name}/assets`);
            shell.mkdir('-p', process.cwd() + `/${project_name}/fonts`);

            fs.writeFileSync(process.cwd() + `/${project_name}/index.html`, templates.template_index, callback => {
                console.info(callback);
            })

        } else {
            throw 'project name is not defined';
        }
    }
};