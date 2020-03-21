import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from './src/params';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Campo Minado</Text>
      <Text>Tamanho do tabuleiro: {params.getRowsAmount()} * {params.getColumnsAmount()}</Text>

      <Field />
      <Field opened />
      <Field opened nearMines={1}/>
      <Field opened nearMines={2}/>
      <Field opened nearMines={3}/>
      <Field opened nearMines={6}/>
      <Field mined opened />
      <Field flagged/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
