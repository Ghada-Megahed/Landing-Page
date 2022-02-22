

// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const docFragment = document.createDocumentFragment();



// build the nav


for(const section of sections) {
    let linkName = section.getAttribute("data-nav");
    // Create links for the nav menu
    let anchor = document.createElement("a");
    // Set a class for links
    anchor.setAttribute("class", "menu__link");
    // Name the links with sections' names
    let text = document.createTextNode(linkName)
    // Create list item to put the anchor in it
    let listItem = document.createElement("li");
    // Create the value of anchor's href
    anchor.href = "#" + section.id ;
    // Append each text to it's anchor
    anchor.appendChild(text);
    // Append each anchor to the list item
    listItem.appendChild(anchor);
    // Append each nav item to the previously created Document Fragment 
    docFragment.appendChild(listItem);
}





// Add class 'active' to section when near top of viewport

function activeState () {
    sections.forEach(activeSection => {
        const rect = activeSection.getBoundingClientRect()
        if ( rect.top >= -350 && rect.top <= 200 ) {
            activeSection.classList.add ("your-active-class");
            const links = document.querySelectorAll ("a");
            const nav = activeSection.getAttribute("data-nav");
            // Add class 'active' for links in the nav bar when the section is active
            for (const link of links){
                if(link.innerText === nav){
                    link.classList.add ("active__link");
                } else {
                    link.classList.remove ("active__link");
            }
        }
                    
        } else {
            activeSection.classList.remove ("your-active-class");
        }
    })
}
    







// Scroll to anchor ID using scrollTO event

function smoothScroll(evt) {
    // Use preventDefault() to prevent the default event
    evt.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

    
    

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navList.appendChild(docFragment);


// Scroll to section on link click

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", smoothScroll)
});


// Set sections as active

window.addEventListener ("scroll", activeState);
