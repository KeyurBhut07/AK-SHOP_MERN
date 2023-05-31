const bcrypt = require("bcrypt");

const hasPassword = async (password) => {
  try {
    const saltRound = 10;
    const hasedPassword = await bcrypt.hash(password, saltRound);
    return hasedPassword;
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = (password, hasedPassword) => {
  return bcrypt.compare(password, hasedPassword);
};

module.exports = { hasPassword, comparePassword };
