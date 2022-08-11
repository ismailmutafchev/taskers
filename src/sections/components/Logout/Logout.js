import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'


import * as authService from '../../../Services/Auth'


export const Logout = () => {
    const navigate = useNavigate()
    const { user, userLogout } = useContext(AuthContext)
    
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout()
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    })
    return null
}