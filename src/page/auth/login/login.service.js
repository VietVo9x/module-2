"use strict";

import { LoginRepository } from "./login.repository.js";

export class LoginService {
  login(data) {
    const loginRepository = new LoginRepository();

    const response = loginRepository.loginUser(data.email, data.password);

    return response;
  }
}
