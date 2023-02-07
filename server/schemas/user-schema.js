module.exports = {
  register: {
    name: {
      exists: {
        errorMessage: "Name is required",
        options: {
          checkFalsy: true,
        },
      },
      isString: {
        errorMessage: "Name should be a string",
      },
    },
    email: {
      isEmail: {
        errorMessage: "Please provide a valid email",
      },
    },
    password: {
      exists: {
        errorMessage: "Password is required",
      },
      isString: {
        errorMessage: "Password should be a string",
      },
      isStrongPassword: {
        errorMessage:
          "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      },
    },
  },
  login:{
    email:{
      isEmail: {
          errorMessage: "Please provide a valid email",
        }
  },
  password:{
      exists: {
          errorMessage: "Password is required",
        }
  }
  }
};
