import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2b50b.firebaseio.com/'
});

export default instance;