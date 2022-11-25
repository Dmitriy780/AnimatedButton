/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
          Animation button (by Dmitriy)
        </Text>
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
        <CustomButton title='Join' style={{ marginTop: 10 }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default App;
