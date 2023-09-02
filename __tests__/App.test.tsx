import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  test('Renderizar a las pantallas "Tasks" y "List"', () => {
    const {getByText} = render(<App />);
    const taskScreenText = getByText('Tasks');
    const listScreenText = getByText('List');
    expect(taskScreenText).toBeTruthy();
    expect(listScreenText).toBeTruthy();
  });
});
