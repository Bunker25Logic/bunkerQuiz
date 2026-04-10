import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView, Modal, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { X, Clock, CheckCircle, AlertCircle, Info, ArrowRight, Terminal as TerminalIcon, Activity, Database } from 'lucide-react-native';
import { saveQuizResult, getUserProfile } from '../services/HistoryService';
import { ALL_QUESTIONS } from '../data/questions';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

const QuizScreen = ({ route, navigation }) => {
  const { category, mode } = route.params;
  const rawQuestions = ALL_QUESTIONS[category] || ALL_QUESTIONS['PRF'];
  
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [profileName, setProfileName] = useState('');

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(15)).current;
  const successGlow = useRef(new Animated.Value(0)).current;

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    let q = shuffleArray(rawQuestions);
    if (mode === 'Prova') q = q.slice(0, 10);
    setQuestions(q);

    const fetchProfile = async () => {
      const data = await getUserProfile();
      if (data?.displayName) setProfileName(data.displayName);
    };
    fetchProfile();
  }, []);

  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null); 
  const [showComment, setShowComment] = useState(false);
  const [showReadingModal, setShowReadingModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false);
  
  const timerRef = useRef(null);

  useEffect(() => {
    if (questions.length === 0) return;
    
    fadeAnim.setValue(0);
    slideAnim.setValue(15);
    successGlow.setValue(0);

    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true })
    ]).start();

    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIdx, questions]);

  const startTimer = () => {
    const initialTime = currentQuestion?.timeLimit || 30;
    setTimeLeft(initialTime);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleTimeout = () => {
    clearInterval(timerRef.current);
    if (mode === 'Treino') {
      setFeedback('timeout');
      setIsInteractionDisabled(true);
      setTimeout(nextQuestion, 2000);
    } else {
      nextQuestion();
    }
  };

  const handleSelectOption = (index) => {
    if (isInteractionDisabled) return;
    
    setSelectedOption(index);
    clearInterval(timerRef.current);

    if (mode === 'Treino') {
      setIsInteractionDisabled(true);
      const isCorrect = index === questions[currentIdx].correct;
      setFeedback(isCorrect ? 'correct' : 'wrong');
      setShowComment(true);
      
      if (isCorrect) {
        setScore(score + 1);
        Animated.sequence([
          Animated.timing(successGlow, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(successGlow, { toValue: 0, duration: 800, useNativeDriver: true })
        ]).start();
      }
    }
  };

  const nextQuestion = () => {
    const isCorrect = selectedOption === questions[currentIdx].correct;
    if (mode === 'Prova' && isCorrect) setScore(s => s + 1);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setFeedback(null);
      setShowComment(false);
      setIsInteractionDisabled(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = async () => {
    const finalScore = mode === 'Prova' 
      ? (selectedOption === questions[currentIdx].correct ? score + 1 : score)
      : score;

    try {
      await saveQuizResult(category, mode, finalScore, questions.length);
    } catch (e) {
      console.error("Failed to save result", e);
    }
    
    navigation.replace('Results', { 
      score: finalScore, 
      total: questions.length, 
      category,
      mode 
    });
  };

  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIdx];
  const progress = (currentIdx + 1) / questions.length;

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.background, '#0F172A']} style={StyleSheet.absoluteFill} />
      
      {/* Success Glow Burst */}
      <Animated.View 
        pointerEvents="none" 
        style={[styles.successGlowOverlay, { opacity: successGlow, backgroundColor: Colors.primary }]} 
      />

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
            <X color={Colors.text} size={20} strokeWidth={1.5} />
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.modeIndicator}>{mode?.toUpperCase()}</Text>
            <Text style={styles.categoryName}>{category?.toUpperCase()}</Text>
          </View>
          <View style={[styles.timerBadge, timeLeft < 10 && styles.timerWarning]}>
            <Clock color={timeLeft < 10 ? '#FFF' : Colors.primary} size={14} strokeWidth={2} />
            <Text style={[styles.timerText, timeLeft < 10 && { color: '#FFF' }]}>{timeLeft}s</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={styles.progressBarWrapper}>
            <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]}>
              <LinearGradient
                colors={[Colors.primary, Colors.secondary]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
              />
            </View>
          </View>
          <Text style={styles.questionCounter}>{currentIdx + 1} / {questions.length}</Text>
        </View>

        <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
          <Animated.View style={[styles.questionArea, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
          </Animated.View>

          <View style={styles.optionsArea}>
            {currentQuestion.readingText && (
              <TouchableOpacity style={styles.readingBtn} onPress={() => setShowReadingModal(true)}>
                <Info color={Colors.primary} size={14} />
                <Text style={styles.readingBtnText}>CONSULTAR_BASE_DE_DADOS</Text>
              </TouchableOpacity>
            )}

            {currentQuestion.options.map((option, index) => {
              let stateStyle = styles.optionNormal;
              let textColor = Colors.textSecondary;
              let indicatorColor = Colors.accent;
              let blurIntensity = 5;

              if (mode === 'Treino' && feedback) {
                if (index === currentQuestion.correct) {
                  stateStyle = styles.optionCorrect;
                  textColor = Colors.primary;
                  indicatorColor = Colors.primary;
                  blurIntensity = 20;
                } else if (selectedOption === index && feedback === 'wrong') {
                  stateStyle = styles.optionWrong;
                  textColor = Colors.error;
                  indicatorColor = Colors.error;
                  blurIntensity = 10;
                }
              } else if (selectedOption === index) {
                stateStyle = styles.optionSelected;
                textColor = Colors.primary;
                indicatorColor = Colors.primary;
                blurIntensity = 15;
              }

              return (
                <TouchableOpacity 
                  key={index} 
                  activeOpacity={0.9}
                  style={styles.optionContainer}
                  onPress={() => handleSelectOption(index)}
                  disabled={isInteractionDisabled}
                >
                  <BlurView
                    intensity={blurIntensity}
                    tint="dark"
                    style={[styles.optionBase, stateStyle]}
                  >
                    <View style={[styles.optionIndicator, { borderColor: indicatorColor + '20', backgroundColor: indicatorColor + '05' }]}>
                      <Text style={{ ...Typography.terminal, color: indicatorColor, fontSize: 10, fontWeight: 'bold' }}>
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                    <Text style={[styles.optionText, { color: textColor }]}>{option}</Text>
                  </BlurView>
                </TouchableOpacity>
              );
            })}
          </View>

          {showComment && (
            <Animated.View style={[styles.commentSection, { opacity: fadeAnim }]}>
              <View style={styles.commentBox}>
                <View style={styles.commentHeader}>
                  <AlertCircle color={Colors.primary} size={14} />
                  <Text style={styles.commentHeaderText}>ANÁLISE_TÉCNICA</Text>
                </View>
                <Text style={styles.commentBody}>
                  {currentQuestion.comment.replace(/{{USER_NAME}}/g, profileName || 'OPERADOR')}
                </Text>
              </View>
            </Animated.View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {!feedback && mode === 'Treino' && (
            <Text style={styles.footerHint}>SELECIONE UMA ALTERNATIVA PARA VALIDAR</Text>
          )}

          {feedback && mode === 'Treino' && (
            <TouchableOpacity style={styles.actionBtn} onPress={nextQuestion}>
              <Text style={styles.actionBtnText}>CONTINUAR</Text>
              <ArrowRight color={Colors.background} size={18} strokeWidth={2.5} />
            </TouchableOpacity>
          )}

          {mode === 'Prova' && (
            <TouchableOpacity 
              style={[styles.actionBtn, selectedOption === null && styles.btnDisabled]} 
              onPress={nextQuestion}
              disabled={selectedOption === null}
            >
              <Text style={styles.actionBtnText}>
                {currentIdx + 1 === questions.length ? 'FINALIZAR' : 'PRÓXIMO'}
              </Text>
              <ArrowRight color={Colors.background} size={18} strokeWidth={2.5} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>

      <Modal visible={showReadingModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill} />
          <View style={styles.modalBody}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>TEXTO_DE_APOIO</Text>
              <TouchableOpacity onPress={() => setShowReadingModal(false)}>
                <X color={Colors.text} size={24} strokeWidth={1.5} />
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.modalScroll}>
              <Text style={styles.readingText}>{currentQuestion.readingText}</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  successGlowOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerInfo: { alignItems: 'center' },
  modeIndicator: { ...Typography.terminal, color: Colors.accent, fontSize: 8, letterSpacing: 2, opacity: 0.6 },
  categoryName: { ...Typography.title, color: Colors.text, fontSize: 13, marginTop: 4, letterSpacing: 1 },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    minWidth: 65,
    justifyContent: 'center',
  },
  timerWarning: { backgroundColor: Colors.error + '20', borderColor: Colors.error + '40' },
  timerText: { ...Typography.terminal, color: Colors.primary, marginLeft: 6, fontSize: 12, fontWeight: 'bold' },
  progressSection: { paddingHorizontal: 25, marginBottom: 25, alignItems: 'center' },
  progressBarWrapper: {
    width: '100%',
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: { height: '100%', borderRadius: 2 },
  questionCounter: { ...Typography.terminal, color: Colors.textSecondary, fontSize: 9, marginTop: 10, opacity: 0.5, letterSpacing: 1 },
  content: { flex: 1, paddingHorizontal: 25 },
  questionArea: {
    paddingVertical: 20,
    marginBottom: 20,
  },
  questionText: {
    ...Typography.question,
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 28,
  },
  optionsArea: { gap: 12 },
  optionContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
  },
  readingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: 'rgba(74, 222, 128, 0.03)',
    borderWidth: 0.5,
    borderColor: Colors.primary + '20',
    borderRadius: 12,
    marginBottom: 5,
  },
  readingBtnText: { 
    ...Typography.terminal, 
    color: Colors.primary, 
    fontSize: 9, 
    marginLeft: 10, 
    letterSpacing: 2, 
    fontWeight: 'bold'
  },
  optionBase: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 0.5,
  },
  optionNormal: { borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'transparent' },
  optionSelected: { borderColor: Colors.primary + '30', backgroundColor: 'rgba(74, 222, 128, 0.05)' },
  optionCorrect: { borderColor: Colors.success, backgroundColor: 'rgba(16, 185, 129, 0.1)' },
  optionWrong: { borderColor: Colors.error + '40', backgroundColor: 'rgba(244, 63, 94, 0.05)' },
  optionIndicator: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionText: { 
    ...Typography.body, 
    fontSize: 15, 
    flex: 1, 
    lineHeight: 22,
  },
  commentSection: { marginTop: 30 },
  commentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    padding: 22,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  commentHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 10 },
  commentHeaderText: { ...Typography.terminal, color: Colors.primary, fontSize: 9, letterSpacing: 2, fontWeight: 'bold' },
  commentBody: { 
    ...Typography.body, 
    color: 'rgba(255, 255, 255, 0.8)', 
    fontSize: 14, 
    lineHeight: 24,
    textAlign: 'justify'
  },
  footer: { padding: 25, alignItems: 'center' },
  footerHint: { ...Typography.terminal, color: Colors.textSecondary, fontSize: 9, opacity: 0.4, letterSpacing: 1 },
  actionBtn: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 35,
    borderRadius: 16,
    width: '100%',
  },
  actionBtnText: { ...Typography.title, color: Colors.background, fontSize: 13, letterSpacing: 4, marginRight: 15, fontWeight: 'bold' },
  btnDisabled: { opacity: 0.2, backgroundColor: Colors.textSecondary },
  modalOverlay: { flex: 1, justifyContent: 'flex-end' },
  modalBody: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '80%',
    padding: 30,
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  modalTitle: { ...Typography.title, color: Colors.text, fontSize: 14, letterSpacing: 2 },
  modalScroll: { flex: 1 },
  readingText: { ...Typography.body, color: Colors.textSecondary, fontSize: 15, lineHeight: 28, textAlign: 'justify' },
});

export default QuizScreen;
