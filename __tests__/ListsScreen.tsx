import React from 'react';
import {Provider} from 'react-redux';
import {render, waitFor} from '@testing-library/react-native';
import ListsScreen from '../src/screens/ListScreen';
import {store} from '../src/core/redux/store/store';
import {ListStateInterface} from '../src/core/interfaces/ListInterface';
import reducer, {setList} from '../src/core/redux/slices/listSlice';

describe('ListsScreen', () => {
  test('Renderizar el loading cuando no estan cargados los datos.', async () => {
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockReturnValue([true, jest.fn()]);

    const {getByTestId} = render(
      <Provider store={store}>
        <ListsScreen />
      </Provider>,
    );

    const loader = getByTestId('loader');
    expect(loader).toBeTruthy();
    useStateSpy.mockRestore();
  });

  test('Renderizar la lista cargada.', async () => {
    const initialState: ListStateInterface = {
      lists: [],
    };

    reducer(initialState, setList([]));
    const {getAllByText} = render(
      <Provider store={store}>
        <ListsScreen />
      </Provider>,
    );

    await waitFor(() => {
      const lists = getAllByText(/Pauline/);
      expect(lists).toHaveLength(1);
    });
  });
});
