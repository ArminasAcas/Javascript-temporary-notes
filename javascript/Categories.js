function setupCategories() {
    let categoryButtons = document.querySelectorAll(".note-categories__button");
    if (!categoryButtons) return;


    categoryButtons.forEach(button => {
        button.setAttribute("data-category", button.innerHTML);
        button.addEventListener("click", () => {
            displayNoteList(button.getAttribute("data-category"));
        })
    })
}