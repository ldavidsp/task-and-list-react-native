import React, {useState} from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import {createTask} from '../../core/redux/slices/taskSlice';
import {TaskInterface} from '../../core/interfaces/TaskInterface';
import {CreateTaskModalProp} from '../../core/types';
import {useAppDispatch} from '../../core/redux/hooks';
import {ALERT_MESSAGE, ALERT_TITLE_WARNING} from '../../core/helpers/Constants';

/**
 * CreateTaskModal
 */
const CreateTaskModal: React.FC<CreateTaskModalProp> = ({
  isVisible,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState<TaskInterface>({
    description: '',
  });

  const handleSaveTask = () => {
    if (task.description.trim() !== '') {
      dispatch(createTask(task));
      setTask({description: ''});
      onClose();
    } else {
      Alert.alert(ALERT_TITLE_WARNING, ALERT_MESSAGE);
    }
  };

  return (
    <View>
      <Modal transparent={true} visible={isVisible}>
        <View style={styles.openModal}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={text => setTask({description: text})}
              value={task.description}
              placeholder="New Task Name"
            />
            <Pressable style={[styles.buttonStyle]} onPress={handleSaveTask}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  openModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    opacity: 1,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputStyle: {
    height: 50,
    width: '100%',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  buttonStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#c2ddfc',
    paddingVertical: 18,
    verticalAlign: 'middle',
    shadowColor: '#000',
    marginTop: 20,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CreateTaskModal;
