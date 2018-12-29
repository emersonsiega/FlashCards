const formatDate = timestamp => {
  const dateTime = new Date(timestamp)

  return dateTime.toLocaleTimeString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export { formatDate }
