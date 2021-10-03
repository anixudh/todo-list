import './style.css';
import {changeProjectDOM} from './projectDOM';
//import {changeTaskDOM} from './taskDOM';


let projects=[];
if(localStorage.hasOwnProperty('projects')){
    projects=JSON.parse(localStorage.getItem('projects'));
    //console.log("current:-",projects);
    projects.forEach(project=>{ changeProjectDOM.addProject(project) });
}

const addNewProject=e=>{
    changeProjectDOM.openProjectForm();
    projects=changeProjectDOM.getProjectArr();
};

const newProject=document.querySelector(".new-project");
newProject.addEventListener('click',addNewProject);

window.onbeforeunload=()=>{
    projects=changeProjectDOM.getProjectArr();
    localStorage.setItem('projects',JSON.stringify(projects));
}