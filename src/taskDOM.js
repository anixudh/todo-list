const changeTaskDOM=(()=>{
    const taskSpace=document.querySelector(".container-fluid");

    const resetProject=()=>{
        taskSpace.textContent="";
    }

    const openProject=(project)=>{
        taskSpace.textContent=project.name;
        console.log(project.name);
    };

    return {
        resetProject,
        openProject,
    }
})();

export {changeTaskDOM};