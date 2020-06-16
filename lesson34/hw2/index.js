const baseUrl = 'https://5ece5f5561c8480016701459.mockapi.io/api/v1/users';




const elementForm = document.querySelector(".login-form");
const emailInput = document.querySelector("[type=email]");
emailInput.value;
const passwordInput = document.querySelector("[type=password]");
passwordInput.value;

const nameInput = document.querySelector("[type=text]");
nameInput.value;

const submitBtnElem = document.querySelector(".submit-button");
const errorElem = document.querySelector(".error-text");

const onInputChange = () => {
    const isValidForm = elementForm.reportValidity();
    if (isValidForm) {
        submitBtnElem.removeAttribute("disabled");
        errorElem.textContent = "";
    } else {
        submitBtnElem.setAttribute("disabled", true);
        errorElem.textContent = "";
    }
};

emailInput.addEventListener("input", onInputChange);
passwordInput.addEventListener("input", onInputChange);
nameInput.addEventListener("input", onInputChange);

elementForm.addEventListener("submit", runAfterSending);

function runAfterSending(event) {
    event.preventDefault();
    const inputField = document.querySelector(".login-form");
    const formData = [...new FormData(inputField)];
    const objectForm = Object.fromEntries(formData);
    fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(objectForm),
        })
        .then((response) => response.json())
        .then((data) => {
            const result = JSON.stringify(data);
            alert(result);
            if (result.length !== undefined) {
                elementForm.reset();
            }
            return result;
        })
        .catch(() => {
            const errorElem = document.querySelector(".error-text");
            errorElem.textContent = "Failed to create user";
        });
}