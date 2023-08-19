document.addEventListener("DOMContentLoaded", () => {
    setupCategories();
    setupNoteList();
    displayNoteList(categories.general);
    setUpNoteUpdate();
})