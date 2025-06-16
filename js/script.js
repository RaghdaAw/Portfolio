// إظهار وإخفاء قائمة التنقل (Navbar)
let navbar = document.querySelector(".menu2");

document.querySelector("#burger").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// إعداد EmailJS
(function () {
  emailjs.init({ publicKey: "xbJpFNypk-IGljg69" }); 
})();

// معالجة نموذج الاتصال
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitButton = form.querySelector("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // إزالة رسائل النجاح أو الخطأ القديمة (إن وُجدت)
    const oldMessages = form.querySelectorAll(".form-message");
    oldMessages.forEach(msg => msg.remove());

    // تعطيل الزر مؤقتًا وإظهار مؤشر التحميل
    submitButton.disabled = true;
    submitButton.textContent = "جاري الإرسال...";

    // إرسال النموذج باستخدام EmailJS
    emailjs.sendForm("service_a5pm6ti", "template_c0x9m4k", this).then(
      function () {
        // إعادة تفعيل الزر
        submitButton.disabled = false;
        submitButton.textContent = "إرسال الرسالة";

        // إعادة تعيين الحقول
        form.reset();

        // عرض رسالة نجاح
        const successMessage = document.createElement("p");
        successMessage.textContent = "✅Your message has been sent effectively!";
        successMessage.style.color = "green";
        successMessage.classList.add("form-message");
        form.appendChild(successMessage);
      },
      function (error) {
        // إعادة تفعيل الزر
        submitButton.disabled = false;
        submitButton.textContent = "sent message";

        // عرض رسالة خطأ
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "❌ حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.";
        errorMessage.style.color = "red";
        errorMessage.classList.add("form-message");
        form.appendChild(errorMessage);

        console.error("EmailJS Error:", error);
      }
    );
  });
});
