const axios = require('axios');

const URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUserData = async () => {
    try {
        const {data} = await axios(URL);
        // console.log(data);
        const processedData = data.map( ({id, name , email, phone, website}) => {
            return {id, name , email, phone, website}
        })
        // console.log(processedData);
        return processedData;
    } catch (error) {
        console.error(error);
    }
}

export default fetchUserData;