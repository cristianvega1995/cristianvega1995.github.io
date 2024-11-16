const toggleButton = document.getElementById("toggle");
const body = document.body;

// Check for saved user preference, if any, and apply it
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Save the user's preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
