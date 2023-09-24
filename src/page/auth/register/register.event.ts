const registerForm = document.querySelector("#form-register");
registerForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  //b1: lấy giá trị
  //
});
//validate form
const user = {
  name: "a",
  password: "",
  email: "",
  repeatPassword: "",
};
let errorObj = checkError(getUser(user));
console.log(errorObj);
function displayError(errorObj: any) {
  for (let key in errorObj) {
    console.log(key, errorObj[key]);
    const element: any = document.getElementById(key);
    const elementError = element?.parentNode;
    console.log(elementError);
    const small = elementError?.getElementsByTagName("small")[0];
    if (small) {
      small.innerHTML = errorObj[key].message;
    }
  }
}

displayError(errorObj);
function getUser(user: {
  name: string;
  password: string;
  email: string;
  repeatPassword: string;
}) {
  return {
    name: user.name,
    password: user.password,
    email: user.email,
    repeatPassword: user.repeatPassword,
  };
}
//check error
function checkError(user: {
  name: string;
  password: string;
  email: string;
  repeatPassword: string;
}) {
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  type errorType = {
    typeError: string;
    message: string;
  };

  type errors = {
    isError: boolean;
    email?: errorType;
  };
  const errors: errors = {
    isError: false,
  };
  //check mail
  if (!user.email) {
    errors.isError = true;
    errors.email = {
      typeError: "required",
      message: "Please enter",
    };
  } else if (!validRegex.test(user.email)) {
    errors.isError = true;
    errors.email = {
      typeError: "required",
      message: "Email is not in the correct format",
    };
  }

  //check name

  //return all errors
  return errors;
}
