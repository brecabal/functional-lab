module.exports = (items) => items.map((i) => parseInt(i)).sort()

const parseItems = (items) => {
  return items.map((i) => {
    return parseInt(i)
  }).sort()
}

