const changeTaskDOM=(()=>{
    let projectObj;
    //let tasks=[];
    const taskSpace=document.querySelector(".container-fluid");
    
    const Task=(name, date)=>{
        return {name, date};
    }
    
    const resetProject=()=>{
        taskSpace.textContent="";
    }
    const newTask=(task)=>{
        const taskElement=document.createElement("div");
        const taskName=document.createElement("div");
        taskName.textContent=`${task.name}`;
        //taskElement.textContent=`${task.name}---------Due Date:${task.date}`;
        const taskDate=document.createElement("div");
        taskDate.textContent=`Due Date: ${task.date}`;

        taskElement.appendChild(taskName);
        taskElement.appendChild(taskDate);
        taskElement.classList.add("task");
        
        taskSpace.appendChild(taskElement);
        //tasks.push(task);
        
    }

    const addNewTask=e=>{
        const addTask=document.querySelector(".new-task");
        const taskForm=document.createElement("form");
        taskForm.classList.add("task-form");

        const taskNameLabel=document.createElement('label');
        taskNameLabel.textContent="Name:"
        const taskName=document.createElement('input');
        taskName.type="text";
        const taskDateLabel=document.createElement('label');
        taskDateLabel.textContent="Due Date:"
        const taskDate=document.createElement('input');
        taskDate.type="date";
        const taskSubmit=document.createElement('button');
        taskSubmit.type="button";
        taskSubmit.textContent="add task";

        taskForm.appendChild(taskNameLabel);
        taskForm.appendChild(taskName);
        taskForm.appendChild(taskDateLabel);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(taskSubmit);

        taskSpace.append(taskForm);
        addTask.classList.add("toggle-display-off");

        const submitTask=e=>{
            let task=Task(taskName.value,taskDate.value);
            taskForm.classList.add("toggle-display-off");
            addTask.classList.remove("toggle-display-off");
            newTask(task);
            projectObj.tasks.push(task);
        };

        taskSubmit.addEventListener('click',submitTask);
        
    };

    const openProject=(project)=>{
        projectObj=project;
        const taskHeading=document.createElement("div");
        taskHeading.textContent=project.name;
        taskHeading.classList.add("task-heading");
        taskSpace.appendChild(taskHeading);

       if(project.tasks.length!=0){
            console.log(project.tasks);
            project.tasks.forEach((task)=>{
                newTask(task);
            })
        } 

        const addTask=document.createElement("div");
        addTask.textContent="➕ Add a new task...";
        addTask.addEventListener('click',addNewTask);
        addTask.classList.add("new-task");
        taskSpace.appendChild(addTask);
        //console.log(project.name);
    };

    return {
        resetProject,
        openProject,
    }
})();

export {changeTaskDOM};