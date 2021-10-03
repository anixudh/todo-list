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

        const doneTask=document.createElement("div");
        doneTask.classList.add("done-task");
        doneTask.textContent="✔";

        const taskName=document.createElement("div");
        taskName.textContent=`${task.name}`;
        
        const taskDate=document.createElement("div");
        taskDate.textContent=`Due Date: ${task.date}`;

        const changeButtons=document.createElement("div");
        changeButtons.classList.add("change-buttons");
        const renameTask=document.createElement("div");
        renameTask.classList.add("rename-task");
        renameTask.textContent="✎";
        const changeDate=document.createElement("div");
        changeDate.classList.add("change-date");
        changeDate.textContent="📅";
        

        const completeTask=e=>{
            taskElement.textContent="";
            taskElement.style.display="none";
            const index=projectObj.tasks.indexOf(task);
            if(index>-1) projectObj.tasks.splice(index,1);
        }

        const renameTaskClick=e=>{
            const newName=document.createElement("input");
            newName.type="text";
            const submitNewName=document.createElement("button");
            submitNewName.type="button";
            taskName.style.display="none";
            submitNewName.textContent="rename";
            taskElement.appendChild(newName);
            taskElement.appendChild(submitNewName);
            const changeTaskName=e=>{
                taskName.textContent=`${newName.value}`;
                taskElement.removeChild(newName);
                taskElement.removeChild(submitNewName);
                taskName.style.display="initial";
                task.name=newName.value;
            }
            submitNewName.addEventListener('click',changeTaskName);
            
        }

        const changeTaskDate=e=>{
            const newDate=document.createElement("input");
            newDate.type="date";
            const submitNewDate=document.createElement("button");
            submitNewDate.type="button";
            taskDate.style.display="none";
            submitNewDate.textContent="change date";
            taskElement.appendChild(newDate);
            taskElement.appendChild(submitNewDate);
            const submitTaskDate=e=>{
                taskDate.textContent=`Due Date: ${newDate.value}`;
                taskElement.removeChild(newDate);
                taskElement.removeChild(submitNewDate);
                taskDate.style.display="initial";
                task.date=newDate.value;
            }
            submitNewDate.addEventListener('click',submitTaskDate);
            
        }

        doneTask.addEventListener('click',completeTask);
        renameTask.addEventListener('click',renameTaskClick);
        changeDate.addEventListener('click',changeTaskDate);

        changeButtons.appendChild(renameTask);
        changeButtons.appendChild(changeDate);

        taskElement.appendChild(doneTask);
        taskElement.appendChild(taskName);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(changeButtons);
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