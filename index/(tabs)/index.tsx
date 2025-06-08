import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import Constants from 'expo-constants';
import 'expo-router/entry'; // Required for Expo Router
import { StatusBar } from 'expo-status-bar';
import { ErrorBoundary } from 'react-error-boundary';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';

// Define the stack
const Stack = createNativeStackNavigator();

// AppNavigator logic inside index.tsx
function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


  // ======================
  // 1. Error Boundary (Catches crashes)
  // ======================
  function ErrorFallback({ error }: { error: Error; }) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Oops! Something went wrong</Text>
        <Text style={styles.errorText}>{error.message}</Text>
        <StatusBar style="auto" />
      </View>
    );
  };

// ======================
// 2. Environment Check (Dev/Prod)
// ======================
function EnvironmentBanner() {
  if (__DEV__) {
    return (
      <View style={styles.envBanner}>
        <Text style={styles.envText}>DEV MODE</Text>
      </View>
    );
  }
  return null;
}

// ======================
// 3. Root Component
// ======================
function Root() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <EnvironmentBanner />
      <App />
    </ErrorBoundary>
  );
}

// ======================
// 4. Styles
// ======================
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  envBanner: {
    position: 'absolute',
    top: Constants.statusBarHeight + 10,
    right: 10,
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    zIndex: 999,
  },
  envText: {
    color: 'white',
    fontSize: 12,
  },
});

// ======================
// 5. Register with Expo
// ======================
registerRootComponent(Root);