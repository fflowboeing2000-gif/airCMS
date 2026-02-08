export function isValid(login: string, password: string): boolean {
  if (login.value.trim() != '' && password.value.trim() != '') {
    return true
  } else {
    return false
  }
}
