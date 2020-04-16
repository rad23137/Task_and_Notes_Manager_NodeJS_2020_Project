// add Notes to the task

function addNotes(taskID){
    let newNote = document.getElementById("inputNotes" + taskID).value
    if(newNote === ""){
        alert("Please Enter Note")
        return
    }
    let ol = document.getElementById("ol" + taskID)
    if(typeof(ol) != 'undefined' && ol != null){
        let li = document.createElement("li")
        li.textContent = newNote
        ol.appendChild(li)
    }else{
        let myDiv = document.getElementById('myDiv' + taskID)
        ol = document.createElement("ol")
        ol.id = "ol" + taskID
        let li = document.createElement("li")
        li.textContent = newNote
        ol.appendChild(li)
        let firstChild = document.getElementById("inputNotes"+ taskID)
        myDiv.insertBefore(ol, myDiv.firstChild)
    }
    addNewNoteToJson(newNote, taskID)
}

async function addNewNoteToJson(note, taskId){
    const resp = await fetch('/tasks/'+taskId+'/notes',{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({note})
    })
}