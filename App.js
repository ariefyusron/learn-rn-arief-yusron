import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const data = [
  {
    title: 'title 1',
    desc: 'lvraevcea vrevrecw veww ',
  },
  {
    title: 'title 2',
    desc: 'lvraevcea cdscdsvrevrecw veww ',
  },
  {
    title: 'title 3',
    desc: 'lvraevcea vrevreccdscscsdcw cdsc veww ',
  },
  {
    title: 'title 1',
    desc: 'lvraevcea vrevrecw veww ',
  },
  {
    title: 'title 2',
    desc: 'lvraevcea cdscdsvrevrecw veww ',
  },
  {
    title: 'title 3',
    desc: 'lvraevcea vrevreccdscscsdcw cdsc veww ',
  },
  {
    title: 'title 1',
    desc: 'lvraevcea vrevrecw veww ',
  },
  {
    title: 'title 2',
    desc: 'lvraevcea cdscdsvrevrecw veww ',
  },
  {
    title: 'title 3',
    desc: 'lvraevcea vrevreccdscscsdcw cdsc veww ',
  },
  {
    title: 'title 1',
    desc: 'lvraevcea vrevrecw veww ',
  },
  {
    title: 'title 2',
    desc: 'lvraevcea cdscdsvrevrecw veww ',
  },
  {
    title: 'title 3',
    desc: 'lvraevcea vrevreccdscscsdcw cdsc veww ',
  },
];

const App = () => {
  const _renderItems = ({item}) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.desc}</Text>
      <Text>--------</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.column1}>
          <Text>Learn</Text>
        </View>

        <View style={styles.column2}>
          <Text>Rn</Text>
        </View>
      </View>

      <View style={styles.row2}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItems}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  row1: {
    backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'row',
  },
  column1: {
    backgroundColor: 'green',
    flex: 3,
  },
  column2: {
    backgroundColor: 'blue',
    flex: 1,
  },
  row2: {
    backgroundColor: 'grey',
    flex: 1,
  },
});

export default App;
