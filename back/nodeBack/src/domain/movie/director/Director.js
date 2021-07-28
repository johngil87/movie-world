module.exports = function makeDirector ({
  name,
} = {}) {
  if (!name) {
    throw new Error('El director debe tener nombre.')
  }

  return Object.freeze({
    name,
  })


}