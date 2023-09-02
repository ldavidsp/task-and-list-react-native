import {RootState, store} from '../src/core/redux/store/store';
import {listSlice} from '../src/core/redux/slices/listSlice';
import {taskSlice} from '../src/core/redux/slices/taskSlice';
import {configureStore} from '@reduxjs/toolkit';
import {TaskInterface} from '../src/core/interfaces/TaskInterface';
import {ListInterface} from '../src/core/interfaces/ListInterface';

describe('Redux Store', () => {
  test('Verificando que el store este  configurado correctamente', () => {
    expect(store).toBeDefined();
  });

  test('Verificando el estado inicial', () => {
    const initialState: RootState = store.getState();
    expect(initialState.tasks).toEqual({
      tasks: [],
    });
    expect(initialState.lists).toEqual({
      lists: [],
    });
  });
});

describe('Reducers', () => {
  let testStore = configureStore({
    reducer: {
      tasks: taskSlice.reducer,
      lists: listSlice.reducer,
    },
  });

  test('Validando que el reducer de "Tasks" este correctamente', () => {
    const newTask: TaskInterface = {
      description: 'Task one',
    };

    testStore.dispatch(taskSlice.actions.createTask(newTask));
    const updatedState: RootState = testStore.getState();
    expect(updatedState.tasks.tasks).toHaveLength(1);
    expect(updatedState.tasks.tasks[0]).toEqual(newTask);
  });

  test('Validando que el reducer de "List" este correctamente', () => {
    const newList: ListInterface[] = [
      {
        id: 1,
        name: 'List 1',
        avatar: 'https://i.pravatar.cc/300',
        createdAt: '2021-09-01T00:00:00.000Z',
      },
    ];

    testStore.dispatch(listSlice.actions.setList(newList));
    const updatedState: RootState = testStore.getState();
    expect(updatedState.lists.lists).toHaveLength(1);
    expect(updatedState.lists.lists).toEqual(newList);
  });
});
