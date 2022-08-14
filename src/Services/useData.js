import * as request from './requester'


export const getData = (direction) => {
    return request.get(`http://localhost:3030/jsonstore/${direction}`)
}

export const createPost = (data) => {
    return request.post(`http://localhost:3030/data/services`,data)
}