import axios from 'axios';

const API_URL = 'https://admin.naxa.com.np/api/projects';

export const fetchProjects = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};
