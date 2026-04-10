import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Trophy, RefreshCw, Home, Activity, Target, Zap, Cpu } from 'lucide-react-native';
import { getUserProfile } from '../services/HistoryService';

const ResultScreen = ({ route, navigation }) => {
  const { score, total, category, mode } = route.params;
  const percentage = (score / total) * 100;
  const [profile, setProfile] = React.useState(null);
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const countAnim = useRef(new Animated.Value(0)).current;

  const [displayScore, setDisplayScore] = React.useState(0);

  useEffect(() => {
    fetchProfile();
    
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 8, tension: 40, useNativeDriver: true }),
      Animated.timing(countAnim, { 
        toValue: score, 
        duration: 1500, 
        easing: Easing.out(Easing.quad),
        useNativeDriver: false 
      })
    ]).start();

    const listenerId = countAnim.addListener(({ value }) => {
      setDisplayScore(Math.floor(value));
    });

    return () => {
      countAnim.removeListener(listenerId);
      countAnim.removeAllListeners();
    };
  }, []);

  const fetchProfile = async () => {
    const data = await getUserProfile();
    setProfile(data);
  };

  const getStatus = () => {
    if (percentage === 100) return 'ELITE_OPERATIVE_ACTIVE';
    if (percentage >= 70) return 'EFFICIENCY_VALIDATED';
    return 'RECALIBRATION_REQUIRED';
  };

  const getStatusColor = () => {
    if (percentage === 100) return Colors.primary;
    if (percentage >= 70) return Colors.accent;
    return Colors.error;
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.background, '#0D0517']} style={StyleSheet.absoluteFill} />
      
      <SafeAreaView style={styles.safe}>
        <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
          
          <View style={styles.missionHeader}>
            <View style={styles.statusBadge}>
              <Cpu color={getStatusColor()} size={12} style={{ marginRight: 8 }} />
              <Text style={[styles.statusText, { color: getStatusColor() }]}>MISSION_STATUS // {getStatus()}</Text>
            </View>
            <Text style={styles.categoryCode}>{category?.toUpperCase()}_UNIT_TX.4</Text>
          </View>

          <View style={styles.trophySection}>
            <LinearGradient
              colors={[getStatusColor() + '15', 'transparent']}
              style={styles.glowBg}
            />
            <Trophy color={getStatusColor()} size={80} strokeWidth={1.5} />
            <View style={styles.accuracyRing}>
              <Text style={[styles.accuracyText, { color: getStatusColor() }]}>{percentage.toFixed(0)}%_ACCURACY</Text>
            </View>
          </View>

          <View style={styles.scoreContainer}>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreLabel}>DATA_POINTS_COLLECTED</Text>
              <View style={styles.scoreRow}>
                <Text style={styles.scoreValue}>{displayScore < 10 ? `0${displayScore}` : displayScore}</Text>
                <Text style={styles.scoreDivider}>//</Text>
                <Text style={styles.scoreTotal}>{total < 10 ? `0${total}` : total}</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Target color={Colors.accent} size={14} />
              <Text style={styles.statLabel}>GOAL_STATE</Text>
              <Text style={styles.statValue}>{score === total ? 'REACHED' : 'PARTIAL'}</Text>
            </View>
            <View style={styles.statItem}>
              <Zap color={Colors.primary} size={14} />
              <Text style={styles.statLabel}>XP_GAIN</Text>
              <Text style={styles.statValue}>+{score * 10}</Text>
            </View>
            <View style={styles.statItem}>
              <Activity color={Colors.textSecondary} size={14} />
              <Text style={styles.statLabel}>MODE</Text>
              <Text style={styles.statValue}>{mode?.toUpperCase()}</Text>
            </View>
          </View>

          {profile && (
            <BlurView intensity={20} tint="dark" style={styles.profileCard}>
              <View style={styles.profileHeader}>
                <Text style={styles.profileId}>SYNC_ID: {profile.displayName?.toUpperCase() || 'OPERATOR'}</Text>
                <Text style={styles.profileLevel}>NV.{profile.level}</Text>
              </View>
              <View style={styles.xpBarBg}>
                <View style={[styles.xpBarFill, { width: `${profile.progress * 100}%` }]}>
                  <LinearGradient
                    colors={[Colors.primary, '#9FFF8F']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                  />
                </View>
              </View>
              <Text style={styles.xpStatus}>XP_UPLOAD_PROGRESS: {Math.round(profile.progress * 100)}%</Text>
            </BlurView>
          )}

          <View style={styles.actions}>
            <TouchableOpacity 
              style={styles.primaryBtn}
              onPress={() => navigation.replace('Quiz', { category, mode })}
            >
              <RefreshCw color={Colors.background} size={18} />
              <Text style={styles.primaryBtnText}>REINICIAR_OPERACAO</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryBtn}
              onPress={() => navigation.replace('Home')}
            >
              <Home color={Colors.text} size={18} />
              <Text style={styles.secondaryBtnText}>RETORNAR_AO_BUNKER</Text>
            </TouchableOpacity>
          </View>

        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  content: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  missionHeader: {
    marginBottom: 40,
    alignItems: 'center',
  },
  statusText: {
    ...Typography.terminal,
    fontSize: 10,
    letterSpacing: 3,
    color: '#FFFFFF',
    textShadowColor: 'rgba(74, 222, 128, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  categoryCode: {
    ...Typography.title,
    color: Colors.textSecondary,
    fontSize: 11,
    opacity: 0.5,
    marginTop: 8,
    letterSpacing: 1,
  },
  trophySection: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    marginBottom: 20,
  },
  glowBg: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    opacity: 0.3,
  },
  accuracyRing: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 222, 128, 0.05)',
    borderWidth: 0.5,
    borderColor: 'rgba(74, 222, 128, 0.2)',
  },
  accuracyText: {
    ...Typography.terminal,
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  scoreContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  scoreBox: {
    width: '100%',
    paddingVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    alignItems: 'center',
  },
  scoreLabel: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 9,
    letterSpacing: 3,
    marginBottom: 10,
    opacity: 0.6,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  scoreValue: {
    ...Typography.title,
    fontSize: 72,
    color: Colors.primary,
    textShadowColor: 'rgba(74, 222, 128, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  scoreDivider: {
    ...Typography.title,
    fontSize: 24,
    color: Colors.textSecondary,
    marginHorizontal: 15,
    opacity: 0.2,
  },
  scoreTotal: {
    ...Typography.title,
    fontSize: 32,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    gap: 15,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  statLabel: {
    ...Typography.terminal,
    fontSize: 8,
    color: Colors.textSecondary,
    marginBottom: 6,
    letterSpacing: 1,
  },
  statValue: {
    ...Typography.title,
    fontSize: 12,
    color: Colors.text,
    letterSpacing: 1,
  },
  profileCard: {
    padding: 22,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 50,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileId: {
    ...Typography.terminal,
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 1,
  },
  profileLevel: {
    ...Typography.title,
    fontSize: 10,
    color: Colors.primary,
    letterSpacing: 1,
  },
  xpBarBg: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  xpBarFill: { height: '100%' },
  xpStatus: {
    ...Typography.terminal,
    fontSize: 8,
    color: Colors.textSecondary,
    marginTop: 12,
    opacity: 0.5,
    letterSpacing: 1,
    textAlign: 'center',
  },
  actions: {
    gap: 15,
  },
  primaryBtn: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 16,
  },
  primaryBtnText: {
    ...Typography.title,
    color: Colors.background,
    fontSize: 13,
    marginLeft: 15,
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  secondaryBtnText: {
    ...Typography.title,
    color: Colors.text,
    fontSize: 13,
    marginLeft: 15,
    letterSpacing: 2,
  },
});

export default ResultScreen;
