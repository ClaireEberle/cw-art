import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import instagram from "../../images/instagram.png"
import email from "../../images/email.png"

const Footer = (props) => {
    return (
        <footer className="footer">
            

            <ul className="footer-ul">
                <li className="footer-li">
                    <a className="footer-a"
                    href="https://www.instagram.com/kauri.c.w/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
                    target="_blank"><img src={instagram}/></a>
                </li>
                <li className="footer-li">
                    <a className="footer-a"
                    href="#"
                    target="_blank"><img src={email}/></a>
                </li>
            </ul>
                   
        </footer>
    )
}

export default Footer;
