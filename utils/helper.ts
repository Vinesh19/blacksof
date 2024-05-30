export const isEmail = (value: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim() !== "";
};

export const hasMinLength = (value: string, minLength: number = 6): boolean => {
  return value.length >= minLength;
};

export const isPasswordValid = (value: string): boolean => {
  // Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(value);
};
