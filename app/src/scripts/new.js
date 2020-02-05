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

        if (project_name !== null && project_name != undefined) {

            console.info(`creating new project`);

            /** TODO slipt on function comments bellow */

            /** creating folder structure */
            shell.mkdir('-p', process.cwd() + `/${project_name}/app`);
            shell.mkdir('-p', process.cwd() + `/${project_name}/assets`);
            shell.mkdir('-p', process.cwd() + `/${project_name}/fonts`);

            /** creating important files */
            fs.writeFileSync(process.cwd() + `/${project_name}/index.html`, '', callback => {});
            fs.writeFileSync(process.cwd() + `/${project_name}/app/app.js`, '', callback => {});
            fs.writeFileSync(process.cwd() + `/${project_name}/app/app.html`, templates.template_index, callback => {});
            fs.writeFileSync(process.cwd() + `/${project_name}/app/app.css`, templates.template_index, callback => {});

            /** init npm project */
            shell.cd(process.cwd() + `/${project_name}`);
            shell.exec('npm init -f', {silent: true});

            /** intall core dependencies... such as ncljs (ncljs works in progress :/) */
            shell.exec('npm install ', {silent: true});


        } else {
            throw `project name is not defined`;
        }
    },
    /** TODO fix: when create component with path name e.e /compoments/headerComponent output: header.component.html */
    component : function component(component_name) {
            
            /** creating important files */
            fs.writeFileSync(process.cwd() + `/${project_name}/app/${component_name}/${component_name}.html`, '', callback => {});
            fs.writeFileSync(process.cwd() + `/${project_name}/app/${component_name}/${component_name}.js`, '', callback => {});
            fs.writeFileSync(process.cwd() + `/${project_name}/app/${component_name}/${component_name}.css`, templates.template_index, callback => {});
        
    }
};
