import { create } from 'apisauce';

const apiClient = create({
    baseURL: ''
});

apiClient.get('/listings').then(response => {
    if (!response.ok) {
        response.problem
    }
});