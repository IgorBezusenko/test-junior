import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getPosts(state, action) {
            state.posts = action.payload
        },
        addPost(state, action) {
            state.posts.push(action.payload)
        },
    }
})

export const PostActionCreators = postSlice.actions
export const postReducer = postSlice.reducer
