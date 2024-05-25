import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import { useTheme } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

const Details: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text, fontSize: 24 }}>Details</Text>
      <Text style={{ color: theme.text, marginTop: 10 }}>Here are the details of your selected item.</Text>
      <Button title="Voltar" onPress={handleGoBack} />
    </View>
  );
};

export default Details;
