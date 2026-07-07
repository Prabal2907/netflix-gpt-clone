export const CheckValidData = (email, password, name) => {
  if (name !== null) {
    if (!name || name.trim() === "") return "Please enter your name";
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
    return "Please enter a valid email address";
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    )
  )
    return "Password must be 8+ chars with uppercase, number & special character";
  return null;
};
