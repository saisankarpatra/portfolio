

const roles = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "Backend Developer",
    "MCA Graduate"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

const typingElement =
document.getElementById("typing-text");

function typeEffect() {

    currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();




const toggleBtn =
document.querySelector(
".theme-toggle"
);

toggleBtn.addEventListener(
"click",
() => {

    document.body.classList.toggle(
        "dark-mode"
    );

    const icon =
    toggleBtn.querySelector("i");

    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );
    }
}
);



const revealElements =
document.querySelectorAll(
"section, .card, .skill-card, .project-card, .timeline-item"
);

function revealOnScroll() {

    revealElements.forEach(
        element => {

            const windowHeight =
            window.innerHeight;

            const revealTop =
            element.getBoundingClientRect()
            .top;

            const revealPoint = 120;

            if (
                revealTop <
                windowHeight - revealPoint
            ) {

                element.classList.add(
                    "active"
                );

            }
        }
    );
}

revealElements.forEach(
    element => {
        element.classList.add(
            "reveal"
        );
    }
);

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(
        section => {

            const sectionTop =
            section.offsetTop - 150;

            const sectionHeight =
            section.clientHeight;

            if (
                pageYOffset >=
                sectionTop
            ) {

                current =
                section.getAttribute(
                    "id"
                );
            }
        }
    );

    navLinks.forEach(
        link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }
        }
    );
});



window.addEventListener(
"scroll",
() => {

    const navbar =
    document.querySelector(
        ".navbar"
    );

    if (
        window.scrollY > 50
    ) {

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.15)";

    } else {

        navbar.style.boxShadow =
        "none";
    }
});
