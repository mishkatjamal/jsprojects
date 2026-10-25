let taskData ={}

const todo = document.querySelector("#todo")
const progress = document.querySelector("#progress")
const done = document.querySelector("#done")
let dragElement = null
const tasks = document.querySelectorAll(".task")
const coloumnsCount = [todo,progress,done]

// add task function
function createTaskCard(title, desc, column) {
    let div = document.createElement("div")
    div.classList.add("task")
    div.setAttribute("draggable", "true")

    div.innerHTML = `<h3>${title}</h3>
                     <p>${desc}</p>
                     <button class="dlt-btn">Delete</button>`

    // Column ke andar append karna
    column.appendChild(div)

    // Drag event attach karna
    div.addEventListener("drag", () => {
        dragElement = div
    })

    // Delete button functionality
    div.querySelector(".dlt-btn").addEventListener("click", () => {
        div.remove()
        updateCountFnc()
    })

    return div
}


if(localStorage.getItem("task")){
    const data = JSON.parse(localStorage.getItem("task"))

    for (const col in data) {
        // console.log(col,data[col]);
        const column =document.querySelector(`#${col}`)
        data[col].forEach((task)=>{
            createTaskCard(task.title,task.desc,column)
        })

        updateCountFnc()
        
       
        
        
    }
}

tasks.forEach((task)=>{
    task.addEventListener("drag",(e)=>{
        // console.log(e);
        dragElement= task
        
    })
    
})

// ^ update count fnc
function updateCountFnc(){
       coloumnsCount.forEach((col)=>{
        let tasks = col.querySelectorAll(".task")
        let count = col.querySelector(".heading .right")

        taskData[col.id] = Array.from(tasks).map((t)=>{
return {
    title:t.querySelector("h3").innerText,
    desc:t.querySelector("p").innerText
    
}
})
        localStorage.setItem("task",JSON.stringify(taskData))

        count.innerText = tasks.length
        

    })
}


function addDragEventsOnColumn(column){

    column.addEventListener("dragenter",(e)=>{
        e.preventDefault()
    column.classList.add("hover-over")
})

column.addEventListener("dragleave",(e)=>{
        e.preventDefault()
    column.classList.remove("hover-over")
})


column.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

column.addEventListener("drop",(e)=>{
    e.preventDefault()
    column.appendChild(dragElement)
    column.classList.remove("hover-over")

    updateCountFnc()
   
})

}

addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)

// ^form

let formBtn = document.querySelector(".header-btn");
let bg = document.querySelector(".bg")
let addTaskBtn = document.querySelector(".add-new-task")


formBtn.addEventListener("click",()=>{
    bg.classList.toggle("active")
})

bg.addEventListener("click",(e)=>{
    if(e.target === bg){
        bg.classList.remove("active")
    }
})

addTaskBtn.addEventListener("click",()=>{

    let textTitle = document.querySelector(".input").value
    let textareades = document.querySelector(".textarea").value

    createTaskCard(textTitle,textareades,todo)
    updateCountFnc()
            bg.classList.remove("active")

            document.querySelector(".input").value = ""
            document.querySelector(".textarea").value=""


})
