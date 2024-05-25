import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useTheme } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    try {
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { email, password });
      setMessage('Login successful');
      navigation.navigate('Details'as any);
    } catch (error) {
      setMessage('Login failed');
    }
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 24 }}>Login</Text>
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
      <Button title="Login" onPress={handleLogin} color={theme.primary} />
      {message && <Text style={{ color: theme.text }}>{message}</Text>}
    </View>
  );
};

export default Login;
