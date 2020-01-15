import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Svg, Path} from 'react-native-svg'
import {useFavorites} from '../hooks'

const HeartIcon = ({filled = false, ...props}) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {filled ? (
      <Path
        fill-rule="evenodd"
        d="M10 3.314C14.438-1.248 25.534 6.735 10 17-5.534 6.736 5.562-1.248 10 3.314z"
        clip-rule="evenodd"
      />
    ) : (
      <Path
        fill-rule="evenodd"
        d="M10 4.748l-.717-.737C7.6 2.281 4.514 2.878 3.4 5.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385-1.114-2.175-4.2-2.773-5.883-1.043L10 4.748zM10 17C-5.333 6.868 5.279-1.04 9.824 3.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C14.72-1.042 25.333 6.867 10 17z"
        clip-rule="evenodd"
      />
    )}
  </Svg>
)

const FavoriteButton = ({id, fill = '#c04534', ...props}) => {
  const [favorites, addFavorite, removeFavorite] = useFavorites()

  return (
    <TouchableOpacity
      onPress={() =>
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      }
    >
      <HeartIcon
        filled={favorites.includes(id)}
        fill={fill}
        {...props}
      />
    </TouchableOpacity>
  )
}

export default FavoriteButton
