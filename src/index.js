import './style.css';
import {changeProjectDOM} from './projectDOM';
import {updateInbox} from './inbox';
//import {changeTaskDOM} from './taskDOM';


let projects=[];
if(localStorage.hasOwnProperty('projects')){
    projects=JSON.parse(localStorage.getItem('projects'));
    //console.log("current:-",projects);
    projects.forEach(project=>{ changeProjectDOM.addProject(project) });
}

updateInbox(projects);

const addNewProject=e=>{
    changeProjectDOM.openProjectForm();
    projects=changeProjectDOM.getProjectArr();
    updateInbox(projects);
};

const newProject=document.querySelector(".new-project");
newProject.addEventListener('click',addNewProject);

window.onbeforeunload=()=>{
    updateInbox(projects);
    projects=changeProjectDOM.getProjectArr();
    localStorage.setItem('projects',JSON.stringify(projects));
}