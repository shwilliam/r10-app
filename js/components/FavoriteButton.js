import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useFavorites} from '../hooks'

const FavoriteButton = ({id, color = '#c04534', ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites()

  return (
    <TouchableOpacity
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }
    >
      <Icon
        name={
          favorites.includes(id) ? 'ios-heart' : 'ios-heart-empty'
        }
        color={color}
        {...props}
      />
    </TouchableOpacity>
  )
}

export default FavoriteButton
