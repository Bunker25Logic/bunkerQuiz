import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

export const Button = ({ title, onPress, type = 'primary', style, disabled }) => {
  const isPrimary = type === 'primary';

  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={disabled}
      activeOpacity={0.7}
      style={[styles.container, style]}
    >
      <BlurView
        intensity={isPrimary ? 40 : 20}
        tint="dark"
        style={[
          styles.button,
          isPrimary ? styles.primaryBorder : styles.secondaryBorder,
          disabled && styles.disabled
        ]}
      >
        {isPrimary && (
          <LinearGradient
            colors={[Colors.primary + '40', Colors.primary + '10']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        )}
        <Text style={[
          styles.text,
          isPrimary ? { color: Colors.primary } : { color: Colors.text }
        ]}>
          {title}
        </Text>
      </BlurView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    overflow: 'hidden',
  },
  primaryBorder: {
    borderColor: Colors.primary + '60',
  },
  secondaryBorder: {
    borderColor: 'rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
  },
  disabled: {
    opacity: 0.3,
  },
  text: {
    ...Typography.title,
    fontSize: 12,
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
