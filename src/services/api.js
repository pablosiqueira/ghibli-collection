import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ghibliapi-1-v8647363.deta.app/'
})

const apiBlank = axios.create({

})

export default {
    all() {
        return api.get('/films')
    },
    people() {
        return api.get('/people')
    },
    filmDetails(codes){
        return api.get(`/films/${codes}`)
    },
    fullurl(codes){
        return apiBlank.get(`${codes}`)
    }
}