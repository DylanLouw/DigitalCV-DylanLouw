// Toggles the hamburger menu to open and close as the icon is clicked.
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Toggles light/dark theme, updates button icons, and saves preference.
function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    const desktopBtn = document.getElementById("theme-toggle");
    const mobileBtn = document.getElementById("theme-toggle-mobile");
    const icon = isLight ? "◑" : "◐";

    if (desktopBtn) desktopBtn.textContent = icon;
    if (mobileBtn) mobileBtn.textContent = icon;

    localStorage.setItem("theme", isLight ? "light" : "dark");
}

//Wait for the page to load completely before grabbing any of the elements.
document.addEventListener("DOMContentLoaded",() => {
    // Restore saved theme preference on load.
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        const desktopBtn = document.getElementById("theme-toggle");
        const mobileBtn = document.getElementById("theme-toggle-mobile");
        if (desktopBtn) desktopBtn.textContent = "◑";
        if (mobileBtn) mobileBtn.textContent = "◑";
    }
    //Fade in on scroll.
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.add("reveal"));
    const observer = new IntersectionObserver(
        (entries) =>{
            entries.forEach(entry => {
             if(entry.isIntersecting){
                 entry.target.classList.add("visible");
             }
            })
        }, {threshold: 0.15} //Only trigger once 15% of section is visible.
    );


sections.forEach(section => observer.observe(section));
//Typing effect for the Software dev text under my name.
const typedText = "Software Developer";
const typingElement = document.querySelector(".section__text__p2");
typingElement.textContent="";
let i=0;
const typingInterval = setInterval(()=>
    {
    if(i < typedText.length)
        {
            typingElement.textContent += typedText[i];
            i++;
        } 
        else 
            {
                clearInterval(typingInterval)//Stop once done, otherwise it keeps adding undefined to the beack.
            }
    }  
    ,100
);
});