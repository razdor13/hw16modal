const formEl = document.querySelector("#form");
const buttonSubmit = document.querySelector("#submit");
const modalbg = document.querySelector(".bg-modal");
const modal = document.querySelector(".modal");
//validation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function validation(form) {
    const titleEntered = !form.elements.input.value.trim();
    const textEntered = !form.elements.textarea.value.trim();
    if (textEntered || titleEntered) {
        form.elements.textarea.style.outline = "solid 3px red";
        form.elements.input.style.outline = "solid 3px red";
        return false;
    } else {
        form.elements.textarea.style.outline = "none";
        form.elements.input.style.outline = "none";
        return {
            title: form.elements.input.value,
            text: form.elements.textarea.value,
        };
    }
}
//Include content!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function includeContentInModal(content) {
    const textEl = document.querySelector(".text");
    const titleEl = document.querySelector(".title");

    textEl.innerText = content.text;
    titleEl.innerText = content.title;
}
//TogleModal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function modalTogle() {
    if (modalbg.style.display === "flex") {
        modalbg.style.display = "none";
    } else {
        modalbg.style.display = "flex";
    }
}
//Listner!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
buttonSubmit.addEventListener("click", (e) => {
    const content = validation(formEl);
    e.preventDefault();
    if (content) {
        includeContentInModal(content);
        modalTogle();
    }
});
modalbg.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        modalTogle();
        return;
    }
    if (e.target.classList.contains("bg-modal")) {
        modalTogle();
        return;
    }
});
