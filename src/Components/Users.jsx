import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Users() {
    let [users, setUsers] = useState([]);
    let getAllUsers = async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUsers();
    }, [])
    return (
        <div className=' alert-success  '>
            <h1 style={{ textAlign: "center" }}>Users list</h1>
            <table class="table border-secondary">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user, index) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}
