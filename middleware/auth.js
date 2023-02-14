const auth = async (req, res, next) => {
  console.log("calling authenticate user");
  next();
};

export default auth;
