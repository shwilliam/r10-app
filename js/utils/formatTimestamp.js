import {twoDigit} from './index'

const formatTimestamp = t => {
  const date = new Date(t)
  const hours = date.getHours()
  const suffix = hours > 11 && hours !== 0 ? 'PM' : 'AM'
  const formattedHours =
    suffix === 'PM' && hours !== 12 ? hours - 12 : hours
  const mins = date.getMinutes()

  return `${twoDigit(formattedHours)}:${twoDigit(mins)} ${suffix}`
}

export default formatTimestamp
