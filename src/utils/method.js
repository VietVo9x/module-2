export function getDataLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setDataLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
