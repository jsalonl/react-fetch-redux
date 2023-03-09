import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
    { id: '0', name: 'Tim Berners-Lee' },
    { id: '1', name: 'Brendan Eich' },
    { id: '2', name: 'Guido van Rossum' },
  ],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
})

export default userSlice.reducer