import './App.css'
import Post from "./components/Posts/Post";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useAction} from "./hooks/useAction";
import * as mockData from "./posts.json"

function App() {
    const {posts} = useSelector(state => state.postReducer)
    const {getPosts, addPost} = useAction()
    // const {id, title, body, tags} = posts && posts[0]
    let postLS = localStorage.getItem("posts")
    console.log("posts", posts)
    console.log("postLS", {postLS})

    useEffect(() => {
        if (postLS) {
            getPosts(JSON.parse(postLS))
            console.log("postLS")
        } else {
            getPosts(mockData.default)
            console.log("mockData")
        }

    }, [])

    return (
        <div className="App">
            <div className="container">
                <Tasks/>
                <section>
                    {posts.length !== 0 && posts.map(post => {
                        return <Post key={post.id} title={post.title} body={post.body} tags={post.tags}/>
                    })}

                    <Form/>
                </section>
            </div>
        </div>
    );
}

export default App;
