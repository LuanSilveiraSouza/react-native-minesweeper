import React from 'react';
import {View, StyleSheet} from 'react-native';
import params from '../params';

export default props => {
  return(
    <View style={styles.container}>
      <View style={styles.core}/>
      <View style={styles.line}/>
      <View style={[styles.line, {transform: [{rotate: '45deg'}] }]}/>
      <View style={[styles.line, {transform: [{rotate: '90deg'}] }]}/>
      <View style={[styles.line, {transform: [{rotate: '135deg'}] }]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  core: {
    height: params.blockSize / 3,
    width: params.blockSize / 3,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: (params.blockSize / 6) + params.blockSize / 3,
    borderRadius: 3,
    backgroundColor: '#000',
  }
});