import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation<any>(); // Defina o tipo do parâmetro explicitamente como 'any'

  const theme = useTheme();

  const goToLogin = () => {
    navigation.navigate('Login' as any); // Navega para a tela de login
  };

  const goToRegister = () => {
    navigation.navigate('Register' as any); // Navega para a tela de registro
  };
  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 24 }}>Welcome to the Mental Health Platform</Text>
      <Text style={{ color: theme.text, marginTop: 10 }}>Your mental well-being is our priority.</Text>
      <Button title="Login" onPress={goToLogin} />
      <Button title="Register" onPress={goToRegister} />
    </View>
  );
};

export default Home;
