import { AppState } from "model"
import { createSlice } from "@reduxjs/toolkit"

const initialState: AppState = {
  user: null,
  userType: null,
  isLogged: false,
}

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /**
     * Updates the user and user type in the app state with the values from the action payload.
     *
     * @param {object} state - The current state of the app.
     * @param {object} action - The action containing the payload.
     * @returns {object} - The updated state of the app.
     */
    LOGIN: (state, action) => {
      state.user = action.payload.user
      state.userType = action.payload.userType
    },
    /**
     * Resets the user, authentication token, permission, user type, and login status in the state to their initial values.
     *
     * @param {object} state - The current state of the application.
     * @return {void} This function does not return anything.
     */
    LOGOUT: (state) => {
      state.user = null
      state.isLogged = false
    },
    /**
     * Updates the authentication token and login status in the state based on the action payload.
     *
     * @param {object} state - The current state of the application.
     * @param {object} action - The action containing the payload.
     * @param {string} action.payload - The authentication token to be set.
     * @returns {void}
     */
    SET_TOKEN: (state, action) => {
      state.isLogged = true
    },
  }
})

export const AppReducer = AppSlice.reducer
export const AppActions = AppSlice.actions
