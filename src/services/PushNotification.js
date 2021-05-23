import PushNotification from "react-native-push-notification";
import { Platform } from 'react-native';

import { navigate } from '../RootNavigation';
// var PushNotification = require("react-native-push-notification");

const handleNotification = (notification) => {
    if (notification.foreground && !notification.userInteraction) {
        // App is in open state
        alert('You got notification')
    } else {
        let message;
        if (notification.foreground && notification.userInteraction) {
            message= notification.message || '';
        } else if (!notification.foreground && notification.userInteraction) {
            message= notification.data["gcm.n.analytics_data"]["google.c.a.c_l"] || '';
        }
        
        const screenInfoArray = message.split(': ');
        const screenInfo = screenInfoArray.length > 1 ? screenInfoArray[0] : '';
        let screenName = null;
        let propNumber = null;
        if (screenInfo) {
            ([screenName, propNumber] = screenInfo.split(' #'));

        }
        if (screenName && propNumber) {
            console.log(`Navigating to ${screenName} with props ${propNumber}`)
            switch (screenName) {
                case 'Lesson':
                    navigate(screenName, { lessonId: propNumber });
                    break;
                case 'Post':
                    navigate(screenName, { postId: propNumber });
                    break;
                default:
                    navigate(screenName, { propNumber });
                    break;
            }

        }
        else {
            navigate('Home');
        }
    }

}

export const setUpPushNotification = () => {
    console.log('os: ', Platform.OS);


    // Must be outside of any component LifeCycle (such as `componentDidMount`).
    PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {
            console.log("TOKEN:", token);
            // navigate('Posts')
        },

        // (required) Called when a remote is received or opened, or local notification is opened
        onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
            handleNotification(notification);
            // process the notification

            // (required) Called when a remote is received or opened, or local notification is opened
            // notification.finish(PushNotificationIOS.FetchResult.NoData);
        },

        // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
        onAction: function (notification) {
            console.log("ACTION:", notification.action);
            console.log("NOTIFICATION:", notification);

            // process the action
        },

        // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
        onRegistrationError: function (err) {
            console.error(err.message, err);
        },

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
         * (optional) default: true
         * - Specified if permissions (ios) and token (android and ios) will requested or not,
         * - if not, you must call PushNotificationsHandler.requestPermissions() later
         * - if you are not using remote notification or do not have Firebase installed, use this:
         *     requestPermissions: Platform.OS === 'ios'
         */
        requestPermissions: true,
    });
}
