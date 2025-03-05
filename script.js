document.addEventListener("DOMContentLoaded", function () {
    // Preloader Effect
    let preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }, 2000);

    // Background color-changing effect
    setInterval(() => {
        document.body.style.background = getRandomGradient();
    }, 3000);

    // Typewriter effect for header text
    let headerText = "Welcome to Colorful World!";
    let index = 0;
    let headerElement = document.querySelector("header h1");

    function typeEffect() {
        if (index < headerText.length) {
            headerElement.textContent += headerText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    headerElement.textContent = ""; // Clear initial text
    typeEffect();

    // Make services bounce on hover
    let serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.animation = "bounce 0.5s ease-in-out infinite alternate";
            box.style.background = getRandomGradient();
        });

        box.addEventListener("mouseleave", () => {
            box.style.animation = "none";
            box.style.background = "linear-gradient(45deg, #ffcc00, #ff8800)";
        });
    });

    // Call-to-action button rotation effect
    let ctaButton = document.querySelector(".cta-button");

    ctaButton.addEventListener("mouseenter", () => {
        ctaButton.style.transform = "rotate(360deg) scale(1.3)";
        ctaButton.style.background = getRandomGradient();
    });

    ctaButton.addEventListener("mouseleave", () => {
        ctaButton.style.transform = "rotate(0deg) scale(1)";
        ctaButton.style.background = "#ffcc00";
    });

    // Confetti explosion when CTA button is clicked
    ctaButton.addEventListener("click", () => {
        for (let i = 0; i < 50; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            document.body.appendChild(confetti);

            let size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.background = getRandomColor();
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            confetti.style.animation = "fallingConfetti 2s linear forwards";

            setTimeout(() => {
                confetti.remove();
            }, 2000);
        }
    });

    // Generate a random gradient color
    function getRandomGradient() {
        let colors = [
            ["#ff5733", "#ffbd33"],
            ["#33ff57", "#33ffbd"],
            ["#5733ff", "#bd33ff"],
            ["#ff33a1", "#ff5733"]
        ];
        let randomIndex = Math.floor(Math.random() * colors.length);
        return `linear-gradient(45deg, ${colors[randomIndex][0]}, ${colors[randomIndex][1]})`;
    }

    // Generate a random solid color
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
