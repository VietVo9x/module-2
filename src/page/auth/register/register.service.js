"use strict";

import { RegisterRepository } from "./register.repository.js";

export class RegisterService {
  register(data) {
    // Đùng đẩy trách nhiệm --> repository --> backend thì repo xử lý --> mong muốn
    const registerRepository = new RegisterRepository();

    const response = registerRepository.registerUser(data.email, data.password);
    //   const response = {
    //     status: "",
    //     data: "",
    //     message: "",
    //   };

    return response;
  }
}
