// Toggle mobile menu
document.getElementById("menu-btn").addEventListener("click", function () {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a, #mobile-menu a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar height
                behavior: "smooth"
            });
        }

        // Close mobile menu after clicking a link (for mobile users)
        document.getElementById("mobile-menu").classList.add("hidden");
    });
});
