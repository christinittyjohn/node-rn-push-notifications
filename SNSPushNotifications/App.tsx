/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Notification,
  NotificationCompletion,
  Notifications,
  Registered,
} from 'react-native-notifications';

const WakeUp = () => {
  const handleGetDeviceToken = () => {
    Notifications.registerRemoteNotifications();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wake up</Text>
      <View style={styles.card}>
        <Button title="Get Device Token" onPress={handleGetDeviceToken} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: 'grey',
  },
  card: {
    flex: 1,
  },
});

Notifications.events().registerRemoteNotificationsRegistered(
  (event: Registered) => {
    console.log(event.deviceToken, 'device token');
  },
);

Notifications.events().registerNotificationReceivedForeground(
  (
    notification: Notification,
    completion: (response: NotificationCompletion) => void,
  ) => {
    console.log(
      'Notification recieved \n',
      JSON.stringify(notification.payload),
    );

    // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
    completion({alert: true, sound: true});
  },
);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    borderWidth: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WakeUp />
    </SafeAreaView>
  );
};

export default App;
