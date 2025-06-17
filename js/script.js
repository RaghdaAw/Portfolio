// Ensure all DOM content is loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar Toggle (Burger Menu) ---
    let navbar = document.querySelector(".menu2");
    let menuBtn = document.querySelector("#burger"); // Renamed for clarity, was 'menuBtn' at the end

    if (menuBtn) { // Check if burger button exists before adding listener
        menuBtn.onclick = () => {
            navbar.classList.toggle("active");
            menuBtn.classList.toggle('fa-times'); // Toggle icon
        };
    }

    window.onscroll = () => {
        if (navbar) { // Check if navbar exists
            navbar.classList.remove("active");
        }
        if (menuBtn) { // Check if burger button exists
            menuBtn.classList.remove('fa-times'); // Remove icon toggle on scroll
        }
    };


    // --- EmailJS Setup & Contact Form Handling ---
    // Make sure EmailJS is initialized once. It's already in a self-invoking function outside DOMContentLoaded
    // but placing it here ensures all DOM elements are present if it were to interact with them directly.
    // However, the current EmailJS init function is fine as is, but keeping it inside DOMContentLoaded
    // is a common practice if it depends on specific DOM elements for initialization.
    (function () {
        emailjs.init({ publicKey: "xbJpFNypk-IGljg69" });
    })();

    const form = document.querySelector("form");
    if (form) { // Check if form exists
        const submitButton = form.querySelector("button[type='submit']"); // Target specifically submit button

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Remove old messages (if any)
            const oldMessages = form.querySelectorAll(".form-message");
            oldMessages.forEach(msg => msg.remove());

            // Disable button and show loading indicator
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "جاري الإرسال...";
            }

            // Send form using EmailJS
            emailjs.sendForm("service_a5pm6ti", "template_c0x9m4k", this).then(
                function () {
                    // Re-enable button
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = "إرسال الرسالة";
                    }

                    // Reset fields
                    form.reset();

                    // Display success message
                    const successMessage = document.createElement("p");
                    successMessage.textContent = "✅Your message has been sent effectively!";
                    successMessage.style.color = "green";
                    successMessage.classList.add("form-message");
                    form.appendChild(successMessage);
                },
                function (error) {
                    // Re-enable button
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = "إرسال الرسالة"; // Changed back to "إرسال الرسالة" for consistency
                    }

                    // Display error message
                    const errorMessage = document.createElement("p");
                    errorMessage.textContent = "❌ حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.";
                    errorMessage.style.color = "red";
                    errorMessage.classList.add("form-message");
                    form.appendChild(errorMessage);

                    console.error("EmailJS Error:", error);
                }
            );
        });
    }

  });