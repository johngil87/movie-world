import axios from 'axios';
import user from '../user';

export default {
    getAll: async () => {
        const response = await axios.get('https://node-mw.herokuapp.com/getmovies/');
        return response.data; 
    },
    getTop: async () => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/listtopmovies');
        return response.data; 
    },
    getByTitle: async (title) => {
        const response = await axios.get('https://node-mw.herokuapp.com/getmovietitle/'+ title);
        return response.data; 
    },
    getByCategory: async (category) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/getmoviesbycategory/'+ category);
        return response.data; 
    },
    getFavorites: async (userId) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/listfavorites/'+ userId);
        return response.data; 
    },
    deleteFavorite: async (userId, movieId) => {
        const response = await axios.put('https://movieworld-back-spring.herokuapp.com/api/removefavorite/'+userId+'/'+movieId);
        return response.data; 
    },
    addFavorite: async (userId, movieId) => { 
        const response = await axios.put('https://movieworld-back-spring.herokuapp.com/api/addfavorite/'+userId+'/'+movieId); 
        return response.data; 
    },
    getMovie: async (movieId) => {
        const response = await axios.get('https://node-mw.herokuapp.com/getmovie/'+ movieId);
        return response.data; 
    },
    getVoted: async (userId) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/getvotes/' + userId);
        return response.data;
    },
    vote: async (userId, movieId, score) => {
        console.log(userId, movieId, score)
        const response = await axios.put('https://movieworld-back-spring.herokuapp.com/api/voteMovie',{
            idUser: userId,
            idMovie: movieId,
            puntaje: score
        });
        return response.data;
    },
}