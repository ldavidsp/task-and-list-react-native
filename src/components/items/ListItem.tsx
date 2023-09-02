import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ListItemInterface} from '../../core/interfaces/ListInterface';

/**
 * ListItem
 *
 * @param item
 */
export const ListItem: React.FC<ListItemInterface> = ({item}) => (
  <View style={styles.container}>
    <View style={styles.group}>
      <Image
        source={{
          uri: 'https://api.multiavatar.com/Binx%20Bond.png',
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>{item.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 0.6,
    marginHorizontal: 10,
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 15,
  },
  textStyle: {
    maxWidth: '80%',
    color: 'black',
    fontWeight: 'bold',
  },
});
