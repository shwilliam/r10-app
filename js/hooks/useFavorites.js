import AsyncStorage from '@react-native-community/async-storage'
import {useEffect, useState} from 'react'

const useFavorites = () => {
  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites')
      return JSON.parse(favorites) || []
    } catch (e) {
      // error reading favorites
    }
  }

  const updateFavorites = async () => {
    const favorites = await getFavorites()
    setFavorites(favorites)
  }

  const addFavorite = async id => {
    try {
      if (!favorites.includes(id))
        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify([...favorites, id]),
        )
    } catch (e) {
      // error adding favorite
    }
    updateFavorites()
  }

  const removeFavorite = async id => {
    const i = favorites.indexOf(id)

    try {
      if (i !== -1) {
        const updatedFavorites = [...favorites]

        updatedFavorites.splice(i, 1)

        await AsyncStorage.setItem(
          'favorites',
          JSON.stringify(updatedFavorites),
        )
      }
    } catch (e) {
      // error adding favorite
    }
    updateFavorites()
  }

  useEffect(() => {
    updateFavorites()
  }, [])

  return [favorites, addFavorite, removeFavorite]
}

export default useFavorites
