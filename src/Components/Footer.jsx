import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export default function Footer() {
    return (<MDBFooter color="blue" className="font-small text-light " style={{ marginTop: "-16px", fontWeight: "bold" }}>
        <MDBContainer fluid className="text-center text-md-left   p-5" style={{ backgroundColor: '#264653', }} >
            <MDBRow>
                <MDBCol md="6">
                    <div></div>
                    <h5 className="title">Footer Content</h5>
                    <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                    </p>
                </MDBCol>
                <MDBCol md="6">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="users">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light" href="login">Login</a>
                        </li>

                    </ul>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 text-light " style={{ backgroundColor: "#073b4c" }}>
            <MDBContainer fluid >
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com" style={{ textDecoration: "none", color: "white" }}> MDBootstrap.com </a>
            </MDBContainer>
        </div>
    </MDBFooter >
    )
}
