import ListRepository from '../repositories/ListRepository';
import {Dispatch} from '@reduxjs/toolkit';

/**
 * List services
 */
export default class ListServices {
  protected listRepository = new ListRepository();

  /**
   * Get list of elements
   */
  setLists = () => async (dispatch: Dispatch) => {
    try {
      return await this.listRepository.setLists()(dispatch);
    } catch (error: any) {
      throw new Error(error);
    }
  };
}
