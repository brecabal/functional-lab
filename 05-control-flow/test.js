const request = require('request')

function lala() {
  return new Promise((resolve, reject) => {
    request('https://www.google.com', (err, res) => {
      if (err) {
        return reject(err)
      }

      resolve(res)
    })
  })
}

execLoading(true)
lala()
.then((response) => {
  console.log(response)
  execLoading(false)
  return response
})
.then((resp) => {

})
.then((resp) => {

})
.then((resp) => {

})

.catch(err => {
  console.log(err)
})
