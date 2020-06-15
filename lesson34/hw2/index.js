const baseUrl = 'https://5ece5f5561c8480016701459.mockapi.io/api/v1/users';




const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('.form-input');
emailElem.value;
const passwordElem = document.querySelector('#password');
passwordElem.value;

const nameElem = document.querySelector('#text');
nameElem.value;

const btnElem = document.querySelector(".submit-button");
const errorElem = document.querySelector(".error-text");

const forChangeInput = () => {
    const isValidForm = formElem.reportValidity();
    if (isValidForm) {
        btnElem.removeAttribute("disabled");
        errorElem.textContent = '';
    } else {
        btnElem.setAttribute('disabled', true);
        errorElem.textContent = '';
    }
};

nameElem.addEventListener('input', forChangeInput);
emailElem.addEventListener('input', forChangeInput);
passwordElem.addEventListener('input', forChangeInput);
formElem.addEventListener('submit', forSubmit);


function forSubmit(event) {
    event.preventDefault();
    const formData = [...new FormData(inputField)];
    const inputField = document.querySelector(formElem);
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
                formElem.reset();
            }
            return result;
        })
        .catch(() => {
                const errorElem = document.querySelector(".error-text");
                errorElem.textContent = "Failed to create user";
            }

        );
}