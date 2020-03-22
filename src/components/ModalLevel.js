import React from 'react';
import {View, StyleSheet, Text, Modal, TouchableOpacity} from 'react-native';

export default props => {
  return(
    <Modal onRequestClose={props.onCancel}
      visible={props.isVisible} 
      animationType='fade'
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione a Dificuldade:</Text>
          <TouchableOpacity
            style={[styles.button, styles.easy]}
            onPress={() => props.onLevelSelected(0.1)}>
              <Text style={styles.text}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.medium]}
            onPress={() => props.onLevelSelected(0.2)}>
              <Text style={styles.text}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.hard]}
            onPress={() => props.onLevelSelected(0.3)}>
              <Text style={styles.text}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  easy: {
    backgroundColor: '#49b65d',
  },
  medium: {
    backgroundColor: '#2765f7',
  },
  hard: {
    backgroundColor: '#f26337',
  }
});