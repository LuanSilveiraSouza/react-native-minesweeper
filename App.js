import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,} from './src/logics';
import MineField from './src/components/MineField';

export default function App() {

  const minesAmount = Math.ceil(params.getRowsAmount() * params.getColumnsAmount() * params.difficultLevel);

  const [board, setBoard] = useState(
    createMinedBoard(params.getRowsAmount(), params.getColumnsAmount(), minesAmount)
    );
  
  const [win, setWin] = useState(false);

  onOpenField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    openField(clonedBoard, row, column);
    const lost = hadExplosion(clonedBoard);
    const won = wonGame(clonedBoard);

    if(lost) {
      showMines(clonedBoard);
      Alert.alert('Fim de Jogo', 'Você Perdeu');
    }

    if(won) {
      Alert.alert('Parabéns', 'Você Ganhou!!!');
    }

    setBoard(clonedBoard);
    setWin(true);
  }

  onSelectField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    invertFlag(clonedBoard, row, column);
    const won = wonGame(clonedBoard);

    if(won) {
      Alert.alert('Parabéns', 'Você Ganhou!!!');
    }

    setBoard(clonedBoard);
  }

  return (
    <View style={styles.container}>
      <Text>Campo Minado</Text>
      <Text>Tamanho do tabuleiro: {params.getRowsAmount()} * {params.getColumnsAmount()}</Text>

      <View style={styles.board}>
        <MineField board={board} 
        onOpenField={onOpenField}
        onSelectField={onSelectField}/>
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
