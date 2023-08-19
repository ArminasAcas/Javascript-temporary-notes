function setupNoteList() {
    let addNewNoteButton = document.querySelector(".note-list__button--green");
    if (!addNewNoteButton) return;
    addNewNoteButton.addEventListener("click", () => addNewNote());
}

function displayNoteList(category) {

    let noteListSection = document.querySelector(".note-list__notes");
    if (!noteListSection) return;
    noteListSection.innerHTML = "";
    

    let filteredNotes = filterNotes(category);
    if (!filterNotes) return;
    filteredNotes.forEach(note => createNote(note,noteListSection));

    let notes = document.querySelectorAll(".note-list__note");
    if (!notes) return;
    notes.forEach(note => {
        addNoteDataDisplay(note);
        addNoteDelete(note,noteListSection);
    })
}

function filterNotes(category) {
    let filteredNotes = notes.filter( note => {
        return note.category === category;
    })

    return filteredNotes;
}

function createNote(note,noteListSection) {
    if(!note || !noteListSection) return;
    
    let div = document.createElement("div");
    div.classList.add("note-list__note");
    div.setAttribute("data-noteID",note.id);

    let span = document.createElement("span");
    span.innerHTML = note.name;

    let button = document.createElement("button");
    button.innerHTML="-";
    button.classList.add("note-list__button");
    button.classList.add("note-list__button--red");

    let divider = document.createElement("div");
    divider.setAttribute("data-noteID",note.id);
    divider.classList.add("divider");

    div.append(span,button);
    noteListSection.append(div,divider);
}

function addNoteDataDisplay(note) {
    note.addEventListener("click", () => {
        let id = note.getAttribute("data-noteID")
        let noteNameInput = document.querySelector(".note__header");
        let noteTextArea = document.querySelector(".note__text");

        if(!id || !noteNameInput || !noteTextArea) return;
        
        index = getNoteIndexById(id);
        if (!notes[index]) return

        noteNameInput.value = notes[index].name;
        noteTextArea.value = notes[index].text;
        noteNameInput.setAttribute("data-noteID", id);
        noteTextArea.setAttribute("data-noteID", id);
    })
}

function getNoteIndexById(id) {
    let indexNum = 0;
        notes.forEach((nt,index) => {
            if (parseInt(id) === nt.id)
            {
                indexNum = index; 
            }
        })
    return indexNum;
}

function addNoteDelete(note,noteListSection) {
    if (!note.children[1] || !note) return;
    let deleteButton = note.children[1];

    console.log("TT");
    deleteButton.addEventListener("click", () => {
        let id = note.getAttribute("data-noteID");
        if (!id) return;

        index = getNoteIndexById(id);
        notes.splice(index, 1);
        note.remove();

        let divider = document.querySelector(`[data-noteID= "${id}"]`);
        if(!divider) return;
        divider.remove();
    })
}

function addNewNote(){

    let selectedCategory = prompt("Input category name (Default - General)");
    if(!selectedCategory) selectedCategory = categories.general;
    if(!Object.values(categories).includes(selectedCategory)) 
    {
        alert("Please input an existing category");
        return;
    }

    let note = {
        category: selectedCategory,
        name: "New note",
        text: "",
        id: getLargestId() + 1
    }

    notes.push(note);
    displayNoteList(selectedCategory);
}

function getLargestId() {
    let largestId = notes[0].id;

    notes.forEach(note => {
        if (largestId < note.id) largestId = note.id;
    })

    return largestId;
}