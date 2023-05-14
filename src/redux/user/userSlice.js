import { createSlice } from '@reduxjs/toolkit'

const initialState = null

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (_, {payload}) => payload,
  },
})

export const { actions } = counterSlice

export default counterSlice.reducer