import * as reqest from './requester'

export const useData = () => {
    return reqest.get('http://localhost:3030/jsonstore/services')
}
