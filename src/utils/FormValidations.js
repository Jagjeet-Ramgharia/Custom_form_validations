export const validations = (userInfo, cb) => {
  const {
    firstname,
    lastname,
    number,
    language,
    password,
    confirmPassword,
    preferedLanguage,
    email,
  } = userInfo;

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  if (firstname === "") {
    cb({ name: "firstname", err: "First name is required" });
  } else if (firstname.length < 3) {
    cb({ err: "First name must be at least 3 characters" });
  }

  if (lastname === "") {
    cb({ name: "lastname", err: "Last name is required" });
  } else if (lastname.length < 3) {
    cb({ name: "lastname", err: "Last name must be at least 3 characters" });
  }

  if (email === "") {
    cb({ name: "email", err: "Email is required" });
  } else if (!validateEmail(email)) {
    cb({ name: "email", err: "Please enter a valid Email" });
  }

  if (number === "") {
    cb({ name: "phoneNumber", err: "Phone number is required" });
  }

  if (language === "") {
    cb({ name: "language", err: "Please select a language" });
  }

  if (password === "") {
    cb({ name: "password", err: "Password is required" });
  } else if (password.length < 8) {
    cb({ name: "password", err: "Password must be at least 8 characters" });
  } else if (password !== confirmPassword) {
    cb({ name: "password", err: "Password does not match" });
  }

  if (preferedLanguage.length === 0) {
    cb({ name: "preferedLanguage", err: "Please select a prefered language" });
  }
};
