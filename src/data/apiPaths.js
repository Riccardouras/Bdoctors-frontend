import { reactive } from "vue";

let serverPort = '8000'
let baseURL = 'http://localhost:' + serverPort + '/api/';

export const apiPaths = reactive({
    allSpecialtiesURL: baseURL + 'allSpecialties',
    sponsoredURL: baseURL + 'sponsoredDoctors',
    searchPerSpecialtyURL: baseURL + 'searchPerSpecialty',
    searchWithFilterURL: baseURL + 'searchWithFilter',
    doctorDetailsURL: baseURL + 'doctorDetails',
    getDoctorReviewsURL: baseURL + 'getDoctorReviews',
    messageURL: baseURL + 'storeMessage',
    reviewURL: baseURL + 'storeReview',
});