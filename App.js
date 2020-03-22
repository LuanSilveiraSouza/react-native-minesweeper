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
  invertFlag,
  flagsUsed,} from './src/logics';
import ModalLevel from './src/components/ModalLevel';
import Header from './src/components/Header';
import MineField from './src/components/MineField';

export default function App() {

  const [rows, setRows] = useState(params.getRowsAmount());

  const [columns, setColumns] = useState(params.getColumnsAmount());

  const [board, setBoard] = useState(
    createMinedBoard(rows, columns, minesAmount)
    );

  const [minesAmount, setMinesAmount] = useState(Math.ceil(rows * columns * params.difficultLevel));
  
  const [win, setWin] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const reset = () => {
    setBoard(createMinedBoard(rows, columns, minesAmount))
    setMinesAmount(Math.ceil(params.getRowsAmount() * columns * params.difficultLevel));
    setWin(false);
  }

  onOpenField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    openField(clonedBoard, row, column);
    const lost = hadExplosion(clonedBoard);
    setWin(wonGame(clonedBoard));

    if(lost) {
      showMines(clonedBoard);
      Alert.alert('Fim de Jogo', 'Você Perdeu', [{text: 'OK', onPress:() => reset()}]);
    }

    if(win) {
      Alert.alert('Parabéns', 'Você Ganhou!!!', [{text: 'OK', onPress:() => reset()}]);
    }

    setBoard(clonedBoard);
  }

  onSelectField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    invertFlag(clonedBoard, row, column);
    setWin(wonGame(clonedBoard));

    if(win) {
      Alert.alert('Parabéns', 'Você Ganhou!!!', [{text: 'OK', onPress:() => reset()}]);
    }

    setBoard(clonedBoard);
  }

  onLevelSelection = level => {
    params.difficultLevel = level;
    reset();
    setShowModal(false);
  }

  return (
    <View style={styles.container}>
      <ModalLevel isVisible={showModal}
        onLevelSelected={onLevelSelection}
        onCancel={() => setShowModal(false)} />
      <Header flagsLeft={minesAmount - flagsUsed(board)}
        onNewGame={() => reset()}
        onFlagPress={() => setShowModal(true)}/>
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
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    alignItems: 'center',
    paddingBottom: 10
  }
});
