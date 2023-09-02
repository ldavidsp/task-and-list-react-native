import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CreateTaskModal from '../src/components/modals/CreateTaskModal';
import {Provider} from 'react-redux';
import {store} from '../src/core/redux/store/store';
import reducer, {createTask} from '../src/core/redux/slices/taskSlice';
import {TaskInterface} from '../src/core/interfaces/TaskInterface';
import {Alert} from 'react-native';
import {
  ALERT_MESSAGE,
  ALERT_TITLE_WARNING,
} from '../src/core/helpers/Constants';

jest.mock('../src/core/redux/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe('CreateTaskModal', () => {
  test('Mostrar el modal', () => {
    const {getByPlaceholderText, getByText} = render(
      <Provider store={store}>
        <CreateTaskModal isVisible={true} onClose={() => {}} />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('New Task Name');
    const addButton = getByText('Add');
    expect(inputElement).toBeTruthy();
    expect(addButton).toBeTruthy();
  });

  test('Validar la entrada del campo', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <CreateTaskModal isVisible={true} onClose={() => {}} />
      </Provider>,
    );
    const inputElement = getByPlaceholderText('New Task Name');
    fireEvent.changeText(inputElement, 'Task one');
    expect(inputElement.props.value).toBe('Task one');
  });

  test('Guardando la task', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <CreateTaskModal isVisible={true} onClose={() => {}} />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('New Task Name');
    fireEvent.changeText(inputElement, 'Task one');
    expect(inputElement.props.value).toBe('Task one');
    const newTask: TaskInterface = {
      description: inputElement.props.value,
    };

    const initialState = {
      tasks: [],
    };

    expect(reducer(initialState, createTask(newTask))).toEqual({
      tasks: [newTask],
    });
  });

  test('Mostrar alerta al presionar el boton "Add" si es el campo esta vacio', () => {
    const {getByText} = render(
      <Provider store={store}>
        <CreateTaskModal isVisible={true} onClose={() => {}} />
      </Provider>,
    );
    const addButtonElement = getByText('Add');

    jest.spyOn(Alert, 'alert');
    fireEvent.press(addButtonElement);
    expect(Alert.alert).toHaveBeenCalledWith(
      ALERT_TITLE_WARNING,
      ALERT_MESSAGE,
    );
  });
});
