export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

export const MIN_PASSWORD_LENGTH = 8;

export const isValidPassword = (password: string): boolean =>
  password.length >= MIN_PASSWORD_LENGTH;