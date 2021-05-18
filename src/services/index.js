import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_HOST } from '../../config/api';

export const httpRequest = async (urlAsKey, expireInMinutes = 60) => {
    try {
        let data = null;
        
        // Fetch cached data from async storage
        const value = await AsyncStorage.getItem(urlAsKey);
        data = JSON.parse(value);

        // there is data in cache && cache is expired
        if (data !== null && data['expireAt'] &&
            new Date(data.expireAt) < (new Date())) {

            // clear cache
            await AsyncStorage.removeItem(urlAsKey);


            //update res to be null
            data = null;
        } else {
            console.log('read data from cache');
        }

        //update cache + set expire at date
        if (data === null) {
            console.log('NO DATA IN CACHE....TAKING NEW DATA');
            //fetch data
            let apiRes = await fetch(`${API_HOST}${urlAsKey}`) //.then((response) => response.json());
            apiRes = apiRes.json();

            //set expire at
            apiRes.expireAt = getExpireDate(expireInMinutes);

            //stringify object
            const objectToStore = JSON.stringify(apiRes);

            //store object
            await AsyncStorage.setItem(urlAsKey, objectToStore)

            data = JSON.parse(apiRes)

        }
        console.log('FINAL DATA SENT ===================================: ', typeof data, data);
        return data;
    } catch (e) {
        // error reading value
        throw new Error('No Internet !')
    }

}

const getExpireDate = (expireInMinutes) => {
    const now = new Date();
    let expireTime = new Date(now);
    expireTime.setMinutes(now.getMinutes() + expireInMinutes);
    return expireTime;
}

// return fetch(`${API_HOST}${endpoint}`).then(response =>
//     response.json(),
// );