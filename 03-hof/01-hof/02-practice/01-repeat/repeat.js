function repeat(operation, num) {
  // TÚ SOLUCIÓN AQUÍ
  for (let i = 0; i < num; i++) {
    operation()
  }
}

function repeat2(fn, num) {
  if (num === 0) {
    return
  }

  fn()

  return repeat2(fn, num - 1)
}

// No borres la línea de abajo
module.exports = repeat2;





















