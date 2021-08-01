import axios from 'axios';

export default {
    getUser: async (userToBack) => {
        const response = await axios.post('https://movieworld-back-spring.herokuapp.com/api/usercreate',{
            userEmail: userToBack.userEmail,
            userName: userToBack.userName,
            userImage: userToBack.userImage 
        });
        return response.data;
    },
    updateUser: async (userId, userName, userImage) => {
        const response = await axios.patch('https://movieworld-back-spring.herokuapp.com/api/updateuser',{
            id: userId,
            userName: userName,
            userImage: userImage 
        });
        return response.data;
    }
}