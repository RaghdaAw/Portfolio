let navbar = document.querySelector(".menu2");

document.querySelector("#burger").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// EmailJS-configuratie
(function () {
  emailjs.init("xbJpFNypk-IGljg69"); 
})();

// Formulierverwerking
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_a5pm6ti", "template_c0x9m4k", this).then(
      function () {
        alert("✅ Bericht is succesvol verzonden!");
        form.reset(); // Velden wissen

        // In plaats van reload, toon succesmelding of navigeer
        const successMessage = document.createElement("p");
        successMessage.textContent = "Je bericht is verzonden!";
        successMessage.style.color = "green";
        form.appendChild(successMessage);
      },
      function (error) {
        alert("❌ Er is een fout opgetreden tijdens het verzenden.");
        console.error("EmailJS Error:", error);
      }
    );
  });
});
