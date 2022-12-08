import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Logs } from 'expo';

Logs.enableExpoCliLogging();

import Home from './screens/Home'
import Details from './screens/Details'
import Profile from './screens/Profile';
import { DataProvider } from './apiData/FetchData';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',

  }
}


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
  return (
    <DataProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={ Home }/>
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profile" component={ Profile }/>
        </Stack.Navigator>
        </NavigationContainer>
    </DataProvider>
  );
}

export default App;