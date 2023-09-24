//check error
export function checkError(user,condition) {
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errors = {
    isError: false,
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  };
  //check mail
  if (!user.email) {
    errors.isError = true;
    errors.email = "Please enter email";
  } else if (!validRegex.test(user.email)) {
    errors.isError = true;
    errors.email = "Email is not in the correct format";
  }

  //check password
  if (!user.password) {
    errors.isError = true;
    errors.password = "Please enter password";
  }
  if(condition) {
    //   check name
    if (!user.name) {
      errors.isError = true;
      errors.name = "Please enter name";
    }
    //check repeatPassword
    if (!user.repeatPassword) {
      errors.isError = true;
      errors.repeatPassword = "Please enter password";
    } else if (user.password !== user.repeatPassword) {
      errors.isError = true;
      errors.repeatPassword = "Password incorrect, please try again";
    }
  }

  //return all errors
  return errors;
}
