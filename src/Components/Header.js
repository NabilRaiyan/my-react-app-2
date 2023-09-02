import React, {Component} from "react";


class Header extends Component{
    render(){
        return(
            <div className="header">
                <a className="navLink" href="https://www.google.com">Home</a>
                <a className="navLink" href="https://www.google.com">About</a>
                <a className="navLink" href="https://www.google.com">Contact</a>
            </div>
        )
    }
}

export default Header;