import React, {useState, useEffect} from 'react'
import {FavoritesContext} from '../context'
import {useAsyncStorage} from '../hooks'

const FavoritesProvider = ({children}) => {
  const [getLocalFavorites, setLocalFavorites] = useAsyncStorage(
    'favorites',
  )
  const [favorites, setFavorites] = useState([])

  const updateFavorites = async () =>
    setFavorites((await getLocalFavorites()) || [])

  const addFavorite = async id => {
    if (!favorites.includes(id))
      await setLocalFavorites([...favorites, id])
    updateFavorites()
  }

  const removeFavorite = async id => {
    const i = favorites.indexOf(id)

    if (i !== -1) {
      const updatedFavorites = [...favorites]
      updatedFavorites.splice(i, 1)
      await setLocalFavorites(updatedFavorites)
    }
    updateFavorites()
  }

  useEffect(() => {
    // update favorites state on mount
    updateFavorites()
  }, [])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export {FavoritesContext}
export default FavoritesProvider
