import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Shield, HardHat, Heart, Trophy, Terminal as TerminalIcon, Activity, Cpu } from 'lucide-react-native';
import { getUserProfile } from '../services/HistoryService';
import { useFocusEffect } from '@react-navigation/native';

import { prfQuestions } from '../data/questions/prf';
import { pmQuestions } from '../data/questions/pm';
import { saudeQuestions } from '../data/questions/saude';

const { width } = Dimensions.get('window');

const CATEGORIES = [
  { id: '1', title: 'PRF', icon: Shield, color: Colors.primary, questions: `${prfQuestions?.length || 0} QUESTÕES`, code: 'DEP_714' },
  { id: '2', title: 'POLÍCIA MILITAR', icon: HardHat, color: Colors.accent, questions: `${pmQuestions?.length || 0} QUESTÕES`, code: 'DEP_190' },
  { id: '3', title: 'SAÚDE', icon: Heart, color: Colors.error, questions: `${saudeQuestions?.length || 0} QUESTÕES`, code: 'DEP_192' },
];

const CategoryCard = ({ item, onPress, index }) => {
  const Icon = item.icon;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 600,
        delay: index * 80,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY }] }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.cardContainer}>
        <BlurView intensity={10} tint="dark" style={styles.card}>
          <View style={[styles.iconContainer, { borderColor: item.color + '30' }]}>
            <LinearGradient
              colors={[item.color + '20', 'transparent']}
              style={StyleSheet.absoluteFill}
            />
            <Icon color={item.color} size={24} strokeWidth={1.5} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.questions}</Text>
          </View>
          <View style={[styles.statusIndicator, { backgroundColor: item.color + '20' }]}>
            <View style={[styles.statusDot, { backgroundColor: item.color }]} />
          </View>
        </BlurView>
      </TouchableOpacity>
    </Animated.View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [mode, setMode] = React.useState('Treino');
  const [profile, setProfile] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      fetchProfile();
    }, [])
  );

  const fetchProfile = async () => {
    const data = await getUserProfile();
    setProfile(data);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.background, '#0F172A']} style={StyleSheet.absoluteFill} />
      
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.brandingSubtitle}>BUNKER_SYSTEM // v8.2</Text>
            <Text style={styles.greeting}>BEM-VINDO, {profile?.displayName?.split(' ')[0].toUpperCase() || 'OPERADOR'}</Text>
          </View>
          <TouchableOpacity 
            style={styles.rankingButton}
            onPress={() => navigation.navigate('Ranking')}
          >
            <Trophy color={Colors.primary} size={20} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>

        {profile && (
          <View style={styles.progressSection}>
            <BlurView intensity={5} tint="dark" style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <Text style={styles.levelText}>NÍVEL {profile.level}</Text>
                <Text style={styles.xpText}>{profile.xp % 100} / 100 XP</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: `${profile.progress * 100}%` }]}>
                  <LinearGradient
                    colors={[Colors.primary, Colors.secondary]}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                  />
                </View>
              </View>
            </BlurView>
          </View>
        )}

        <View style={styles.modeSection}>
          <TouchableOpacity 
            style={[styles.modeButton, mode === 'Treino' && styles.modeButtonActive]} 
            onPress={() => setMode('Treino')}
          >
            <Text style={[styles.modeButtonText, mode === 'Treino' && styles.modeButtonTextActive]}>MODO_TREINO</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.modeButton, mode === 'Prova' && styles.modeButtonActive]} 
            onPress={() => setMode('Prova')}
          >
            <Text style={[styles.modeButtonText, mode === 'Prova' && styles.modeButtonTextActive]}>MODO_PROVA</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>// DISCIPLINAS_ATIVAS</Text>
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CategoryCard 
                item={item} 
                index={index}
                onPress={() => navigation.navigate('Quiz', { category: item.title, mode })} 
              />
            )}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandingSubtitle: {
    ...Typography.terminal,
    color: Colors.accent,
    fontSize: 8,
    letterSpacing: 2,
    marginBottom: 4,
    opacity: 0.6,
  },
  greeting: {
    ...Typography.title,
    fontSize: 20,
    color: Colors.text,
    letterSpacing: 1,
  },
  rankingButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  progressSection: {
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  progressCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    overflow: 'hidden',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  levelText: {
    ...Typography.title,
    color: Colors.primary,
    fontSize: 10,
    letterSpacing: 2,
  },
  xpText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 9,
    opacity: 0.7,
  },
  progressBarBg: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  modeSection: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginBottom: 30,
    gap: 15,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  modeButtonActive: {
    backgroundColor: 'rgba(74, 222, 128, 0.08)',
    borderColor: Colors.primary + '40',
  },
  modeButtonText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 10,
    letterSpacing: 1,
  },
  modeButtonTextActive: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  section: {
    flex: 1,
    paddingHorizontal: 25,
  },
  sectionTitle: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 10,
    marginBottom: 20,
    letterSpacing: 2,
    opacity: 0.5,
  },
  list: { paddingBottom: 20 },
  cardContainer: {
    marginBottom: 15,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  card: {
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  cardInfo: { flex: 1 },
  cardTitle: {
    ...Typography.title,
    fontSize: 16,
    color: Colors.text,
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardSubtitle: {
    ...Typography.terminal,
    fontSize: 9,
    color: Colors.textSecondary,
    opacity: 0.6,
    letterSpacing: 1,
  },
  statusIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default HomeScreen;
