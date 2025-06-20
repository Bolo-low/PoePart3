document.addEventListener("DOMContentLoaded", () => {
    const nextBtns = document.querySelectorAll(".btn-next");
    const prevBtns = document.querySelectorAll(".btn-prev");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    let formStepNum = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            formStepNum++;
            updateFormSteps();
            updateProgressbar();
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            formStepNum--;
            updateFormSteps();
            updateProgressbar();
        });
    });

    function updateFormSteps() {
        formSteps.forEach(step => {
            step.classList.remove("form-step-active");
        });
        formSteps[formStepNum].classList.add("form-step-active");
    }

    function updateProgressbar() {
        progressSteps.forEach((step, index) => {
            step.classList.toggle("progress-step-active", index <= formStepNum);
        });
    }

    // Optional: Submit handler
    const form = document.getElementById("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        let summary = "";
        for (let [key, value] of formData.entries()) {
            summary += `${key}: ${value}\n`;
        }
        alert(summary);
    });
});
