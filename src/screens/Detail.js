import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>Ini detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Detail;
