function PasswordIsVAlid(c) {
  let ragex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{9,}$/;
  if (ragex.test(c) == false) {
    throw new Error("Your password is invalid");
  } else {
    return true;
  }
}

function PasswordIsOk(c) {
  let rag = /[A-Z]/;
  if ((c.length > 8 && c == null) || (c.length == 0 && c.match(rag) == false)) {
    return true;
  }
  if (
    (c.length > 8 && c == null) ||
    (c.length == 0 && c.match(rag1) == false)
  ) {
    return true;
  }

  if ((c.length > 8 && c == null) || (c.length == 0 && c.match(num) == false)) {
    return true;
  } else {
    return false;
  }
}
