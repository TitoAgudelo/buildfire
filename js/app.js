
function loadTasks(taskList){
    let container = document.getElementById('taskContainer');
    container.innerHTML='';

    taskList.forEach((task,i)=>{
        let divTask = document.createElement('div');
        divTask.className="task-card";
        divTask.innerHTML = `
            ${task.img?"<img class='task-card-image' src='" + task.img + "' />":""}
            <h4 class='task-card-status'> <input type="checkbox" ${task.completed?"checked":""} title="check completed">  ${task.title + ' ' + i}</h4>
            <span class='task-card-created'>created on ${task.createdOn} by ${task.createdBy}</span>
            <p class='task-card-description'>${task.description}</p>
            <span class='task-card-due'>Due on ${task.dueDate}</span>
        `;

        if(task.completed)
            divTask.classList.add("task-completed");
        else if(task.dueDate < Date.now() )
            divTask.classList.add("task-late");


        container.appendChild(divTask);
    });
}


loadTasks(taskList);


function addTask(task){
    taskList.unshift(task);
    loadTasks(taskList);
}