import api from "./api"

export const userLogin = async () => {
    try {
        const result = await api.post('/user/login', { email: 'Joaopedro@gmail.com', password: '123456' })
        const { token } = result.data
        return token
      } catch (error) {
        return ''
      }
}