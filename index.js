/* ==================================
   TYPING ANIMATION
================================== */

const roles = [
    "Linux Administrator",
    "Full Stack Developer",
    "Python Programmer",
    "Web Developer",
    "System Administrator"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

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
        isDeleting ? 60 : 120
    );
}

document.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {
        typeEffect();
    }

});


/* ==================================
   COUNTER ANIMATION
================================== */

const counters =
    document.querySelectorAll(".counter");

const counterObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter =
                    entry.target;

                const target =
                    +counter.getAttribute("data-target");

                let count = 0;

                const increment =
                    target / 100;

                const updateCounter = () => {

                    if (count < target) {

                        count += increment;

                        counter.innerText =
                            Math.ceil(count);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            target;
                    }
                };

                updateCounter();

                counterObserver.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    });

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* ==================================
   AOS INITIALIZATION
================================== */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });

    }

});


/* ==================================
   NAVBAR SCROLL EFFECT
================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".custom-navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.98)";

        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,0.90)";

        navbar.style.boxShadow =
            "none";
    }

});


/* ==================================
   PAGE LOAD ANIMATION
================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});


/* ==================================
   ACTIVE NAV LINK
================================== */

document.addEventListener("DOMContentLoaded", () => {

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

});