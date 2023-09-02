import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import {RootStackParamList} from '../src/core/types';

describe('Componente HomeScreen', () => {
  test('Renderizar los botones', () => {
    const navigation: StackNavigationProp<RootStackParamList, 'Home'> = {
      navigate: jest.fn(),
    };
    const {getByText} = render(<HomeScreen navigation={navigation} />);
    expect(getByText('Tasks')).toBeTruthy();
    expect(getByText('List')).toBeTruthy();
  });

  test('Navegar a la pantalla "Tasks" cuando el boton "Tasks" es presionado', () => {
    const navigation: StackNavigationProp<RootStackParamList, 'Home'> = {
      navigate: jest.fn(),
    };
    const {getByText} = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByText('Tasks'));
    expect(navigation.navigate).toHaveBeenCalledWith('Tasks');
  });

  test('Navegar a la pantalla "List" cuando el boton "List" es presionado', () => {
    const navigation: StackNavigationProp<RootStackParamList, 'Home'> = {
      navigate: jest.fn(),
    };
    const {getByText} = render(<HomeScreen navigation={navigation} />);
    fireEvent.press(getByText('List'));
    expect(navigation.navigate).toHaveBeenCalledWith('List');
  });
});
