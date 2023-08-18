function setUpNoteUpdate () {
    let noteNameInput = document.querySelector(".note__header");
    let noteTextArea = document.querySelector(".note__text");
    if (!noteNameInput || !noteTextArea) return;

    noteNameInput.addEventListener("input", () => {
        let id = noteNameInput.getAttribute("data-noteID");
        if (!id) return;
        index = getNoteIndexById(id);
        if (!notes[index]) return;

        notes[index].name = noteNameInput.value;

        let noteInList = document.querySelector(`[data-noteID= "${id}"]`);
        if (!noteInList) return;
        noteInList.firstElementChild.innerHTML = noteNameInput.value;
    })

    noteTextArea.addEventListener("input", () => {
        let id = noteTextArea.getAttribute("data-noteID");
        if (!id) return;
        index = getNoteIndexById(id);
        if (!notes[index]) return;

        notes[index].text = noteTextArea.value;
    })
}