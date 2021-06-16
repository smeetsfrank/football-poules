import { createSlice } from '@reduxjs/toolkit';
import { ITeams } from '../../types/types';

const initialState: ITeams = {
  teams: [],
};

export const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams(state, action) {
      state.teams = action.payload;
    },
  },
});

export const { setTeams } = teamSlice.actions;
export default teamSlice.reducer;
