import React, {useContext} from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {FavoritesContext} from '../context'

const FavoriteButton = ({disabled = false, id}) => {
  const {favorites, addFavorite, removeFavorite} = useContext(
    FavoritesContext,
  )

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() =>
        favorites && favorites.includes(id)
          ? removeFavorite(id)
          : addFavorite(id)
      }
    >
      <Icon.Favorite filled={favorites && favorites.includes(id)} />
    </TouchableOpacity>
  )
}

export default FavoriteButton
