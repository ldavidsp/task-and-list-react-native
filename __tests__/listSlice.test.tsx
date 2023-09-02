import reducer, {setList} from '../src/core/redux/slices/listSlice';
import {
  ListInterface,
  ListStateInterface,
} from '../src/core/interfaces/ListInterface';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('listSlice', () => {
  test('Obtener la lista', async () => {
    const initialState: ListStateInterface = {
      lists: [],
    };
    const mockAxios = new MockAdapter(axios);
    const listData: ListInterface[] = [
      {
        id: 1,
        name: 'List 1',
        avatar: 'https://i.pravatar.cc/300',
        createdAt: '2021-09-01T00:00:00.000Z',
      },
      {
        id: 2,
        name: 'List 2',
        avatar: 'https://i.pravatar.cc/300',
        createdAt: '2021-09-01T00:00:00.000Z',
      },
    ];

    mockAxios.onGet('/api/lists').reply(200, listData);
    const action = setList(listData);
    const newState = reducer(initialState, action);
    await action.payload;
    expect(newState.lists).toEqual(listData);
  });
});
