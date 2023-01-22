import { createSlice } from "@reduxjs/toolkit";
import qualitiesService from "../../services/qualities.service";

const initialState = {
    entities: null,
    isLoading: true,
    error: null
};

const qualitiesSlice = createSlice({
    name: "qualities",
    initialState,
    reducers: {
        qualitiesRequested(state) {
            state.isLoading = true;
        },
        qualitiesRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        qualitiesReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: qualitiesReducer, actions } = qualitiesSlice;
const { qualitiesRequested, qualitiesRequestFailed, qualitiesReceived } =
    actions;

export const loadQualitiesList = () => async (dispatch) => {
    dispatch(qualitiesRequested());
    try {
        const { content } = await qualitiesService.fetchAll();
        dispatch(qualitiesReceived(content));
    } catch (error) {
        dispatch(qualitiesRequestFailed(error.message));
    }
};

export const getQualitiesListByIds = (qualitiesIds) => (state) => {
    const qualities = [];
    for (const qualityId of qualitiesIds) {
        for (const quality of state.qualities.entities) {
            if (qualityId === quality.id) {
                qualities.push(quality);
            }
        }
    }
    return qualities;
};
export const getQualitiesList = () => (state) =>
    state.qualities.entities ? state.qualities.entities : null;
export const getQualitiesLoadingStatus = () => (state) => {
    return state.qualities.isLoading;
};

export default qualitiesReducer;
