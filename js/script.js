let navbar = document.querySelector(".menu2");
document.querySelector('#burger').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}
var swiper = new Swiper(".testimonial-slide", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
    },
});

// تهيئة EmailJS
(function() {
  emailjs.init("xbJpFNypk-IGljg69"); // ضع هنا مفتاحك العام الصحيح كاملاً
})();

// التعامل مع إرسال النموذج
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_a5pm6ti", "template_c0x9m4k", this)
      .then(function () {
        alert("✅ Bericht is succesvol verzonden!");
        form.reset(); // مسح الحقول

        // إعادة تحميل الصفحة بعد 2 ثانية
        setTimeout(() => {
          location.reload();
        }, 2000);
      }, function (error) {
        alert("❌ Er is een fout opgetreden tijdens het verzenden.");
        console.error("EmailJS Error:", error);
      });
  });
});


