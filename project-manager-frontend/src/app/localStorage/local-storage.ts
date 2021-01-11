export function setLocalStorageElement(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function getLocalStorageElement(key: string) {
  return localStorage.getItem(key);
}

export function verifyIfUserIsAuthentificated(history: any) {
  console.log("email" + localStorage.getItem("email"));
  if(localStorage.getItem("email") === null || localStorage.getItem("role") === null) {
    history.push("/admin/login");
  }
}
