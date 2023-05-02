import axios from "axios";
import { User } from 'api/types';

export const loginAPI = (formData: any) => {
    return axios.post('/api/login', formData)
        .then(response => response.data.data)
        .catch(error => {
            console.error(error);
            throw new Error('Failed to parse response data.');
        });
};
