import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import {createMinedBoard} from './src/logics';
import MineField from './src/components/MineField';

export default function App() {

  const minesAmount = Math.ceil(params.getRowsAmount() * params.getColumnsAmount() * params.difficultLevel);

  const [board, setBoard] = useState(
    createMinedBoard(params.getRowsAmount(), params.getColumnsAmount(), minesAmount)
    );

  return (
    <View style={styles.container}>
      <Text>Campo Minado</Text>
      <Text>Tamanho do tabuleiro: {params.getRowsAmount()} * {params.getColumnsAmount()}</Text>

      <View style={styles.board}>
        <MineField board={board}/>
      </View>
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
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
});
