const inputForAdd = document.querySelector(".input-for-add");
const addButton = document.querySelector(".add-button");
const toDoList = document.querySelector(".to-do-list");
const warning = document.querySelector(".warning");



function saveData()
{
    localStorage.setItem("data", toDoList.innerHTML);
}
function revealData()
{
    toDoList.innerHTML = localStorage.getItem("data");
}
revealData();

// function removerAndSigner(toDoElement)
// {
//     toDoElement.addEventListener('click', (e)=>{
//         if(e.target.classList.contains("to-do-check"))
//         {
//             toDoElement.classList.toggle("signed");
//         }
//         if(e.target.classList.contains("remove-button") || e.target.classList.contains("remove-button-line"))
//         {
//             toDoElement.remove();
//         }
//     });
// }


// function removerAndSigner()
// {
//     let toDos = document.querySelectorAll(".to-do-element");
//     toDos.forEach((toDoElement, index) => {
//         toDoElement.addEventListener('click', (e) => {
//             console.log("lukaaaaaaaaaa" + index);
//             if(e.target.classList.contains("to-do-check"))
//             {
//                 toDoElement.classList.toggle("signed");
//             }
//             else if(e.target.classList.contains("remove-button") || e.target.classList.contains("remove-button-line"))
//             {
//                 toDoElement.remove();
//             }   
//         });
//     });
// }


function removerAndSigner()
{
    toDoList.addEventListener('click', (e) => {
        if(e.target.classList.contains("to-do-check"))
        {
            e.target.closest(".to-do-element").classList.toggle("signed");
            saveData();
        }
        else if(e.target.classList.contains("remove-button") || e.target.classList.contains("remove-button-line"))
        {
            e.target.closest(".to-do-element").remove();
            saveData();
        }
    });
}

removerAndSigner();

function createToDoLi(inputedTxt)
{
    const toDoChecker = document.createElement("div");
    toDoChecker.classList.add("to-do-check");
    const toDoInfo = document.createElement("h3");
    toDoInfo.classList.add("to-do-info", "small-text-size");
    const toDoTxt = document.createTextNode(inputedTxt);
    toDoInfo.appendChild(toDoTxt);
    const toDoLeftSide = document.createElement("div");
    toDoLeftSide.classList.add("element-left-side", "display-flex");
    toDoLeftSide.appendChild(toDoChecker);
    toDoLeftSide.appendChild(toDoInfo);
    
    const removeButtonLine1 = document.createElement("div");
    removeButtonLine1.classList.add("remove-button-line");
    const removeButtonLine2 = document.createElement("div");
    removeButtonLine2.classList.add("remove-button-line");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.appendChild(removeButtonLine1);
    removeButton.appendChild(removeButtonLine2);
    
    const toDoElement = document.createElement("li");
    toDoElement.classList.add("to-do-element", "display-flex", "align-items-center", "justify-content-space-bteween");
    toDoElement.appendChild(toDoLeftSide);
    toDoElement.appendChild(removeButton);
    
    toDoList.appendChild(toDoElement);
    saveData();
}

function addHandler()
{
    addButton.addEventListener('click', ()=>{
        let inputedTxt = inputForAdd.value;
        if(inputedTxt.length < 5)
        {
            warning.classList.add("active");
        }
        else
        {
            warning.classList.remove("active");
            createToDoLi(inputedTxt);
        }
    });
}

addHandler();
