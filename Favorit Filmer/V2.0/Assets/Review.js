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

document.addEventListener('DOMContentLoaded', function () {
    const UrlSearchParams = new URLSearchParams(window.location.search);
    const Name = decodeURIComponent(UrlSearchParams.get('Name'))
    
    document.getElementById('About').textContent = "What is " + Name + " about?";
    document.getElementById('Release').textContent = "When was " + Name + " released?";
    document.getElementById('Trailer').textContent = Name + " Trailer";

    document.getElementById('WebTitle').textContent = decodeURIComponent(UrlSearchParams.get('Title'));
    document.getElementById('Title').textContent = decodeURIComponent(UrlSearchParams.get('Title'));
    document.getElementById('Hero').src = decodeURIComponent(UrlSearchParams.get('Hero'));
    document.getElementById('Video').src = decodeURIComponent(UrlSearchParams.get('Video'));
    document.getElementById('About Text').textContent = decodeURIComponent(UrlSearchParams.get('About'));
    document.getElementById('Release Text').textContent = decodeURIComponent(UrlSearchParams.get('Release'));
});