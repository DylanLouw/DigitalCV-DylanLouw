function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded",() => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.add("reveal"));
    const observer = new IntersectionObserver(
        (entries) =>{
            entries.forEach(entry => {
             if(entry.isIntersecting){
                 entry.target.classList.add("visible");
             }
            })
        }, {threshold: 0.15}
    );
    sections.forEach(section => observer.observe(section));
});

