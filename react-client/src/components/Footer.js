import React from 'react';

const Footer = () => {

    return (

        <footer className="footer">

            <ul className="footer__list">
                <li className="footer__list--item"><a href="" className="fa fa-2x fa-github-square"/></li>
                <li className="footer__list--item"><a href="" className="fa fa-2x fa-instagram"/></li>
                <li className="footer__list--item"><a href="" className="fa fa-2x fa-linkedin-square"/></li>
                <li className="footer__list--item"><a href="" className="fa fa-2x fa-codepen"/></li>
            </ul>
            {/*Copyright*/}
            <p className="footer__copyright">&copy; James Chhun 2018
            </p>
        </footer>

    )

}

export default Footer;
