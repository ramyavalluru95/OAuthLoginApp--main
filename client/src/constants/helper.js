export const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

export const getUpperCase = (value) => {
  return value.toUpperCase().replace(/[^A-Z]/g, ""); // only A–Z
};
