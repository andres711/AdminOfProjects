module.exports= {
    name:{
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
    user_id:{
        exists: {
            errorMessage: "User creator id is required",
            options: {
              checkFalsy: true,
            },
          },
    }
}