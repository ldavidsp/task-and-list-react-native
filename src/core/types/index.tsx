import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  List: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type CreateTaskModalProp = {
  isVisible: boolean;
  onClose: () => void;
};
