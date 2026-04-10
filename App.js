import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, 
  Orbitron_400Regular, 
  Orbitron_700Bold 
} from '@expo-google-fonts/orbitron';
import { 
  Oxanium_400Regular, 
  Oxanium_600SemiBold, 
  Oxanium_700Bold 
} from '@expo-google-fonts/oxanium';
import AppNavigator from './src/navigation/AppNavigator';
import { Colors } from './src/theme/colors';

// Manter a splash screen visível enquanto carregamos recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_700Bold,
    Oxanium_400Regular,
    Oxanium_600SemiBold,
    Oxanium_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // Esconder a splash screen assim que as fontes estiverem prontas
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <View style={styles.container}>
          <StatusBar style="light" />
          <AppNavigator />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

