import AsyncStorage from '@react-native-async-storage/async-storage';
export default {
    getItem: (key) => {
        return new Promise(async (resolve) => {
            try {
                const value = await AsyncStorage.getItem(key);
                if(!value || value == "_REMOVED_NULL"){
                    resolve(null);
                }else{
                    resolve(value)
                }
            } catch (e) {
                resolve(null)
            }
        })
    },
    setItem: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, typeof value == "string" ? value : JSON.stringify(value));
        } catch (e) {}
    },
    removeItem: async (key) => {
        try {
            await AsyncStorage.setItem(key, '_REMOVED_NULL');
        } catch (e) {}
    },
}