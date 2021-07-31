const RepositoryUser = require("../../domain/user/repositoryUser");
const User = require("../database/models/UserSchema");

class RepositoryUserDb extends RepositoryUser{
    constructor(){
      super()
    }
    async getUserById(_id) {
    let userResult = await User.findById(_id);
    return userResult
  }
};

module.exports = RepositoryUserDb;