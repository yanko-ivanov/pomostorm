import {createSlice} from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';

export const tasksSlice = createSlice({
   name: 'tasks',
    initialState: {
       list: []
    },
    reducers: {
       add: (state, action) => {
           state.list.push(action.payload)
       }
    }
});

export const {add} = tasksSlice.actions;

export const tasksCount = state => state.tasks.list.length;
export const tasks = state => state.tasks.list;

export default tasksSlice.reducer;