// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

function scrollLeft(containerId) {
    const container = document.getElementById(containerId); // Get the scroll container
    if (container) {
        container.scrollBy({
            left: -300, // Scroll left by 300px
            behavior: "smooth", // Smooth scrolling
        });
    } else {
        console.error("Scroll container not found with ID:", containerId);
    }
}

function scrollRight(containerId) {
    const container = document.getElementById(containerId); // Get the scroll container
    if (container) {
        container.scrollBy({
            left: 300, // Scroll right by 300px
            behavior: "smooth", // Smooth scrolling
        });
    } else {
        console.error("Scroll container not found with ID:", containerId);
    }
}

