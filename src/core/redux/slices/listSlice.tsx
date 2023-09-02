import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  ListInterface,
  ListStateInterface,
} from '../../interfaces/ListInterface';
import {LISTS} from '../../helpers/Constants';

/**
 * initial State.
 */
const initialState: ListStateInterface = {
  lists: [],
};

/**
 * ListSlice.
 */
export const listSlice = createSlice({
  name: LISTS,
  initialState: initialState,
  reducers: {
    /**
     * Set list.
     *
     * @param state
     * @param action
     */
    setList: (state, action: PayloadAction<ListInterface[]>) => {
      state.lists = action.payload;
      return state;
    },
  },
});

export const {setList} = listSlice.actions;
export default listSlice.reducer;
