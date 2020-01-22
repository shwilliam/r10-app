import React, {useContext} from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {FavoritesContext} from '../context'

const FavoriteButton = ({id, color = '#c04534', ...props}) => {
  const {favorites, addFavorite, removeFavorite} = useContext(
    FavoritesContext,
  )

  return (
    <TouchableOpacity
      onPress={() =>
        favorites && favorites.includes(id)
          ? removeFavorite(id)
          : addFavorite(id)
      }
    >
      <Icon
        name={
          favorites && favorites.includes(id)
            ? 'ios-heart'
            : 'ios-heart-empty'
        }
        color={color}
        {...props}
      />
    </TouchableOpacity>
  )
}

export default FavoriteButton
