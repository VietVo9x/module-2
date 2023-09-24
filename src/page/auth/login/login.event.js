"use strict";

import { displayError } from "../utils/displayError.js";
import { checkError } from "../utils/form.checkError.js";
import { LoginService } from "./login.service.js";

//truy van element
const loginForm = document.querySelector("#form-login");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //B1: validate form
  const user = getUser();
  console.log(user);
  const errors = checkError(user, false);
  displayError(errors);
  if (errors.isError) {
    return;
  }

  //b2: kiểm tra trên localstorage
  const loginService = new LoginService();
  const response = loginService.login(user);
  if (response.status === "success") {
    alert(response.message);
  } else {
    alert(response.message);
  }
});
function getUser() {
  return {
    email: emailElement.value.trim(),
    password: passwordElement.value.trim(),
  };
}
