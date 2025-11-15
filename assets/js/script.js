const openNav = document.querySelector(".open-nav");
const navigation = document.getElementById("nav");
const closeNav = document.querySelector(".close-nav");

if (openNav && navigation && closeNav) {
    // Toggle instead of separate open/close
    const toggleNav = () => navigation.classList.toggle("active");
    
    openNav.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);
    
    // Optional: Close on outside click
    document.addEventListener("click", (e) => {
        if (!navigation.contains(e.target) && !openNav.contains(e.target)) {
            navigation.classList.remove("active");
        }
    });
    
    // Optional: Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navigation.classList.contains("active")) {
            navigation.classList.remove("active");
        }
    });
}

if (openNav) {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add 'fixed' class when scrolled down more than 100px
        if (currentScrollY > 100) {
            openNav.classList.add('fixed');
            
            // Optional: Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY) {
                openNav.classList.add('hidden');
            } else {
                openNav.classList.remove('hidden');
            }
        } else {
            openNav.classList.remove('fixed', 'hidden');
        }
        
        lastScrollY = currentScrollY;
    });
}