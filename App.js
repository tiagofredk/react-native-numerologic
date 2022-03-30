import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import MainContextProvider from './src/components/context/MainContextProvider';
import Home from './src/components/home/Home';
// import Result from './src/components/functions/Result';
import Report from './src/components/Report/Report';
// import Result3 from './src/components/functions/Result3';

export default function App() {
  
  const Stack = createNativeStackNavigator()
  
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

