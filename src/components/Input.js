import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

export const Input = ({ label, style, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={Colors.textSecondary + '60'}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    ...Typography.label,
    color: Colors.accent,
    marginBottom: 10,
  },
  input: {
    ...Typography.terminal,
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 4,
    padding: 16,
    color: Colors.primary,
    fontSize: 14,
    borderWidth: 0.8,
    borderColor: Colors.accent + '40',
  },
});
