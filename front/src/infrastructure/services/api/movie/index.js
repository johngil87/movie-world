import axios from 'axios';

export default {
    getAll: async () => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovies/');
        return response.data;
    },
    getTop: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.slice(0,2);
    },
    getByTitle: async (title) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovietitle/'+ title);
        return response.data;
    },
    getByCategory: async (category) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovietitle/'+ category);
        return response.data;
    },
    getFavorites: async (userId) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovies/');
        return response.data.slice(0,3);
    },
    deleteFavorite: async (userId, movieId) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data[0];
    },
    getMovie: async (movieId) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovie/'+ movieId);
        return response.data;
    },
    getVoted: async (userId) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovies/');
        return response.data.slice(4,5);
    },
}