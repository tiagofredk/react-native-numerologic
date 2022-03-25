import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainContextProvider from './src/components/context/MainContextProvider';

export default function App() {
  return (
    <NavigationContainer>
      <MainContextProvider>
        
        <StatusBar style="auto" />
      </MainContextProvider>
    </NavigationContainer>
  );
}

