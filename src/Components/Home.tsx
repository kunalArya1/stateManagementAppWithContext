import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <View
        style={{
          backgroundColor: theme == 'dark' ? 'black' : 'white',
          height: '100%',
          width: '100%',
          padding: 40,
        }}
      >
        <Text
          style={{
            color: theme == 'dark' ? 'white' : 'black',
          }}
        >
          Hello World
        </Text>
        <Button title="Change Theme" onPress={() => toggleTheme()} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
