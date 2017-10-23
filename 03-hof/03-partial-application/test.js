const { logger, log } = require('./tu-modulo');

const info = logger('INFO:')
const warn = logger('WARN:')

console.log(info('asfdasdf', 'sfasdfsdf', 'asdfasf'))
//function callAPI (response, error) {
  //if (error) {
    //const w = warn('algo paso mal con el api', 'nuestros monos deberian trabajar para solucionar esto')
    //console.log(w)
  //}

  //const val = info('respuesta recibida')
  //console.log(val)
//}


//callAPI('fasjhkfsd', null)
