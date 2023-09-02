import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TaskInterface} from '../../core/interfaces/TaskInterface';

/**
 * TaskItem.
 *
 * @param description
 */
export const TaskItem = ({description}: TaskInterface) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 0.6,
    marginHorizontal: 10,
  },
  textStyle: {
    maxWidth: '80%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
