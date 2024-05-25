import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const theme = useTheme();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { email, password });
      setMessage('Registration successful');
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 24 }}>Register</Text>
      <TextInput
        style={[globalStyles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Email"
        placeholderTextColor={theme.placeholder}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[globalStyles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Password"
        placeholderTextColor={theme.placeholder}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={[globalStyles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Confirm Password"
        placeholderTextColor={theme.placeholder}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} color={theme.primary} />
      {message && <Text style={{ color: theme.text }}>{message}</Text>}
    </View>
  );
};

export default Register;
