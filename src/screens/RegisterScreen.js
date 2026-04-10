import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { auth } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { UserPlus, ShieldCheck, Activity, Database } from 'lucide-react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 1000, useNativeDriver: true })
    ]).start();
  }, []);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('SISTEMA_AVISA', 'DADOS_INCOMPLETOS: PREENCHA TODOS OS CAMPOS DE CADASTRO.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('ERRO_DE_SINCRONIA', 'AS CHAVES DE ACESSO NÃO COINCIDEM.');
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('IDENTIDADE_GERADA', 'BEM-VINDO AO BUNKER. DEFINA SUAS CREDENCIAIS A SEGUIR.');
      navigation.replace('ProfileSetup');
    } catch (error) {
      console.error(error);
      Alert.alert('FALHA_NO_REGISTRO', 'PROTOCOLO DE SEGURANÇA REJEITOU A SOLICITAÇÃO.');
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
            <Text style={styles.title}>RECRUTAR</Text>
            <Text style={styles.subtitle}>CRIAR NOVA IDENTIDADE OPERACIONAL</Text>
          </View>

          <BlurView intensity={5} tint="dark" style={styles.formCard}>
            <Input 
              label="E-MAIL"
              placeholder="seu@email.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<ShieldCheck size={16} color={Colors.primary} strokeWidth={1.5} />}
            />
            <Input 
              label="CHAVE"
              placeholder="mínimo 6 caracteres"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon={<UserPlus size={16} color={Colors.primary} strokeWidth={1.5} />}
            />
            <Input 
              label="CONFIRMAR"
              placeholder="repetir chave"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
            
            <Button 
              title={loading ? "PROCESSANDO..." : "EFETIVAR REGISTRO"} 
              onPress={handleRegister} 
              disabled={loading}
              style={styles.regBtn}
            />
            
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={styles.loginLink}
            >
              <Text style={styles.loginText}>
                JÁ POSSUI IDENTIDADE? <Text style={styles.loginHighlight}>ENTRAR</Text>
              </Text>
            </TouchableOpacity>
          </BlurView>

          <View style={styles.footer}>
            <Text style={styles.securityText}>PROTOCOL_ALPHA_7 // IDENTITY_SECURE</Text>
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
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    ...Typography.title,
    fontSize: 40,
    color: Colors.text,
    letterSpacing: 6,
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
  regBtn: {
    marginTop: 20,
    borderRadius: 16,
  },
  loginLink: {
    marginTop: 30,
    alignItems: 'center',
  },
  loginText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 9,
    letterSpacing: 1,
    opacity: 0.6,
  },
  loginHighlight: {
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

export default RegisterScreen;
