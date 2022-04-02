import React, { Component } from "react";
import { render } from "@testing-library/react";
class Card extends Component {
    render() {
        let { title, btnText, imgSrc } = this.props
        return <div className="card col-3 text-center p-0 m-5 " >
            <img src={`${imgSrc}`} className="card-img-top" alt="..." style={{ height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-success">{btnText}</a>
            </div>

        </div>
    }

}
export default Card;