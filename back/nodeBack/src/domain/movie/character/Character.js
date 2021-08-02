module.exports = function makeCharacter ({
  name,
} = {}) {
  if (!name) {
    throw new Error('El actor debe tener nombre.')
  }

  return Object.freeze({
    name,
  })


}