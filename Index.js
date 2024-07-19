function rotate() {
    let navbar = document.querySelector(".navbar")
    let section = document.querySelector(".section")
    if (navbar.classList.contains("rotation")) {
        navbar.classList.remove("rotation")
        section.classList.add("sectionDown")
    navbar.classList.add("reverse_rotation")
    section.classList.remove("sectionUp")
    } else {
        navbar.classList.add("rotation")
        section.classList.remove("sectionDown")
        section.classList.add("sectionUp")
   navbar.classList.remove("reverse_rotation")
    }
    
}
