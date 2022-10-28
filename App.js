import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Logs } from 'expo';

Logs.enableExpoCliLogging();

import Home from './screens/Home'
import Details from './screens/Details'

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',

  }
}

const { google } = require('googleapis');
const client = new google.auth.JWT(
  process.env.API_EMAIL,
  null,
  process.env.API_PRIVATE,
  ['https://www.googleapis.com/auth/spreadsheets']
);
client.authorize(function (err, tokens) {
  if (err) {
    console.log('ERROR!');
    console.log(err);
    return;
  }
  else {
    console.log('connected!')
  }   
});

const App = () => {
  const [loaded] = useFonts({
    LatoBlack: require("./assets/fonts/Lato-Black.ttf"),
    LatoHeavy: require("./assets/fonts/Lato-Heavy.ttf"),
    LatoBold: require("./assets/fonts/Lato-Bold.ttf"),
    LatoSemibold: require("./assets/fonts/Lato-Semibold.ttf"),
    LatoMedium: require("./assets/fonts/Lato-Medium.ttf"),
    LatoLight: require("./assets/fonts/Lato-Light.ttf"),
    LatoRegular: require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!loaded) return null;
  console.log("hey");
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="Details" component={ Details }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;