module.exports = function makeUser ({
  userName,
  userEmail,
  userImage,
  idFavorites,
  rate,
} = {}) {
  if (!userName) {
    throw new Error('El usuario debe tener nombre.')
  }
  if (!userEmail) {
    throw new Error('El usuario debe registrar un correo electronico.')
  }

  return Object.freeze({
    userName,
    userEmail,
    userImage,
    idFavorites,
    rate,
  })


}