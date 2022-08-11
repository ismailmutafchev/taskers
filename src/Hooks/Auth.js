import * as reqest from './requester'

const authUrl = 'http://localhost:3030/users/'

export const login = (email,password) => {
    return reqest.post(`${authUrl}/login`,{email,password})
}