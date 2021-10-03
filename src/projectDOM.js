import {changeTaskDOM} from './taskDOM';

const changeProjectDOM=(()=>{

    //const projectForm=document.querySelector('project-form');
    let projects=[];
    const sidebar=document.querySelector('.sidebar');
    const newProject=document.querySelector('.new-project');
    const projectsDOM=document.querySelector(".projects");
    //const newProject=
    const Project=(name)=>{

        /*const setName=(newName)=>{
            name=newName;
        }
        const getName=()=>{return name}; */
        let tasks=[];
        return {name,tasks};
    }
    const openProjectForm=()=>{

        //console.log(document);
        const projectForm=document.createElement('form');
        projectForm.classList.add("project-form");

        const projectNameLabel=document.createElement('label');
        projectNameLabel.textContent="Name:"
        const projectName=document.createElement('input');
        projectName.type="text";
        const projectSubmit=document.createElement('button');
        projectSubmit.type="button";
        projectSubmit.textContent="add project";

        projectForm.appendChild(projectNameLabel);
        projectForm.appendChild(projectName);
        projectForm.appendChild(projectSubmit);

        sidebar.append(projectForm);
        newProject.classList.add("toggle-display-off");

        const submitProject=e=>{
           
            let project=Project(projectName.value);
            projectForm.classList.add("toggle-display-off");
            newProject.classList.remove("toggle-display-off");
            addProject(project);
        }
        projectSubmit.addEventListener('click',submitProject);
        

    };
    const openProjectPage=e=>{

        let projectKey;
        changeTaskDOM.resetProject();
        const allProjects=document.querySelectorAll(".project");
        allProjects.forEach((project)=>{
            if(project.classList.contains("project-click")) project.classList.remove("project-click");
        });
        projects.forEach((project)=>{
            
            if(project.name==e.target.textContent){
                projectKey=project;
            }
        })
        e.target.classList.add("project-click");
        changeTaskDOM.openProject(projectKey);  
        //console.log(projects, e.target.textContent);
    };
    const addProject=(project)=>{
        const projectElement=document.createElement("div");
        projectElement.textContent=`${project.name}`;
        projectElement.classList.add("project");
        
        projectsDOM.appendChild(projectElement);
        projects.push(project);

        projectElement.addEventListener('click',openProjectPage);
        //console.log(projects);
    };

    const getProjectArr=()=>{
        return projects;
    }

    return {
        openProjectForm,
        getProjectArr,
    };
})();

export {changeProjectDOM};