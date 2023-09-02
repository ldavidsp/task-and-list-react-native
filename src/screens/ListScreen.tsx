import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {ListItem} from '../components/items/ListItem';
import {useAppSelector, useAppDispatch} from '../core/redux/hooks';
import ListServices from '../core/services/ListServices';

/**
 * ListsScreen.
 */
const ListsScreen = () => {
  const [loading, setLoading] = useState(true);
  const lists = useAppSelector((state: any) => state.lists.lists);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loading) {
      new ListServices()
        .setLists()(dispatch)
        .then(() => {
          setLoading(false);
        });
    }
  }, [dispatch, loading]);

  if (loading) {
    return (
      <View testID={'loader'} style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        nestedScrollEnabled={true}>
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={lists}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListsScreen;
