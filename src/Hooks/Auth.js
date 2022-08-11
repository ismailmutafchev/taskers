import * as reqest from './requester'

const authUrl = 'http://localhost:3030/users/'

export const login = (email,password) => {
    return reqest.post(`${authUrl}/login`,{email,password})
}

export const logout = async (accessToken) => {
    try {
      const response =  await fetch(`${authUrl}/logout`, {
          headers: {
             'X-Authorization': accessToken
          }
       })
 
       return  response
    } catch (error) {
       console.log(error);
    }
    
 }