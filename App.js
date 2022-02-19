import React,{Component} from "react";

import PushNotification from "react-native-push-notification";
import { Text, View, StatusBar, Image, StyleSheet,SafeAreaView } from 'react-native';

import { firebase } from "@react-native-firebase/messaging";


class Screen extends Component {

  componentDidMount(){

    firebase.initializeApp(this);
    PushNotification.configure({
      
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },

      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

        notification.finish(PushNotification.FetchResult.NoData);
      },

      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);

      },

      onRegistrationError: function(err) {
        console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
 
      requestPermissions: true,
    });
  }
  render(){
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#6495ED"
        barStyle={'default'}
      />
      
    <View >
      <Text style={{ marginTop: 20, marginBottom: 20, fontSize: 20, fontWeight: "bold" }}>Hello world </Text>

      <Image source={require('E:/recnat/pushnotification/Indian2.png')}
        style={{ width: 100, height: 100, alignItems: 'center', borderRadius: 10, marginBottom: 20 }}
      />

    </View>
    </SafeAreaView>
  )
  }
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginVertical: 16,
    marginBottom: 20,

  },
});