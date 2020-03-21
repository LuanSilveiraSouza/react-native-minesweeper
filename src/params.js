import {Dimensions} from 'react-native';

const params = {
  blockSize: 50,
  borderSize: 10,
  fontSize: 20,
  headerRatio: 0.2,
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const height = Dimensions.get('window').height;
    const boardHeight = height * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  }
};

export default params;