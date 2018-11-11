function telephoneCheck(phoneNumber) {
  const validate = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return validate.test(phoneNumber);
}
