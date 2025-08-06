import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Linking, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>🎧 Wavrr</Text>
      <Text style={styles.subtitle}>Your Social Music Playground</Text>

      <View style={styles.section}>
        <Text style={styles.label}>🌐 Version:</Text>
        <Text style={styles.value}>1.0.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🚀 Built With:</Text>
        <Text style={styles.value}>React Native + Expo</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>📞 Contact:</Text>
        <Pressable onPress={() => Linking.openURL('mailto:support@wavrr.app')}>
          <Text style={styles.link}>support@wavrr.app</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>🔗 GitHub / Source:</Text>
        <Pressable onPress={() => Linking.openURL('https://github.com/your-wavrr')}>
          <Text style={styles.link}>github.com/your-wavrr</Text>
        </Pressable>
      </View>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 30,
  },
  section: {
    marginBottom: 16,
    alignItems: 'center',
  },
  label: {
    color: '#888',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  link: {
    color: '#1DB954',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
  },
});
