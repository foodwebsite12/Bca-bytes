const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListner("click", () => {
        faq.classList.toggle("active");
        });
});