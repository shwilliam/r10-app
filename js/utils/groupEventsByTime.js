import {formatTimestamp} from './index'

const groupEventsByTime = (headers, session) => {
  const formattedTime = formatTimestamp(session.startTime)
  const sectionIndex = headers.findIndex(
    ({title}) => title === formattedTime,
  )

  if (sectionIndex === -1)
    return [
      ...headers,
      {
        title: formattedTime,
        data: [session],
      },
    ]

  headers[sectionIndex].data.push(session)

  return headers
}

export default groupEventsByTime
