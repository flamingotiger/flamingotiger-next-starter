import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

const name = 'USER';

export interface UserState {
	user: null | string;
}

export const initialState: UserState = {
	user: null
};

const slice = createSlice({
	name,
	initialState,
	reducers: {
		signIn(state, { payload }: PayloadAction<{ user: string }>) {
			state.user = payload.user;
		},
		signOut(state) {
			state.user = null;
		}
	}
});

export const userName = slice.name;
export const userReducer = slice.reducer;
export const userAction = slice.actions;

export const userSelector = (state: RootState) => state.user;

export default slice;
