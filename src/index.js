import './style.css';
import {changeProjectDOM} from './projectDOM';
//import {changeTaskDOM} from './taskDOM';

let projects=[];

const addNewProject=e=>{

    //console.log(e);
    changeProjectDOM.openProjectForm();
    projects=changeProjectDOM.getProjectArr();
    
};

const newProject=document.querySelector(".new-project");
newProject.addEventListener('click',addNewProject);

