import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useAppSelector} from '../src/core/redux/hooks';
import TasksScreen from '../src/screens/TasksScreen';

jest.mock('../src/core/redux/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

describe('TasksScreen Component', () => {
  it('Renderizar correctamente', () => {
    const mockTasks = [{description: 'Tarea 1'}, {description: 'Tarea 2'}];
    (useAppSelector as jest.Mock).mockReturnValue(mockTasks);

    const {getByText} = render(<TasksScreen />);
    expect(getByText('New Task')).toBeTruthy();
    expect(getByText('Tarea 1')).toBeTruthy();
    expect(getByText('Tarea 2')).toBeTruthy();
  });

  it('Abrir y cerrar el modal al hacer clic en "New Task"', () => {
    const {getByText, queryByText} = render(<TasksScreen />);
    const newTaskButton = getByText('New Task');

    expect(queryByText('Add')).toBeNull();
    fireEvent.press(newTaskButton);

    expect(getByText('Add')).toBeTruthy();
    fireEvent.press(newTaskButton);

    expect(queryByText('Add')).toBeNull();
  });
});
