import reducer, {createTask} from '../src/core/redux/slices/taskSlice';
import {
  TaskInterface,
  TaskStateInterface,
} from '../src/core/interfaces/TaskInterface';

describe('taskSlice', () => {
  test('Validando el estado inicial', () => {
    const initialState = {
      tasks: [],
    };

    const undefinedData: TaskInterface | undefined = undefined;
    expect(reducer(initialState, createTask(undefinedData))).toEqual(
      initialState,
    );
  });

  test('Validando y agregando datos si la lista esta vacia', () => {
    const initialState = {
      tasks: [],
    };

    const newTask: TaskInterface = {
      description: 'Task 1',
    };

    expect(reducer(initialState, createTask(newTask))).toEqual({
      tasks: [newTask],
    });
  });

  test('Validando y agregando datos si la lista no esta vacia', () => {
    const previousState: TaskStateInterface = {
      tasks: [{description: 'Task 1'}],
    };

    const newTask: TaskInterface = {
      description: 'Task 2',
    };

    expect(reducer(previousState, createTask(newTask))).toEqual({
      tasks: [{description: 'Task 1'}, {description: 'Task 2'}],
    });
  });
});
