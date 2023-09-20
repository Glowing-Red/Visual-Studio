const Sidebar = document.getElementById("Sidebar");
const SidebarToggle = document.getElementById("SidebarToggle")

SidebarToggle.addEventListener("click", moveObjects);

function moveObjects() {
    if (Sidebar.style.left == "-200px") {
        Sidebar.style.left = "0px";
        SidebarToggle.textContent = "<"
    } else {
        Sidebar.style.left = "-200px";
        SidebarToggle.textContent = ">"
    }
}