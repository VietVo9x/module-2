export function displayError(errorObj) {
  for (let key in errorObj) {
    const element = document.getElementById(key);
    const elementError = element?.parentNode;
    const errorMessage = elementError?.getElementsByTagName("p")[0];
    if (errorMessage) {
      if (errorObj[key]) {
        errorMessage.innerHTML = errorObj[key];
      } else {
        errorMessage.innerHTML = ""; // Hoặc bạn có thể gán một thông điệp mặc định ở đây
      }
    }
  }
}
