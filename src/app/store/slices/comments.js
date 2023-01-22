import { createSlice } from "@reduxjs/toolkit";
import commentsService from "../../services/comments.service";

const initialState = {
    entities: null,
    error: null,
    isLoading: true
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsRequested(state) {
            state.isLoading = true;
        },
        commentsReceived(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        commentsRequestFailed(state, action) {
            state.error = action.payload;
        },
        commentCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        commentDeleted(state, action) {
            state.entities = state.entities.filter(
                (comment) => comment.id !== action.payload
            );
        },
        loadFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const {
    commentsRequested,
    commentsReceived,
    loadFailed,
    commentsRequestFailed,
    commentCreated,
    commentDeleted
} = actions;

export const loadCommentsList = (pageId) => async (dispatch, getState) => {
    dispatch(commentsRequested());
    try {
        const { content } = await commentsService.get(pageId);
        dispatch(commentsReceived(content));
    } catch (error) {
        dispatch(loadFailed(error.message));
    }
};

export const deleteComment = (commentId) => async (dispatch) => {
    try {
        await commentsService.delete(commentId);
        dispatch(commentDeleted(commentId));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export const getComments = () => (state) => state.comments.entities;

export const createComment = (comment) => async (dispatch) => {
    try {
        await commentsService.create(comment.id, comment);
        dispatch(commentCreated(comment));
    } catch (error) {
        dispatch(commentsRequestFailed(error.message));
    }
};

export default commentsReducer;
