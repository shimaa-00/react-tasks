import React from 'react'
export default function Nav() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ fontWeight: "bold" }}>
        <div className="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="https://tse4.mm.bing.net/th?id=OIP.U1d5S0-jDZqQp6OY9EQ15AHaHG&pid=Api&P=0&w=163&h=156" alt="" width="70" height="60" />
            </a>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="posts">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="users">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="login">login</a>
                    </li>

                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )
}
