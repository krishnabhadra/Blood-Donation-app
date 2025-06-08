import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3178/3178153.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Blood Donation App</Text>
      <Text style={styles.subtitle}>Donate Blood, Save Lives 🩸</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff5f5', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#b00020' },
  subtitle: { fontSize: 16, color: '#555', marginVertical: 10 },
  button: { backgroundColor: '#b00020', padding: 12, borderRadius: 8, marginTop: 20 },
  buttonText: { color: 'white', fontSize: 16 }
});
