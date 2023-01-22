import { createSlice } from "@reduxjs/toolkit";
import developersService from "../../services/developers.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const developersSlice = createSlice({
    name: "developers",
    initialState,
    reducers: {
        developersRequested(state) {
            state.isLoading = true;
        },
        developersRequestFailed(state, action) {
            state.error = action.payload;
        },
        developersReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: developersReducer, actions } = developersSlice;
const { developersRequested, developersRequestFailed, developersReceived } =
    actions;

export const loadDevelopersList = () => async (dispatch) => {
    dispatch(developersRequested());
    try {
        const { content } = await developersService.fetchAll();
        dispatch(developersReceived(content));
    } catch (error) {
        dispatch(developersRequestFailed(error.message));
    }
};

export const getDevelopersList = () => (state) => {
    return state.developers.entities ? state.developers.entities : null;
};
export const getDeveloperById = (id) => (state) => {
    return state.developers.entities
        ? state.developers.entities.find((developer) => developer.id === id)
        : null;
};
export const getDevelopersLoadingStatus = () => (state) => {
    return state.developers.isLoading;
};

export default developersReducer;
