import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import sharedActions from '../../sharedActions/shared_actions';
interface DummyState {
  value: string;
}
const initialState: DummyState = {
  value: 'dummy value2'
};

export const dummySlice2 = createSlice({
  name: 'dummy/dummy2', //this should be unique
  initialState,
  reducers: {
    changeNameOfSlice2: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sharedActions.resetAllState, (_state, _action) => {
      _state = initialState;
    });
  }
});
export const dummy2_actions = dummySlice2.actions;
export const { changeNameOfSlice2 } = dummySlice2.actions;
