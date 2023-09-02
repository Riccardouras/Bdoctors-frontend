import { reactive } from "vue";

let serverPort = '8000';
let baseURL = 'http://localhost:' + serverPort + '/';
let baseApiURL = 'http://localhost:' + serverPort + '/api/';

export const backendPaths = reactive({

    loginURL: baseURL + 'login',
    registerURL: baseURL + 'register',

    allSpecialtiesURL: baseApiURL + 'allSpecialties',
    sponsoredURL: baseApiURL + 'sponsoredDoctors',
    searchPerSpecialtyURL: baseApiURL + 'searchPerSpecialty',
    searchWithFilterURL: baseApiURL + 'searchWithFilter',
    doctorDetailsURL: baseApiURL + 'doctorDetails',
    getDoctorReviewsURL: baseApiURL + 'getDoctorReviews',
    storeMessageURL: baseApiURL + 'storeMessage',
    storeReviewURL: baseApiURL + 'storeReview',
    storeVoteURL: baseApiURL + 'storeVote'
});