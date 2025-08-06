import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#222',
        },
        tabBarActiveTintColor: '#1DB954',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Discover') iconName = 'search';
          else if (route.name === 'Songs') iconName = 'musical-notes';
          else if (route.name === 'Settings') iconName = 'settings';
          else iconName = 'ellipse';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Songs" component={SongsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Wavrr</Text>
  <Text style={styles.subtitle}>Music, but with Community.</Text>
  </View>
);

const DiscoverScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🔍 Discover</Text>
    <Text style={styles.subtitle}>Find new tracks, trending artists, and more.</Text>
  </View>
);

const SongsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🎵 Your Songs</Text>
    <Text style={styles.subtitle}>Access your favorite tracks and playlists.</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>⚙️ Settings</Text>
    <Text style={styles.subtitle}>Manage your account and preferences.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
  },
});
