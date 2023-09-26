"use strict";

import { getDataLocalStorage, setDataLocalStorage } from "../../../utils/method.js";

export class RegisterRepository {
  registerUser(data) {
    const accounts = getDataLocalStorage("accounts");

    if (accounts) {
      for (const user of accounts) {
        if (user.email === data.email) {
          return {
            status: "fail",
            data: null,
            message: "Tài khoản đã tồn tại",
          };
        }
      }
      accounts.push(data)
      setDataLocalStorage('accounts', accounts)
      return {
        status: "success",
        data: null,
        message: "Đăng ký thành công",
      };
    }
    return {
      status: "fail",
      data: null,
      message: "Lỗi 500 --> database",
    };

    // Kiểm tra thông tin và trả về kết quả
  }
}
