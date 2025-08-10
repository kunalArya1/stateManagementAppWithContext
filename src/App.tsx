/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ThemeProvider from './context/ThemeProvider';
import Home from './Components/Home';

function App() {
  return (
    <View>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
