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
        projectName.required = true;
        const projectSubmit=document.createElement('button');
        projectSubmit.type="submit";
        projectSubmit.textContent="add project";

        projectForm.appendChild(projectNameLabel);
        projectForm.appendChild(projectName);
        projectForm.appendChild(projectSubmit);

        sidebar.append(projectForm);
        newProject.classList.add("toggle-display-off");

        const submitProject=e=>{
           e.preventDefault();
            let project=Project(projectName.value);
            projectForm.classList.add("toggle-display-off");
            newProject.classList.remove("toggle-display-off");
            addProject(project);
        }
        projectSubmit.addEventListener('click',submitProject);
        

    };
    const openProjectPage=e=>{
        if(!e.target.className) return;
        let projectKey;
        //console.log(e.target.textContent.substr(0,e.target.textContent.length-2));
        changeTaskDOM.resetProject();
        const allProjects=document.querySelectorAll(".project");
        allProjects.forEach((project)=>{
            if(project.classList.contains("project-click")) project.classList.remove("project-click");
        });
        projects.forEach((project)=>{
            
            if(project.name==e.target.textContent.substr(0,e.target.textContent.length-2)){
                
                projectKey=project;
            }
        })
        e.target.classList.add("project-click");
        
        changeTaskDOM.openProject(projectKey);  
        //console.log(projects, e.target.textContent);
    };
    const addProject=(project)=>{
        const projectElement=document.createElement("div");

        const projectName=document.createElement("div");
        projectName.textContent=`${project.name}`;

        const delProject=document.createElement("div");
        delProject.textContent="🗑";
        delProject.classList.add("delete-project");

        projectElement.appendChild(projectName);
        projectElement.appendChild(delProject);
        projectElement.classList.add("project");
        
        projectsDOM.appendChild(projectElement);
        projects.push(project);

        const deleteProject=e=>{
            projectElement.textContent="";
            projectElement.style.display="none";
            const index=projects.indexOf(project);
            if(index>-1) projects.splice(index,1);
            //localStorage.setItem('projects',JSON.stringify(projects));
        };
        delProject.addEventListener('click',deleteProject);
        projectElement.addEventListener('click',openProjectPage,false);
        //localStorage.setItem('projects',JSON.stringify(projects));
        //console.log(projects);
    };

    const getProjectArr=()=>{
        return projects;
    }

    return {
        openProjectForm,
        getProjectArr,
        addProject
    };
})();

export {changeProjectDOM};