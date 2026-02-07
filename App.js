import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TryCodeScreen from './src/Screens/TryCodeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/Screens/HomeScreen';
import MainNavigator from './src/navigator/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  );
}
