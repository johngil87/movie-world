module.exports = function makeCategory ({
  name,
} = {}) {
  if (!name) {
    throw new Error('La categoria debe tener nombre.')
  }

  return Object.freeze({
    name,
  })


}