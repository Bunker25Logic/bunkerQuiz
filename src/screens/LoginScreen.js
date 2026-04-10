import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getUserProfile } from '../services/HistoryService';
import { ShieldAlert, Cpu, Lock, Key } from 'lucide-react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 1000, useNativeDriver: true })
    ]).start();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('SISTEMA_AVISA', 'CONECTOR_DE_DADOS_AUSENTE: PREENCHA TODOS OS CAMPOS.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const profile = await getUserProfile();
      navigation.replace(profile ? 'Home' : 'ProfileSetup');
    } catch (error) {
      console.error(error);
      Alert.alert('FALHA_NA_AUTENTICACAO', 'CREDENCIAIS_BLOQUEADAS OU ERRO_DE_SINCRONIZACAO.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.background, '#0D0517']} style={StyleSheet.absoluteFill} />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <Animated.View style={[styles.inner, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.title}>BUNKER</Text>
            <Text style={styles.subtitle}>ACESSO AO SISTEMA DE ELITE</Text>
          </View>

          <BlurView intensity={5} tint="dark" style={styles.formCard}>
            <Input 
              label="OPERADOR"
              placeholder="seu@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Lock size={16} color={Colors.primary} strokeWidth={1.5} />}
            />
            <Input 
              label="CHAVE"
              placeholder="sua senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon={<Key size={16} color={Colors.primary} strokeWidth={1.5} />}
            />
            
            <Button 
              title={loading ? "VERIFICANDO..." : "ENTRAR"} 
              onPress={handleLogin} 
              disabled={loading}
              style={styles.loginBtn}
            />
            
            <TouchableOpacity 
              onPress={() => navigation.navigate('Register')}
              style={styles.registerLink}
            >
              <Text style={styles.registerText}>
                NOVO OPERADOR? <Text style={styles.registerHighlight}>RECRUTAR</Text>
              </Text>
            </TouchableOpacity>
          </BlurView>

          <View style={styles.footer}>
            <Text style={styles.securityText}>BUNKER_SYSTEM // SECURE_ACCESS</Text>
          </View>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 25 },
  inner: { flex: 1, justifyContent: 'center' },
  header: {
    marginBottom: 60,
    alignItems: 'center',
  },
  title: {
    ...Typography.title,
    fontSize: 42,
    color: Colors.text,
    letterSpacing: 8,
    textAlign: 'center',
    textShadowColor: Colors.primary + '30',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  subtitle: {
    ...Typography.terminal,
    fontSize: 10,
    color: Colors.textSecondary,
    letterSpacing: 2,
    marginTop: 10,
    opacity: 0.5,
  },
  formCard: {
    padding: 30,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    overflow: 'hidden',
  },
  loginBtn: {
    marginTop: 20,
    borderRadius: 16,
  },
  registerLink: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 9,
    letterSpacing: 1,
    opacity: 0.6,
  },
  registerHighlight: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  securityText: {
    ...Typography.terminal,
    fontSize: 8,
    color: Colors.textSecondary,
    letterSpacing: 2,
    opacity: 0.3,
  },
});

export default LoginScreen;
