import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_HOST } from '../../config/api';

export const httpRequest = async (urlAsKey, expireInMinutes = 60) => {
    try {
        let data = null;

        // Fetch cached data from async storage
        let value = await AsyncStorage.getItem(urlAsKey);
        value = JSON.parse(value);
        data = value ? value.apiRes : null;

        // there is data in cache && cache is expired
        if (data !== null && value !== null &&value['expireAt'] && new Date(value.expireAt) < (new Date())) {

            // clear cache
            await AsyncStorage.removeItem(urlAsKey);


            //update res to be null
            data = null;
        } else {
            console.log('read data from cache');
        }

        //update cache + set expire at date
        if (data === null) {
            console.log('NO DATA IN CACHE....TAKING NEW DATA', `${API_HOST}${urlAsKey}`);
            //fetch data
            let apiRes = await fetch(`${API_HOST}${urlAsKey}`).then((response) => response.json());
            console.log('FRESH DATA FROM API : ', typeof apiRes);

            //set expire at
            const expireAt = getExpireDate(expireInMinutes);

            //stringify object
            const objectToStore = JSON.stringify({ apiRes, expireAt });
            // console.log('STORING IN CACHE : ', objectToStore)
            //store object
            await AsyncStorage.setItem(urlAsKey, objectToStore)

            data = apiRes

        }
        return data;
    } catch (e) {
        // error reading value
        console.log('', e);
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