const buttons = document.querySelectorAll(".btn")
const con = document.querySelector(".Content")
let tempId

for (button of buttons){
    const buttonId = button.getAttribute('id')
    button.addEventListener('click', () => changeView(buttonId))
}

function changeView(id){
    if (tempId === id){
        return
    }
    else{
        con.classList.remove(tempId)
        con.classList.add(id)
        tempId = id
    }
}