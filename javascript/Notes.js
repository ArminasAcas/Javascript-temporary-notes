function displayNoteList(category) {

    let noteListSection = document.querySelector(".note-list__notes");
    if (!noteListSection) return;

    let filteredNotes = filterNotes(category);
    if (!filterNotes) return;
    filteredNotes.forEach(note => createNote(note,noteListSection));

    let notes = document.querySelectorAll(".note-list__note");
    if (!notes) return;
    notes.forEach(note => addNoteDataDisplay(note));
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

        console.log("veik");
        noteNameInput.value = notes[id].name;
        noteTextArea.value = notes[id].text;
        noteNameInput.setAttribute("data-noteID", id);
        noteTextArea.setAttribute("data-noteID", id);
    })
}