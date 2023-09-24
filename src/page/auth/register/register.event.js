"use strict";

import { setDataLocalStorage } from "../../../utils/method.js";
import { displayError } from "../utils/displayError.js";
import { checkError } from "../utils/form.checkError.js";
import { RegisterService } from "./register.service.js";
//truy van den cac element form
const registerForm = document.querySelector("#form-register");
const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const passwordElement = document.querySelector("#password");
const repeatPasswordElement = document.querySelector("#repeatPassword");

registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  //B1: lấy dữ liệu , kiểm tra lỗi và hiển thị lỗi
  const user = getUser();

  const errors = checkError(user, true);

  displayError(errors);
  console.log(errors);
  if (errors.isError) {
    return;
  }

  //B2 : lấy dữ liệu localstorage kiểm tra và trả về kết quả
  const registerServices = new RegisterService();
  const response = registerServices.register(user);
  if (response.status === "fail") {
    alert(response.message);
  } else {
    alert(response.message);
    const accounts = [];
    accounts.push(user);
    console.log(111111);
    setDataLocalStorage("accounts", accounts);
  }
});

function getUser() {
  return {
    name: nameElement.value.trim(),
    email: emailElement.value.trim(),
    password: passwordElement.value.trim(),
    repeatPassword: repeatPasswordElement.value.trim(),
  };
}
