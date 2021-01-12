import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <ul className="icons">
                    <li><a target="_blank" href="https://www.linkedin.com/in/ayushgupta1197/" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
                    <li><a target="_blank" href="https://github.com/ayushgupta11" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a target="_blank" href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a target="_blank" href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>Made with  <a style={{ margin: '0 5px', color: 'red' }} target="_blank" href="#" className="icon solid fa-heart"><span className="label"></span></a> by Ayush Gupta</li>
                </ul>
            </div>
        </footer>
    )
}
