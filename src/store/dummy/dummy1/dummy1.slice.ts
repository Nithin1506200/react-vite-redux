import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import sharedActions from '../../sharedActions/shared_actions';
interface DummyState {
  value: string;
}
const initialState: DummyState = {
  value: 'dummy value'
};

export const dummySlice1 = createSlice({
  name: 'dummy/dummy1',
  initialState,
  reducers: {
    /**
     * the action type here is `dummy/dummy1/changeName
     * @param state
     * @param action
     */
    changeName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetDummyState: (_state) => {
      _state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sharedActions.resetAllState, (_state, _action) => {
      return initialState;
    });
  }
});

export const dummy1_actions = dummySlice1.actions;
export const { changeName } = dummySlice1.actions;
