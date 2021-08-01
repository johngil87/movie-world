const RepositoryUser = require("../../domain/user/repositoryUser");
const repositoryMovieDb = require("./repositoryMovieDb");
const User = require("../database/models/UserSchema");
const Movie = require("../database/models/MovieSchema")



class RepositoryUserDb extends RepositoryUser{
    constructor(){
      super()
    }
    async getUserById(_id) {
    let userResult = await User.findById(_id);
    return userResult
    }

    async getFavoritesByUser(_id) {
      let user = await User.findById(_id);
      let favorites = user.idFavorites;
      return favorites
    }

};

module.exports = RepositoryUserDb;