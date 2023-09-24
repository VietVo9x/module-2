"use strict";

import { getDataLocalStorage } from "../../../utils/method.js";

export class LoginRepository {
  loginUser(email, password) {
    const accounts = getDataLocalStorage("accounts");

    if (accounts) {
      for (const user of accounts) {
        if (user.email === email) {
          if (user.password === password) {
            return {
              status: "success",
              data: null,
              message: "Đăng nhập thành công",
            };
          } else {
            return {
              status: "fail",
              data: null,
              message: "Incorrect password",
            };
          }
        }
      }

      return {
        status: "fail",
        data: null,
        message: "Email does not exist",
      };
    }
  }
}
