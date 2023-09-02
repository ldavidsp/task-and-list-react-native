import React, {useState} from 'react';
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';
import {TaskItem} from '../components/items/TaskItem';
import CreateTaskModal from '../components/modals/CreateTaskModal';
import {useAppSelector} from '../core/redux/hooks';

/**
 * TasksScreen.
 */
const TasksScreen = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.bgWite}>
      <View style={styles.buttonSection}>
        <Pressable style={styles.buttonStyle} onPress={toggleModal}>
          <Text style={styles.textStyle}>New Task</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskItem description={item.description} />}
      />
      <>
        <CreateTaskModal isVisible={isModalVisible} onClose={toggleModal} />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  bgWite: {
    backgroundColor: '#FFF',
    height: '100%',
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
    marginTop: 4,
    marginBottom: 4,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default TasksScreen;
