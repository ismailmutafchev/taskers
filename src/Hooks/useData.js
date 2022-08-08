import * as reqest from './requester'

export const useData = (direction) => {
    return reqest.get(`http://localhost:3030/jsonstore/${direction}`)
}
