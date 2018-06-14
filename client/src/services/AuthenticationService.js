import Api from '@/services/Api'

export default {
	register (credentials) {
		return Api().post('register', credentials)
	}
}

// AuthenticationService.register({
// 	email: 'sieffour@163.com',
// 	password: '123456'
// })