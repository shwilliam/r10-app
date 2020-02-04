import {formatTimestamp} from './index'

const groupEventsByTime = (headers, session) => {
  const headersCopy = [...headers]
  const formattedTime = formatTimestamp(session.startTime)
  const sectionIndex = headersCopy.findIndex(
    ({title}) => title === formattedTime,
  )

  if (sectionIndex === -1)
    return [
      ...headersCopy,
      {
        title: formattedTime,
        data: [session],
      },
    ]

  headersCopy[sectionIndex].data.push(session)
  return headersCopy
}

export default groupEventsByTime
