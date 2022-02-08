const form=document.getElementById('form');
const input=document.getElementById('input');
const todos=document.getElementById('todos');

const todosLS=JSON.parse(localStorage.getItem("todos"))

if(todosLS){
    todosLS.forEach(todosls=>{
        addtodos(todosls)
    })
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
   addtodos()
})
function addtodos(todosls){
    let todoText=input.value
    if(todosls){
        todoText=todosls.text
    }
    
     
    if (todoText) {
        console.log(todosls)
        const todoEl=document.createElement("li")
        if (todosls&&todosls.completed) {
            todoEl.classList.add("completed") 
        }
        
        todoEl.innerText=todoText;

        todoEl.addEventListener("click",()=>{
            todoEl.classList.toggle("completed")
            AddLs()
        })
        todoEl.addEventListener("contextmenu",(e)=>{
            e.preventDefault()
            todoEl.remove();
            AddLs()
            
        })   
        todos.appendChild(todoEl)  
        input.value=""
        AddLs()   
    }
   }
function AddLs(){
    const todosEl=document.querySelectorAll("li")
    console.log(todosEl)
const note=[]
    todosEl.forEach((todosEl)=>{
        note.push({
            text: todosEl.innerText,
            completed: todosEl.classList.contains("completed"),
        })
    })

    localStorage.setItem("todos",JSON.stringify(note))
}