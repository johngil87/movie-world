import axios from 'axios';

export default {
    getUser: async (UserToBack) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return response.data[0];
    }
}