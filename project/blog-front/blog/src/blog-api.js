export const getPosts = () => new Promise((resolve, reject) => {
	fetch('http://localhost:8080/api/posts')
		.then(resp => resp.json())
		.then(resp =>resolve(resp))
		.catch(err => reject(err))
})
//
// TÚ CÓDIGO VA AQUÍ
//


export const getPost = (id) => new Promise((resolve, reject) => {
	fetch(`http://localhost:8080/api/posts/${id}`)
		.then(resp => {
			const statusCode = resp.status
			if(statusCode=== 404) {
				return Promise.reject({
					message: 'Post no encontrado',
					status: 'error'
				})
			}
			return resp.json()
		})
		.then(resp =>resolve(resp))
		.catch(err => reject(err))
})