import React, {Component} from 'react';
import { FaGithub, FaGitAlt } from "react-icons/fa6";


class Footer extends Component{
    render(){
        return(
            <div className='footer'>
                <h4>Made with  react by {this.props.name}</h4>
                <p>Copyright @{this.props.date}</p>
                <a href='https://www.google.com' >
                    <FaGithub  className='icon' />
                </a>
                <a href='https://www.udemy.com'>
                    <FaGitAlt  className='icon' />
                </a>
            </div>
        )
    }
}

export default Footer;