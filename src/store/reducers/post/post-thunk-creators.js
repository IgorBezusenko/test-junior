// import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
//
// export const PostThunkCreators = {
//     getPosts: createAsyncThunk(
//         'posts/getPosts',
//         async (posts, thunkAPI) => {
//             try {
//
//                 return localStorage.getItem("posts")
//
//             } catch (e) {
//                 return thunkAPI.rejectWithValue(e.message)
//             }
//         }
//     ),
//     savePosts: createAsyncThunk(
//         'posts/savePosts',
//         (posts, thunkAPI) => {
//             try {
//                 setTimeout(() => {
//                     localStorage.set("posts", posts)
//                 }, 1000)
//             } catch (e) {
//                 return thunkAPI.rejectWithValue(e.message)
//             }
//         }
//     )
//
// }
