// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Search Filter on Problems Page
const searchBox = document.getElementById("searchBox");
if (searchBox) {
    searchBox.addEventListener("keyup", () => {
        let filter = searchBox.value.toLowerCase();
        let items = document.querySelectorAll("#problemList li");
        items.forEach(item => {
            let text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });
}
