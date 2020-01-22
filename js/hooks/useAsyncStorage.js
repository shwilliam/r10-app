import AsyncStorage from '@react-native-community/async-storage'

const useAsyncStorage = key => {
  const get = async () => {
    try {
      const retval = await AsyncStorage.getItem(key)
      return JSON.parse(retval)
    } catch (e) {
      // error reading favorites
    }
  }

  const set = async value => {
    try {
      const retval = await AsyncStorage.setItem(
        key,
        JSON.stringify(value),
      )
      return retval
    } catch (e) {
      // error adding favorite
    }
  }

  return [get, set]
}

export default useAsyncStorage
