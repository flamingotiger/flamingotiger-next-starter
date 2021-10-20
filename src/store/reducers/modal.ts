import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export interface ModalState {
	modal: null;
}

const name = 'MODAL';

export const initialState: ModalState = {
	modal: null,
};

const slice = createSlice({
	name,
	initialState,
	reducers: {
		add: (state, { payload }: PayloadAction<{ modal: null }>) => {
			state.modal = payload.modal;
		},
		remove: (state) => {
			state.modal = null;
		},
		clear: (state) => {
			state.modal = null;
		},
	},
});

export const modalName = slice.name;
export const modalReducer = slice.reducer;
export const modalAction = slice.actions;

export const modalSelector = (state: RootState) => state.modal;

export default slice;
