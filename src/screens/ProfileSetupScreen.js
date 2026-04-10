import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { updateDisplayName } from '../services/HistoryService';
import { Cpu, Terminal as TerminalIcon, Fingerprint, Activity } from 'lucide-react-native';

const ProfileSetupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true })
    ]).start();
  }, []);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('SISTEMA_REJEITOU', 'IDENTIFICAÇÃO_NULA: INSIRA SEU NOME PARA CONCLUIR A VINCULAÇÃO.');
      return;
    }

    setLoading(true);
    try {
      await updateDisplayName(name.trim());
      navigation.replace('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('FALHA_NA_GRAVACAO', 'ERRO AO SINCRONIZAR IDENTIDADE COM O BANCO CENTRAL.');
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
            <Text style={styles.title}>IDENTIDADE</Text>
            <Text style={styles.subtitle}>DEFINA COMO VOCÊ SERÁ RECONHECIDO NO SISTEMA</Text>
          </View>

          <BlurView intensity={5} tint="dark" style={styles.setupCard}>
            <View style={styles.metaRow}>
              <Fingerprint color={Colors.primary} size={14} strokeWidth={1.5} />
              <Text style={styles.metaText}>VINCULANDO BIO-ASSINATURA...</Text>
            </View>

            <Input 
              label="SEU NOME"
              placeholder="Digite sua identificação"
              value={name}
              onChangeText={setName}
              autoFocus
            />
            
            <Button 
              title={loading ? "PROCESSANDO..." : "CONFIRMAR"} 
              onPress={handleSave} 
              disabled={loading}
              style={styles.actionBtn}
            />
          </BlurView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>BUNKER_SYSTEM // PERSISTENCE_ACTIVE</Text>
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
    letterSpacing: 1.5,
    marginTop: 10,
    opacity: 0.5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  setupCard: {
    padding: 30,
    borderRadius: 24,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    overflow: 'hidden',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    opacity: 0.4,
    gap: 10,
  },
  metaText: {
    ...Typography.terminal,
    fontSize: 8,
    color: Colors.primary,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  actionBtn: {
    marginTop: 20,
    borderRadius: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    ...Typography.terminal,
    fontSize: 8,
    color: Colors.textSecondary,
    opacity: 0.3,
    letterSpacing: 2,
  },
});

export default ProfileSetupScreen;
