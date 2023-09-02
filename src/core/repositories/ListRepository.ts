import {axiosInstance} from '../api/axiosInstance';
import {ListInterface} from '../interfaces/ListInterface';
import {Dispatch} from '@reduxjs/toolkit';
import {setList} from '../redux/slices/listSlice';

/**
 * List repository
 */
export default class ListRepository {
  /**
   * Get list of elements
   */
  setLists = () => async (dispatch: Dispatch) => {
    try {
      const response = await axiosInstance.get<ListInterface[]>('/elements');
      if (response.status === 200) {
        return dispatch(setList(response.data));
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
