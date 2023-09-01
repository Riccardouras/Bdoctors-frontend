import { reactive } from "vue";

export const store = reactive({
    specialtyID: '0',
    minAvgVote: '0',
    minNumOfReviews: '0',
    doctors: [],
    sponsoredDoctors: [],
    specialties: []
});