import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativagionPropsInterface} from '../core/interfaces/NativagionPropsInterface';

/**
 * HomeScreen
 * @param navigation
 */
const HomeScreen: React.FC<NativagionPropsInterface> = ({navigation}) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.buttonSection}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.textStyle}>Tasks</Text>
        </Pressable>

        <Pressable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('List')}>
          <Text style={styles.textStyle}>List</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
  },
  buttonSection: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 8,
    elevation: 1,
    backgroundColor: '#c2ddfc',
    marginTop: 6,
    marginBottom: 6,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default HomeScreen;
