import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

const clearLocalNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )
}

const createNotification = () => ({
  title: 'Study reminder',
  body: "Don't forget to study today 🤓",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
})

const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)

            console.log(`Notification scheduled to ${tomorrow.toUTCString()}`)
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}

export { clearLocalNotifications, setLocalNotification }
