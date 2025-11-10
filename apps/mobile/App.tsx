/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [activeScreen, setActiveScreen] = useState<'home' | 'profile'>('home');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
  };

  return (
    <View style={[styles.container, backgroundStyle]}>
      {activeScreen === 'home' ? <HomeScreen /> : <ProfileScreen />}
      <View
        style={[
          styles.tabBar,
          {
            paddingBottom: safeAreaInsets.bottom,
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ffffff',
          },
        ]}
      >
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveScreen('home')}
        >
          <Text
            style={[
              styles.tabText,
              activeScreen === 'home' && styles.activeTabText,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveScreen('profile')}
        >
          <Text
            style={[
              styles.tabText,
              activeScreen === 'profile' && styles.activeTabText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#0070f3',
    fontWeight: 'bold',
  },
});

export default App;
