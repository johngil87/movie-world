import axios from 'axios';

export default {
    getAll: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,3);
    },
    getTop: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,2);
    },
    getByTitle: async (title) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,4);
    },
    getByCategory: async (category) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,5);
    },
    getFavorites: async (userId) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,6);
    },
    deleteFavorite: async (userId, movieId) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data[0];
    }
}