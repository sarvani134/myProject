const checkboxes = document.querySelectorAll('input[type="checkbox"][name="courses"]');
const courseMsg = document.getElementById("courseMsg");
const MAX = 5;

checkboxes.forEach(cb => {
    cb.addEventListener("change", () => {
        const selectedCount = [...checkboxes].filter(c => c.checked).length;

        if (selectedCount > MAX) {
            cb.checked = false;
            courseMsg.textContent = "You can select only 5 courses";
        } else {
            courseMsg.textContent = "";
        }
    });
});
