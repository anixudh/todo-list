import { changeTaskDOM } from "./taskDOM";

const updateInbox=(projects)=>{
    //const taskSpace=document.querySelector(".container-fluid");
    const todayBtn=document.querySelector(".today-tasks");
    const thisWeekBtn=document.querySelector(".this-week-tasks");
    
    const isToday = (date) => {
        const given=new Date(date);
        const today = new Date()
        return given.setHours(0,0,0,0) == today.setHours(0, 0, 0, 0);
    };

    const isThisWeek = (date) => {
        date=new Date(date);
        const todayObj = new Date();
        const todayDate = todayObj.getDate();
        const todayDay = todayObj.getDay();

    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
    };

    const updateTodaySpace=e=>{

        todayBtn.classList.add("project-click");
        thisWeekBtn.classList.remove("project-click");
        const allProjects=document.querySelectorAll(".project");
        allProjects.forEach((project)=>{
            if(project.classList.contains("project-click")) project.classList.remove("project-click");
        });
        changeTaskDOM.resetProject();
        projects.forEach((project)=>{
            project.tasks.forEach((task)=>{
                if(isToday(task.date)) changeTaskDOM.newTask(task);
            })
        })
    };

    const updateThisWeekSpace=e=>{

        todayBtn.classList.remove("project-click");
        thisWeekBtn.classList.add("project-click");
        const allProjects=document.querySelectorAll(".project");
        allProjects.forEach((project)=>{
            if(project.classList.contains("project-click")) project.classList.remove("project-click");
        });
        changeTaskDOM.resetProject();
        projects.forEach((project)=>{
            project.tasks.forEach((task)=>{
                if(isThisWeek(task.date)) changeTaskDOM.newTask(task);
            })
        })
    };

    todayBtn.addEventListener('click',updateTodaySpace);
    thisWeekBtn.addEventListener('click',updateThisWeekSpace);

};


export {updateInbox};