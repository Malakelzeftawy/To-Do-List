

// html Elements 
var input = document.querySelector("input");
var listContainer = document.querySelector("ul");
var addBtn = document.querySelector("button");
var doneBtn = document.querySelector(".done")

// app variable 
var taskList = JSON.parse(localStorage.getItem("tasks")) ||[];
displayAll();
// functions 

function add(){
    var task={
        name: input.value
    }
    if(input.value == ""){
        window.alert("you must type your task");
    }
    else {
        taskList.push(task);
        localStorage.setItem("tasks",JSON.stringify(taskList));
        display(taskList.length -1);
        clearInput();   
    }
}
addBtn.addEventListener("click",add);


function clearInput(){
    input.value = ""
}

function display(index){
    var taskHTML = `
    <li>${taskList[index].name}<span><button onclick="deleteTask(${index});">Delete</button></span></li>
    `
    listContainer.innerHTML += taskHTML;
}
function displayAll(){
    for(var i=0; i<taskList.length; i++){
        display(i);
    }
}

function deleteTask(index){
    taskList.splice(index , 1);
    localStorage.setItem("tasks",JSON.stringify(taskList));
    listContainer.innerHTML ="";
    displayAll();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
})

function done(){
    taskList = [];
    localStorage.removeItem("tasks");
    listContainer.innerHTML =""
}
doneBtn.addEventListener("click" , done);





