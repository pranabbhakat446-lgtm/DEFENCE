
// Mobile navigation menu

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// Force information

function showInfo(force) {

    const messages = {
        "Indian Army":
        "The Indian Army protects the country on land and supports national security.",

        "Indian Navy":
        "The Indian Navy protects maritime interests and maintains security at sea.",

        "Indian Air Force":
        "The Indian Air Force safeguards Indian airspace and provides aerial defence."
    };

    alert(messages[force]);
}

// Contact form demo

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("formMessage").innerText =
        "Thank you! Your demo message has been submitted.";

    this.reset();
});

// Animated statistics

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 50));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }

                counter.innerText = current;

            }, 30);

            observer.unobserve(counter);
        }
    });

}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});
