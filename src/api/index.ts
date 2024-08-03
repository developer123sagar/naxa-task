import axios from 'axios';

const BASE_URL = 'https://admin.naxa.com.np/api'

export const fetchProjects = async () => {
    const res = await axios.get(`${BASE_URL}/projects`);
    return res.data;
};

export const fetchCategory = async () => {
    const res = await axios.get(`${BASE_URL}/category`)
    return res.data;
}