import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Trophy, ArrowLeft, Medal, Activity, Globe, Cpu } from 'lucide-react-native';
import { getRanking } from '../services/HistoryService';

const RankingItem = ({ item, index }) => {
  const isTopThree = index < 3;
  const rankColors = [Colors.primary, Colors.accent, '#FF9900']; // Gold (Neon), Silver (Cobalt), Bronze (Amber)
  const itemColor = isTopThree ? rankColors[index] : Colors.textSecondary;
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(15)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        delay: index * 50,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateX: slideAnim }] }}>
      <BlurView intensity={10} tint="dark" style={[styles.rankingItem, isTopThree && { borderColor: itemColor + '40', borderWidth: 0.8 }]}>
        <View style={styles.rankContainer}>
          {isTopThree ? (
            <Medal color={itemColor} size={20} strokeWidth={2.5} />
          ) : (
            <Text style={styles.rankText}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</Text>
          )}
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.displayName?.toUpperCase() || 'ANONYMOUS_OP'}</Text>
          <Text style={styles.userLevel}>OPERADOR_ID: {item.id ? item.id.substring(0, 8) : 'TEMP_USER'}</Text>
        </View>
        <View style={styles.hitsContainer}>
          <Text style={[styles.hitsValue, { color: itemColor }]}>{item.totalHits}</Text>
          <Text style={styles.hitsLabel}>DATA_HITS</Text>
        </View>
      </BlurView>
    </Animated.View>
  );
};

const RankingScreen = ({ navigation }) => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const data = await getRanking();
      setRanking(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.background, '#0D0517']} style={StyleSheet.absoluteFill} />
      
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft color={Colors.text} size={20} />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Globe color={Colors.primary} size={14} />
            <Text style={styles.title}>GLOBAL_OPERATOR_LIST</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.statusText}>SYNC_OK</Text>
            <View style={styles.statusDot} />
          </View>
        </View>

        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="small" color={Colors.primary} />
            <Text style={styles.loadingText}>SINC_DE_DADOS_REMOTOS...</Text>
          </View>
        ) : (
          <FlatList
            data={ranking}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => <RankingItem item={item} index={index} />}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.listHeader}>
                <Cpu color={Colors.accent} size={12} style={{ marginRight: 8 }} />
                <Text style={styles.listHeaderText}>// RANK_DATABASE_FETCHED</Text>
              </View>
            }
            ListEmptyComponent={
              <Text style={styles.emptyText}>AGUARDANDO_CONEXÃO_COM_SERVIDOR...</Text>
            }
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  headerTitleContainer: {
    flex: 1,
    marginLeft: 15,
  },
  backButton: { 
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.03)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  title: {
    ...Typography.title,
    fontSize: 14,
    color: Colors.text,
    letterSpacing: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    marginTop: 15,
    fontSize: 10,
    letterSpacing: 2,
    opacity: 0.6,
  },
  list: { paddingHorizontal: 25, paddingTop: 10, paddingBottom: 40 },
  listHeader: {
    marginBottom: 25,
    opacity: 0.4,
  },
  listHeaderText: {
    ...Typography.terminal,
    fontSize: 9,
    color: Colors.textSecondary,
    letterSpacing: 2,
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  rankContainer: { width: 40, alignItems: 'center' },
  rankText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 13,
    fontWeight: 'bold',
    opacity: 0.6,
  },
  userInfo: { flex: 1, marginLeft: 15 },
  userName: {
    ...Typography.title,
    color: Colors.text,
    fontSize: 14,
    letterSpacing: 1,
  },
  userLevel: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 8,
    marginTop: 4,
    opacity: 0.5,
  },
  hitsContainer: { 
    alignItems: 'flex-end', 
    paddingLeft: 15,
  },
  hitsValue: {
    ...Typography.title,
    fontSize: 18,
    color: Colors.primary,
    letterSpacing: 1,
  },
  hitsLabel: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    fontSize: 7,
    marginTop: 2,
    opacity: 0.4,
    letterSpacing: 1,
  },
  emptyText: {
    ...Typography.terminal,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 10,
    opacity: 0.5,
  },
});

export default RankingScreen;
