import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
  const {mined, opened, nearMines, flagged, exploded} = props;

  const stylesField = [styles.field];

  if(opened) stylesField.push(styles.opened);
  if(exploded) stylesField.push(styles.exploded);
  if(flagged) stylesField.push(styles.flagged);
  if(!opened) stylesField.push(styles.regular);
  
  let color = null;
  if(nearMines > 0) {
    if(nearMines == 1) color = '#2A28D7';
    if(nearMines == 2) color = '#2B520F';
    if(nearMines > 2 && nearMines < 6) color = '#F9060A';
    if(nearMines >= 6) color = '#F221A9';
  }

  return(
    <TouchableWithoutFeedback onPress={() => props.onOpen()}
      onLongPress = {() => props.onSelect()}>
      <View style={stylesField}>
      {!mined && opened && nearMines > 0 ? 
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text> : false}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#CCC',
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  }, 
  exploded: {
    backgroundColor: '#fc3a3a',
    borderColor: '#d93838'
  }
});