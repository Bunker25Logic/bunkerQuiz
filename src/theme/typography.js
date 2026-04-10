import { Platform } from 'react-native';

/**
 * Sistema de Tipografia Bunker25 Logic - Nível Premium Refinado
 * 
 * Otimizado para legibilidade em interfaces Glassmorphism.
 */

export const Typography = {
  title: {
    fontFamily: Platform.select({ ios: 'Orbitron_700Bold', android: 'Orbitron_700Bold' }),
    letterSpacing: 4,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  body: {
    fontFamily: Platform.select({ ios: 'Oxanium_400Regular', android: 'Oxanium_400Regular' }),
    lineHeight: 26,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  question: {
    fontFamily: Platform.select({ ios: 'Oxanium_500Medium', android: 'Oxanium_500Medium' }),
    fontSize: 17,
    lineHeight: 28,
    letterSpacing: 0.3,
    color: '#FFFFFF',
  },
  terminal: {
    fontFamily: Platform.select({ ios: 'Oxanium_600SemiBold', android: 'Oxanium_600SemiBold' }),
    fontSize: 14,
    letterSpacing: 1.2,
    lineHeight: 20,
  },
  label: {
    fontFamily: Platform.select({ ios: 'Orbitron_400Regular', android: 'Orbitron_400Regular' }),
    fontSize: 10,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    opacity: 0.8,
  }
};
