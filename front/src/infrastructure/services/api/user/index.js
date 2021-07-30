import axios from 'axios';

export default {
    getUser: async (userToBack) => {
        const response = await axios.post('https://movieworld-back-spring.herokuapp.com/api/usercreate',{
            userEmail: userToBack.userEmail,
            userName: userToBack.userName,
            userImage: userToBack.userImage 
        });
        console.log(response.data)
        return response.data;
    }
}