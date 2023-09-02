import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  TaskInterface,
  TaskStateInterface,
} from '../../interfaces/TaskInterface';
import {TASKS} from '../../helpers/Constants';

/**
 * initial State.
 */
const initialState: TaskStateInterface = {
  tasks: [],
};

/**
 * TaskSlice.
 */
export const taskSlice = createSlice({
  name: TASKS,
  initialState: initialState,
  reducers: {
    /**
     * Create task.
     *
     * @param state
     * @param action
     */
    createTask: (state, action: PayloadAction<TaskInterface>) => {
      state.tasks.push(action.payload);
      return state;
    },
  },
});

export const {createTask} = taskSlice.actions;
export default taskSlice.reducer;
