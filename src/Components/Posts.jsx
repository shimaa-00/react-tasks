import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Posts(props) {
    let [posts, setPosts] = useState([]);
    let { onBody, onTitle } = props;
    let getAllPosts = async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    let navigate = useNavigate();
    let postDetails = (e) => {

        onBody(e.target.parentElement.previousElementSibling.innerText);
        onTitle(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
        navigate('/details');
    }
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <div className=' alert-success '>
            <h1 style={{ textAlign: "center" }}>Posts list</h1>
            <table className="table border-secondary " >
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>PostId</th>
                        <th>Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts && posts.map((post, index) => {
                        return (
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>
                                    <button type="button" class="btn btn-warning mx-3" >
                                        Edit
                                    </button>
                                    <button type="button" class="btn btn-info mx-3" onClick={(e) => {
                                        postDetails(e);
                                    }}>View</button></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </div>
    )

}

