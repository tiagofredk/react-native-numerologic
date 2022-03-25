import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import MainContextProvider from './src/components/context/MainContextProvider';
import Home from './src/components/home/Home';

export default function App() {
  
  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

