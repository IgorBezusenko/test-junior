import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
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
            localStorage.setItem("posts", JSON.stringify(state.posts))
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(item => item.id !== action.payload)
            localStorage.setItem("posts", JSON.stringify(state.posts))
        },
    }
})

export const PostActionCreators = postSlice.actions
export const postReducer = postSlice.reducer
