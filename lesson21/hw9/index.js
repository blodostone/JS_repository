  export function finishForm() {
      const formElem = document.querySelector(".login-form");
      const inElem = document.querySelector("input");
      const inCreateElem = document.createElement("input");
      inElem.setAttribute("name", "login");
      inCreateElem.setAttribute("name", "password");
      inCreateElem.setAttribute("type", "password");
      formElem.append(inCreateElem);
  }
  // finishForm();