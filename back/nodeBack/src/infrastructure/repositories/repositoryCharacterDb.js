const RepositoryCharacter = require("../../domain/movie/character/repositoryCharacter");
const Character = require("../database/models/CharacterSchema");

class RepositoryCharacterDb extends RepositoryCharacter{
    constructor(){
      super()
    }
    async getCharacterById(_id) {
    let characterResult = await Character.findById(_id);
    return characterResult
  }
};

module.exports = RepositoryCharacterDb;