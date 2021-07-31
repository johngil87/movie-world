import axios from 'axios';

export default {
    getAll: async () => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovies/');
        return response.data; //ok
    },
    getTop: async () => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/listtopmovies');
        return response.data; //ok
    },
    getByTitle: async (title) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovietitle/'+ title);
        return response.data; //ok
    },
    getByCategory: async (category) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/getmoviesbycategory/'+ category);
        return response.data; //ok
    },
    getFavorites: async (userId) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovies/');
        return response.data.slice(0,3);
    },
    deleteFavorite: async (userId, movieId) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/removefavorite/'+userId+'/'+movieId);
        return response.data; //no se
    },
    addFavorite: async (userId, movieId) => { 
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/addfavorite/'+userId+'/'+movieId); 
        return response.data; //no se
    },
    getMovie: async (movieId) => {
        const response = await axios.get('https://new-node-back-movie.herokuapp.com/getmovie/'+ movieId);
        return response.data; //ok
    },
    getVoted: async (userId) => {
        const response = await axios.get('https://movieworld-back-spring.herokuapp.com/api/getvotes/' + userId);
        return response.data; //no funciona
    },
    vote: async (userId, movieId, score) => {
        const response = await axios.post('https://movieworld-back-spring.herokuapp.com/api/voteMovie',{
            idUser: userId,
            idMovie: movieId,
            puntaje: score
        });
        return response.data; //no se (policy)
    },
}